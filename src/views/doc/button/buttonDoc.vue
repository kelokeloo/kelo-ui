<template>
  <div>
    <h1 class="title">button</h1> 
    
    <k-button size="large" round disable @click="cb">button</k-button>
    <k-button type="primary" color="blue" @click="cb">button</k-button>
    <k-button type="primary" size="small" color="#3498DB" @click="cb">button</k-button>
    
    <span>使用组件</span>
    <article>
    </article>
  </div>
</template>
<script setup lang="ts">

const cb = ()=>{
  console.log('click');
}


</script> 
<style scoped lang="scss">
.title{
  margin-bottom: 1rem;
}
</style>