<template>
  <div class=" bg-gray-100 flex flex-col min-h-screen lg:min-w-[1024px]">
    <MyHeader />
    <main class="container m-auto mt-20">
      <slot />
    </main>
    <MyFooter />
  </div>
</template>

<script setup lang="ts">
import { httpGet } from "~/composabes/request";
import { useUser } from "~/store/user";
import type { IResult } from "~/types/IResult";

const userStore = useUser();
const { userInfo } = storeToRefs(userStore);

onMounted(async () => {
  const { ok, data } = (await httpGet("/api/userinfo")) as IResult;
  if (ok) {
    userInfo.value = data;
  }
});
</script>
