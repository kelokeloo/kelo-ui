<template>
  <button class="btnContainer"
    :class="classObject"
    :style="styleObject"
    @click="clickAnimate"
  >
    <!-- 功能说明 -->
    <!-- ✅1. 按钮类型type: primary / success / warning / danger / info -->
    <!-- ✅2. 按钮风格 普通 圆角round 圆形circle -->
    <!-- ✅3. 按钮禁用disabled -->
    <!-- ✅4. 按钮尺寸size: large / default /small -->
    <!-- ✅5. 自定义颜色color -->
    <!-- ✅6. 点击风格style -->
    <slot></slot>
  </button>
</template>
<script setup lang="ts">
import { defineProps, withDefaults, reactive, ref, watch, computed } from 'vue'
//Props 接口
interface PropsApi {
  type?: 'primary' | 'success' | 'warning' | 'danger' | 'info'  ,
  round?: boolean,
  circle?: boolean,
  disable?: boolean,
  size?: 'large' | 'default' | 'small',
  color?: string
}

const props = withDefaults(defineProps<PropsApi>(), {
  type: 'info',
  round: false,
  circle: false,
  disable: false,
  size: 'default',
  color: ''
})

let isAnimate = ref(false) 

const classObject = computed(()=>({
  ['type-' + props.type] : true,
  'round': props.round,
  'circle': props.circle,
  'disable': props.disable,
  ['size-' + props.size]: props.size ? true : false,
  color: props.color,
  'clickAnimate': isAnimate.value && !props.disable,
  'successAnimate': isAnimate.value && props.disable
}))

// const classObject = reactive({
//   [props.type] : true,
//   'round': props.round,
//   'circle': props.circle,
//   'disable': props.disable,
//   ['size-' + props.size]: props.size ? true : false,
//   color: props.color,
//   'clickAnimate': isAnimate.value
// })

console.log(props);

const styleObject = reactive({
  backgroundColor: props.color + ' !important'
})

const clickAnimate = ()=>{
  isAnimate.value = true
  const time = setTimeout(() => {
    isAnimate.value = false
    clearTimeout(time)
  }, 300);
}


watch([classObject], (newValue)=>{ 
  // console.log(newValue);
})


</script>
<style scoped lang="scss">

// 基础样式
.btnContainer{  
  border: 0;
  background-color: #aaa;
  color: white;
  cursor: pointer;
  border-radius: .3rem !important;
}

// 按钮类型
.type-primary{
  background-color: #3498DB;
}
.type-success{
  background-color: #2ECC71;
}
.type-warning{
  background-color: #F1C40F;
}
.type-danger{
  background-color: #E74C3C;
}
.type-info{
  background-color: #aaa;
}


// 无法点击
.disable{
  // background: red;
  filter: brightness(110%);
  border-style: dashed;
  cursor: not-allowed;
}

// 圆角按钮
.round{
  border-radius: 999999px !important;
}

// 原型按钮
.circle{
  border-radius: 50% !important;
}


// 按钮大小设置
.size-default{
  font-size: 1.1rem;
  padding: .4rem .6rem;
}
.size-large{
  font-size: 1.3rem;
  padding: .8rem .8rem;
}
.size-small{
  font-size: 1rem;
  padding: .2rem .4rem;
}


//点击动画
.clickAnimate{
  animation: clickAnimate .3s ;
}
// 成功动画
@keyframes clickAnimate{
  0%{
    transform: scale(1);
  }
  50%{
    transform: scale(0.95);
  }
  100%{
    transform: scale(1);
  }
}

.successAnimate{
  animation: errorAnimate .3s;
}
// disable动画
@keyframes errorAnimate {
  0%, 100%{
    transform: translateX(0);
  }
  30%, 70%{
    transform: translateX(-0.2rem);
  }
  10%, 50%{
    transform: translateX(0.2rem);
  }
}

</style>