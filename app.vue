<template>
  <div>
    <NDialogProvider>
      <NMessageProvider>
        <!-- 添加NuxtLayout -->
        <NuxtLayout>
          <NuxtPage />
        </NuxtLayout>
      </NMessageProvider>
    </NDialogProvider>
  </div>
</template>
<script lang="ts" setup>
import { NMessageProvider,NDialogProvider } from "naive-ui";
</script>
<style>
a {
  color: white;
  text-decoration: none;
}
</style>
