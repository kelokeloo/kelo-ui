<template>
  <div>
    <TopNav :routes="routes"></TopNav>
    <router-view></router-view>
  </div>
</template>
<script setup lang="ts">
import TopNav from '@/components/TopNav.vue'


interface route{
  path: string,
  label: string
}

const routes: Array<route> = [
  { path: '/home', label: '首页' },
  { path: '/doc', label: '文档' }
]



</script>
<style scoped lang="scss">

</style>