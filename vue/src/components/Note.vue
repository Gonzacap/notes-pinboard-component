<script setup>
import DOMPurify from 'dompurify';
import './Note.css';

const {
    icon,
    title,
    description,
    footer
} = defineProps( ['icon', 'title', 'description', 'footer']);

const sanitizedDescription = DOMPurify.sanitize(description);
const sanitizedFooter = DOMPurify.sanitize(footer);

</script>

<template>
    <li class="npb_note">
        <div class="npb_note_div">
            <div class="npb_note_pin_div">
                <img alt="Pin" src="./assets/icon-pin-down.svg" width="48" height="48" />
            </div>
            <p class="npb_note_title">{{title}}</p>
            <div class="npb_note_description" v-if="sanitizedDescription" v-html="sanitizedDescription"></div>
            <template v-if="sanitizedFooter">
                <hr />
                <div class="npb_note_footer" v-html="sanitizedFooter"></div>
            </template>
        </div>
        <div class="npb_note_div_back"></div>
    </li>
</template>

