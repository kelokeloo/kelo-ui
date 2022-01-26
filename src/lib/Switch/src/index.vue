<template>
  <div class="switchBox" @click="clickBox"
    :class="boxClassObject"
  >
    <!-- Switch组件 -->
    <!-- ✅1. 通过v-model绑定组件的真假值 -->
    <!-- ✅2. 切换样式实现 -->
    <!-- ✅3. 向外提供change回调 -->

    <span :class="spanClassObject"></span>
  </div>
</template>
<script setup lang="ts">
import { computed, ref } from 'vue'



interface PropsApi{
  modelValue: boolean // 表示组件的真假值
}

const switchProps = defineProps<PropsApi>()

const switchEmit = defineEmits(['update:modelValue', 'change'])
// emitCB

let bool = ref(switchProps.modelValue)



// active 样式
const spanClassObject = computed(()=>{
  return {
    'span-active': bool.value,
    'span-inactive': !bool.value
  }
})

const boxClassObject = computed(()=>{
  return {
    'bgColor': bool.value
  }
})




// inactive 样式

// 点击事件的回调函数
const clickBox = ()=>{
  bool.value = !bool.value
  switchEmit('update:modelValue', bool.value)
  switchEmit('change', bool.value)
}


</script>
<style scoped lang="scss">
.switchBox {
  position: relative;
  width: 2rem;
  height: 1.2rem;
  border-radius: 99999px;
  background-color: white;
  transition: all .3s;
  border: 1px solid #95A5A6;
}
.bgColor{
  background-color: #3498DB;
}


.switchBox span{
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 1rem;
  height: 1rem;
  background-color: #BDC3C7;
  border-radius: 50%;
  transition: all .3s;
}

// 组件分别为真假时候的样式
.span-active{
  left: 40%;
  background-color: white !important;
}
.span-inactive{
  left: 10%;
}

</style>