<script setup>
import { ref, computed } from 'vue';
import DOMPurify from 'dompurify';
import iconPinUp from './assets/icon-pin-up.svg';
import iconPinDown from './assets/icon-pin-down.svg';
import './Note.css';

const maxLength = 100;

const {
    icon,
    title,
    description,
    footer
} = defineProps( ['icon', 'title', 'description', 'footer']);

const isHovered = ref(false);

const sanitizedDescription = DOMPurify.sanitize(description);
const shortDescription = sanitizedDescription.length > maxLength ? sanitizedDescription.substring(0, maxLength - 10) + '... ' : sanitizedDescription;
const sanitizedFooter = DOMPurify.sanitize(footer);

const displayDescription = computed(() => isHovered.value ? sanitizedDescription : shortDescription);
const pinIconSrc = computed(() => isHovered.value ? iconPinUp : iconPinDown);

const handleMouseOver = () => {
    isHovered.value = true;
};

const handleMouseLeave = () => {
    isHovered.value = false;
};
</script>

<template>
    <li class="npb_note" @mouseover="handleMouseOver" @mouseleave="handleMouseLeave" @focus="handleMouseOver" @blur="handleMouseLeave">
        <div class="npb_note_div">
            <div class="npb_note_pin_div">
                <img alt="Pin" :src="pinIconSrc" width="48" height="48" />
            </div>
            <p class="npb_note_title">{{title}}</p>
            <div class="npb_note_description" v-if="sanitizedDescription" v-html="displayDescription"></div>
            <template v-if="sanitizedFooter">
                <hr />
                <div class="npb_note_footer" v-html="sanitizedFooter"></div>
            </template>
        </div>
        <div class="npb_note_div_back"></div>
    </li>
</template>

