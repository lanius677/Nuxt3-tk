import { message } from "~/composabes/descrete"

export default defineNuxtRouteMiddleware((to, from) => {
  const token = useCookie('token')
  const route = useRoute()

  // 未登录重定向到登录页
  if (!token.value) {
    if (import.meta.client)
      message.error('请先登录')

    return navigateTo(`/login?from=${route.fullPath}`)
  }
})
