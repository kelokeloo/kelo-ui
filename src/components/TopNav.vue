<template>
  <div class="TopNav">
    <div class="logo"><span>KELO-UI</span></div>
    <div class="nav">
      <router-link 
        v-for="(item, index) in routes" :key="index"
        :to="item.path" :class="route.path === item.path ? 'focus' : ''"
      >{{item.label}}</router-link>
    </div>
  </div>
</template>
<script setup lang="ts">
import { defineProps } from 'vue'
import { useRoute } from 'vue-router'

interface route{
  path: string,
  label: string
}

const props = defineProps<{
  routes: Array<route>
}>()

const route = useRoute()





</script>
<style scoped lang="scss">
.TopNav{
  height: 4rem;
  padding: 0 2rem 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.TopNav{
  border-bottom: 1px solid #ccc;
}

.TopNav .logo{
  >span{
    font-size: 1.5rem;
  }
}

.TopNav .nav{
  & :nth-child(n){
    margin-left: 2rem;
    color: black;
  }
}

.focus{
  color: #1ABC9C !important;
}


</style>