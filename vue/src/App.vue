<script setup>
import { watch, ref } from 'vue';

import PinBoard from './components/PinBoard.vue'

import data from "./MockNotas.json";

const noteList = ref(data);

</script>

<template>
  <main>
    <h1>Notes PinBoard App</h1>
    <PinBoard :noteList="noteList" />
  </main>
</template>
