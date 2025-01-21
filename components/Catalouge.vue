<template>
  <ul class="list-none">
    <li
      v-for="(item, index) in data"
      :key="item.id"
      class="flex p-5 border-b cursor-pointer text-sm hover:(!bg-gray-100) active:(!bg-gray-200)"
      @click="($event) => navigateTo(item.source, { external: true })"
    >
      <NTag :bordered="false" type="info" size="small" class="mr-3">
        第{{ index + 1 }}节
      </NTag>
      <span>{{ item.title }}</span>
    </li>
  </ul>
</template>

<script setup lang="ts">
import type { Catalogue } from '@prisma/client';

const props = defineProps({
  data:Array<Catalogue>
})

console.log('catalouge.data',props.data);
</script>

<style scoped></style>
