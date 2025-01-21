import { message } from "~/composabes/descrete"
import { useUser } from "~/store/user"

export function logout() {
  // 清除状态
  const userStore = useUser()
  const {userInfo}=storeToRefs(userStore)
  userInfo.value = null

  // 清cookie
  const token = useCookie('token')
  if (token.value)
    token.value = null

  message.success('退出登录成功')

  // 回到首页
  const route = useRoute()
  if (route.path !== '/')
    navigateTo('/')
}
