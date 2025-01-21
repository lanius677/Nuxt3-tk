<template>
  <div class="w-full flex overflow-x-auto bg-white mb-4 border-b">
    <span
      v-for="item in data"
      :key="item.value"
      @click="($event) => changeTab(item.value)"
      :class="{ 'tab-item-active': item.value === state }"
      class="py-3 px-4 text-gray-700 text-sm cursor-pointer flex-shrink-0 hover:text-gray-600"
    >
      {{ item.label }}
    </span>
  </div>
</template>

<script setup lang="ts">
defineProps({
  data:{
    type:Array<{label:string; value:string}>,
    required:true
  },
  state:String
})

// 定义emit事件，事件名为change
const emit = defineEmits(['change'])

// 定义一个函数，用于切换tab
const changeTab = (state:string) => {
  console.log('state',state);
  emit('change', state)

}
</script>

<style scoped></style>
