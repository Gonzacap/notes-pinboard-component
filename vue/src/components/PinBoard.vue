<script setup>
import { defineProps  } from 'vue';
import Note from './Note.vue';

const {
    noteList
} = defineProps(['noteList']);

</script>

<template>
    <div class="npb_pinboard">
        <ul>
            <Note
            v-for="(note, index) in noteList"
            :title="note.title"
            :description="note.description"
            ></Note>
        </ul>
    </div>
</template>