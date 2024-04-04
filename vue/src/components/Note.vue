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
            <h2 class="npb_note_title">{{title}}</h2>
            <div class="npb_note_description" v-if="sanitizedDescription" v-html="sanitizedDescription"></div>
            <template v-if="sanitizedFooter">
                <hr />
                <div class="npb_note_footer" v-html="sanitizedFooter"></div>
            </template>
        </div>
    </li>
</template>

