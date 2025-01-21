<script setup>
import { ref } from "vue";
import { useUser } from "~/store/user";
import {logout} from '~/composables/auth'
const route = useRoute();
const menus = ref([
  { path: "/", label: "首页" },
  { path: "/list/column", label: "专栏" },
  { path: "/list/course", label: "课程" },
]);

const options = [
  {
    label: "用户中心",
    key: "center",
  },
  {
    label: "退出",
    key: "logout",
  },
];

const store = useUser();
const { userInfo } = storeToRefs(store);

// console.log('userInfo', userInfo);

// 使用useDialog()函数获取dialog对象
const dialog  = useDialog();
// 定义handleSelect函数，参数为k
const handleSelect = (k) => {
  console.log(k);
  switch (k) {
    case "logout":
      dialog.warning({
        title: "提示",
        content: "确定要退出登录吗？",
        positiveText: "确定",
        negativeText: "取消",
        onPositiveClick: () => logout(),
      });
      break;
    case "center":
      navigateTo("/usercenter");
      break;
  }
};
</script>

<template>
  <div class="bg-white fixed top-0 left-0 right-0 shadow-sm z-1000">
    <div class="container m-auto flex items-center h-[60px] px-4">
      <NButton text strong class="text-xl" @click="navigateTo('/')"> tk学堂 </NButton>

      <div class="flex-1 flex items-center px-4">
        <Menu
          v-for="menu in menus"
          :key="menu.path"
          :active="route.path === menu.path"
          @click="navigateTo(menu.path)"
        >
          {{ menu.label }}
        </Menu>
      </div>

      <!-- 如果没有登录，显示登录按钮 -->
      <NuxtLink to="/login" v-if="!userInfo">
        <NButton secondary strong> 登录 </NButton>
      </NuxtLink>


      <!-- 如果登录了，显示操作  -->
      <NDropdown v-else :options="options" @select="handleSelect">
        <NAvatar
          round
          size="small"
          :src="userInfo.avatar ? userInfo.avatar : '/avatar.png'"
        />
      </NDropdown>
    </div>
  </div>
</template>
