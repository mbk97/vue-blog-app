<script setup>
import { defineProps } from "vue";

const props = defineProps({
  text: {
    type: String,
    required: true,
  },
});
</script>
<template>
  <div class="title-text-container">
    <h2>{{ text }}</h2>
    <div class="underline"></div>
  </div>
</template>
<style scoped>
h2 {
  font-weight: 600;
}

.underline {
  height: 2px;
  width: 19px;
  background: #066316;
}
</style>
