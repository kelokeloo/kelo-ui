<template>
  <div>
    <k-switch v-model="bool" @change="show"></k-switch>
    {{bool}}
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const bool = ref(false)

const show = (b: boolean)=>{
  console.log('show', b);
}

</script>
<style scoped lang="scss">

</style>