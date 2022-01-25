<template>
  <div>
    <k-switch v-model="bool"></k-switch>
    {{bool}}
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const bool = ref(true)

</script>
<style scoped lang="scss">

</style>