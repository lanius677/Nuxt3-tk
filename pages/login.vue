<script setup lang="ts">
import { NAlert, NButton, NForm, NFormItem, NInput, type FormInst, type FormRules } from 'naive-ui'
import { httpPost } from '~/composabes/request';
import { useUser } from '~/store/user';
import type { IResult } from '~/types/IResult';

useHead({
  title: '登录',
})

definePageMeta({
  layout: 'blank',
})

// 获取表单实例
const formRef = ref<FormInst | null>(null)
// 绑定数据模型
const model = reactive({
  username: '',
  password: '',
})
// 表单检验规则
const rules:FormRules = {
  username: [{
    required: true,
    message: '请输入用户名',
     trigger: 'blur'
  }],
  password: [{
    required: true,
    message: '请输入密码',
    trigger: ['input', 'blur']
  }]
}


// 获取用户状态
const store=useUser()
// 保存登录状态
const login=()=>{
  // 表单校验
  formRef.value?.validate(async (errors) => {
    if (!errors) {
      // 登录
      const {ok,data}=await httpPost<IResult>('/api/login',{
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
  <h2 class="flex justify-between">
    返回
    <nuxt-link to="/register">
      <NButton type="primary" size="large"> 注册 </NButton>
    </nuxt-link>
  </h2>

  <NAlert title="演示账号和密码为:test/password" type="info" class="mb-6" />

  <NForm ref="formRef" :rules="rules" :model="model" class="w-[340px]" size="large">
    <NFormItem :show-label="false"  path="username">
      <NInput clearable placeholder="用户名" v-model:value="model.username" />
    </NFormItem>
    <NFormItem :show-label="false" path="password">
      <NInput clearable placeholder="密码" type="password" v-model:value="model.password" />
    </NFormItem>

    <div>
      <NButton class="w-full" type="primary" @click="login"> 登录 </NButton>
    </div>
  </NForm>
  <pre>{{ JSON.stringify(model, null, 2) }}</pre>
</template>
