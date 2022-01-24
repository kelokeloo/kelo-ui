<template>
  <div class="Container">
    <!-- 导航 -->
    <aside class="asideNav">
      <router-link :to="'/doc/button'" class="link focus">Button</router-link>
      <router-link :to="'/doc/switch'" class="link">Switch</router-link>
    </aside>
    <main><router-view></router-view></main>
  </div>
</template>
<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute()

</script>
<style scoped lang="scss">
.Container{
  display: flex;
}
.asideNav{
  width: 15rem;
  height: 100px;
  padding: 1rem;
}
.asideNav{
  border-right: 1px solid #ccc;
}

.asideNav .link{
  display: block;
  padding: .5rem 1rem;
  border-radius: .3rem;
}

.focus{
  background-color: #2ECC71;
  color: white;
}

.Container>main{
  padding: 1rem;
}
</style>