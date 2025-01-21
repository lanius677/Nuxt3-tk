<template>
  <NGrid :x-gap="20">
    <NGridItem :span="5">
      <!-- 导航菜单 -->
      <ul class="list-none bg-white rounded m-0 p-0">
        <li
          v-for="(item, index) in menus"
          :key="index"
          class="px-5 py-5 text-sm cursor-pointer hover:(bg-blue-50)"
          :class="{ active: item.name === activeName }"
          @click="navigateTo({ name: item.name })"
        >
        {{ item.title }}
        </li>
      </ul>
    </NGridItem>

    <NGridItem :span="19" class="bg-white rounded mb-5 min-h-[66vh]">
      <div>
      <NuxtPage :key="pageKey" keep-alive> </NuxtPage>
      </div>
    </NGridItem>
  </NGrid>
</template>

<script setup lang="ts">
const route = useRoute();
const pageKey = computed(() => route.fullPath);

definePageMeta({
  middleware: ['auth'],
})


const menus = [
  {
    title: "已购课程",
    name: "usercenter-buy",
  },
  {
    title: "修改资料",
    name: "usercenter-info",
  },
  {
    title: "修改密码",
    name: "usercenter-pwd",
  },
];

const activeName = computed(() => route.name);
</script>

<style scoped></style>
