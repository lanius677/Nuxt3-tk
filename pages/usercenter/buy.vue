<template>
  <div class="p-3">
    <p v-if="status === 'pending'">loading...</p>
    <template v-else>
      <NCard
        v-for="item in data!.data as Course[] "
        :key="item.id"
        class="cursor-pointer mb-5 shadow-md !border-0"
        footer-style="padding:0;"
      >
        <div class="flex">
          <img :src="`/${item.cover}`" class="h-[150px]" />
          <div class="ml-4">
            <h3 class="pt-2">
              <span class="font-bold w-full truncate font-semibold">
                {{ item.title }}
              </span>
            </h3>
            <div class="mt-2 flex">
              <NButton @click="navigateTo(`/course/detail/${item.id}`)">
                继续学习
              </NButton>
            </div>
          </div>
        </div>
      </NCard>
    </template>
  </div>
</template>

<script setup lang="ts">
type Course = {
  title: string;
  id: number;
  cover: string;
};

useHead({ title: "购买记录" });

const { data, status } = useFetch("/api/purchased-course");
</script>

<style scoped></style>
