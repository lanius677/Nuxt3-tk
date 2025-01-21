<template>
  <div>
    <NCarousel show-arrow class="mb-6">
      <div
        v-for="item in slides"
        :key="item.label"
        class="text-white w-full h-[400px] rounded cursor-pointer text-center leading-[400px]"
        :style="{ backgroundColor: item.bgColor }"
      >
        {{ item.label }}
      </div>
    </NCarousel>

    <ProdList 
    :data="(data?.data.courses! as any[]) || []" 
    title="最新课程">
    </ProdList>

    <ProdList 
    :data="(data?.data.columns! as any[]) || []" 
    title="最新专栏"> 
    </ProdList>
  </div>
</template>

<script setup lang="ts">
import { NCarousel } from "naive-ui";
useHead({
  title: "tk学堂",
});

const { data, error } = await useFetch("/api/indexdata");

// console.log('data',data.value);
const slides = [
  { label: "1", bgColor: "cadetblue" },
  { label: "2", bgColor: "cornflowerblue" },
  { label: "3", bgColor: "blueviolet" },
  { label: "4", bgColor: "brown" },
];
if (import.meta.server && error.value) showError("获取数据失败！");
</script>

