<script setup>
import './Note.css';

defineProps( ['title', 'description']);
</script>

<template>
    <li class="npb_note">
        <div class="npb_note_div">
            <h2 class="npb_note_title">{{title}}</h2>
            <p class="npb_note_description">{{description}}</p>
        </div>
    </li>
</template>

