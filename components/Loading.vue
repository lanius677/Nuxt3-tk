<template>
  <div>
  <template v-if="loading">
  <slot name="loading">
    <NCard v-for="i in 4" :key="i" class="mb-5">
      <NSkeleton text skyle="width: 30%"></NSkeleton>
      <NSkeleton text skyle="width: 45%"></NSkeleton>
      <NSkeleton text skyle="width: 60%"></NSkeleton>
      <NSkeleton text :repeat="2"></NSkeleton>
    </NCard>
  </slot>
  </template>
  <template v-else>
    <slot></slot>
  </template>
  </div>
</template>

<script setup lang="ts">
import { NSkeleton } from 'naive-ui';

const props = defineProps({
  status: {
    type: String,
    default: 'pending',
  },
});

// 防止加载过快画面闪烁
const loading = ref(false);
watchEffect(()=>{
  if(props.status==='pending' && !loading.value){
    loading.value = true;
  }else{
    setTimeout(()=>{
      loading.value = false;
    },5000)
  }
})

</script>

<style scoped></style>
