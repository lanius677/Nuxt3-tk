<script setup lang="ts">
import type { FormInst, FormItemRule } from "naive-ui";
import { httpPost } from "~/composabes/request";
import { useUser } from "~/store/user";
import type { IResult } from "~/types/IResult";

useHead({
  title: "注册",
});

definePageMeta({
  layout: "blank",
});

// 获取表单实例
const formRef = ref<FormInst>();
// 绑定数据模型
const model = reactive({
  username: "",
  password: "",
  confirmPass: "",
});
// 表单检验规则
const rules = {
  username: [
    {
      required: true,
      message: "请输入用户名",
      trigger: ["blur", "input"],
    },
  ],
  password: [
    {
      required: true,
      message: "请输入密码",
      trigger: ["blur", "input"],
    },
  ],
  confirmPass: [
    {
      required: true,
      message: "请输入确认密码",
    },
    {
      validator: (rule: FormItemRule, value: string, callback:any) => {
        if (value !== model.password) {
          callback(new Error("两次密码不一致"));
          return false;
        }
        callback();
        return true;
      },
      trigger: ["blur", "input"],
    },
  ],
};


// 获取用户状态
const store=useUser()
// 注册
const register = () => {
    // 表单校验
    formRef.value?.validate(async (errors) => {
    if (!errors) {
      // 登录
      const {ok,data}=await httpPost<IResult>('/api/register',{
        username:model.username,
        password:model.password
      })
      if(ok){
        // 保存登录状态
        store.userInfo=data
        // 跳转
        navigateTo('/')
      }
    }
  })
}
</script>

<template>
  <h2>注册</h2>
  <NForm :rules="rules" :model="model" ref="formRef" class="w-[340px]" size="large">
    <NFormItem :show-label="false" path="username">
      <NInput clearable placeholder="用户名" v-model:value="model.username" />
    </NFormItem>
    <NFormItem :show-label="false" path="password">
      <NInput clearable placeholder="密码" type="password" v-model:value="model.password" />
    </NFormItem>
    <NFormItem :show-label="false" path="repassword">
      <NInput clearable placeholder="确认密码" type="password" v-model:value="model.confirmPass" />
    </NFormItem>

    <div>
      <NButton class="w-full" type="primary" @click="register"> 注册 </NButton>
    </div>
    <div class="flex justify-center items-center w-full text-xs mt-5 text-gray-600">
      注册即同意
      <NButton quaternary type="primary" size="tiny"> 《服务协议》 </NButton>
      和
      <NButton quaternary type="primary" size="tiny"> 《隐私政策》 </NButton>
    </div>
  </NForm>
</template>
