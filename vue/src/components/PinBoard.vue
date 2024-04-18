<script setup>
import { defineProps  } from 'vue';
import Note from './Note.vue';
import './PinBoard.css';

const {
    noteList
} = defineProps(['noteList']);

const centerOnFocus = (itemId) => {
    const element = document.getElementById(`npb_note-${itemId}`);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', inline: "center" });
    }
};

</script>

<template>
    <div class="npb_pinboard">
        <ul class="npb_pinboard_card_locations">
            <Note
            v-for="(note, index) in noteList"
            :key="note?.id || index"
            :id="`npb_note-${note?.id || index}`"
            :icon="note.icon"
            :title="note.title"
            :description="note.description"
            :footer="note.footer"
            @click="() => centerOnFocus(note?.id || index)"
            ></Note>
        </ul>
    </div>
</template>