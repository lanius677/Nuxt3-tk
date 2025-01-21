import { updateUser } from "../database/reposirory/userRepository"
import { getTokenInfo } from "../utils/token"

export default defineEventHandler(async (event) => {
  const token = getTokenInfo(event)
  if (isError(token)) {
    return sendError(event, createError({
      statusCode: 401,
      statusMessage: 'token不合法'
    }))
  }
  try {
    // 获取更新数据
    const body = await readBody(event)
    // 校验数据
    if (!body || body.username || body.password) {
      let stateMessage = '参数不存在'
      if (!body) {
        stateMessage = '参数不存在'
      } else if (body.username) {
        stateMessage = '用户名不修改'
      } else {
        stateMessage = '请使用修改密码接口'
      }
      return sendError(event, createError({
        statusCode: 400,
        statusMessage: stateMessage
      }))
    }
    const user = await updateUser(token.id, body)
    return {
      ok: true,
      data: user
    }

  } catch (error) {
    console.log(error);
    return sendError(event, createError({
      statusCode: 500,
      statusMessage: '更新用户信息失败'
    }))
  }
})