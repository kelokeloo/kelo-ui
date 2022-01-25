<template>
  <div>
    <!-- Switch组件 -->
    <!-- ✅1. 通过v-model绑定组件的真假值 -->
    <!-- 2.  -->

    switch
    
    <input ref="checkRef" type="checkbox" :checked="modelValue" @change="valueChange()">

  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'

interface PropsApi{
  modelValue: boolean // 表示组件的真假值
}

const switchProps = defineProps<PropsApi>()

const switchEmit = defineEmits(['update:modelValue'])
// emitCB

const valueChange = ()=>{
  switchEmit('update:modelValue', (checkRef.value as unknown as HTMLInputElement).checked)
}


// checkRef
const checkRef = ref(null)



</script>
<style scoped lang="scss">

</style>