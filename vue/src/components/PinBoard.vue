<script setup>
import { defineProps  } from 'vue';
import Note from './Note.vue';
import './PinBoard.css';

const {
    noteList
} = defineProps(['noteList']);

</script>

<template>
    <div class="npb_pinboard">
        <ul class="npb_pinboard_card_locations">
            <Note
            v-for="(note, index) in noteList"
            :icon="note.icon"
            :title="note.title"
            :description="note.description"
            :footer="note.footer"
            ></Note>
        </ul>
    </div>
</template>