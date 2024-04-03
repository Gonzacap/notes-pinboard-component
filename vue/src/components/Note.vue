<script setup>
defineProps( ['title', 'description']);
</script>

<template>
    <li>
        <a href="" class="note-link">
            <h2 class="aux">{{title}}</h2>
            <p class="aux">{{description}}</p>
        </a>
    </li>
</template>

