import bcrypt from 'bcryptjs';
import { getUserByUsername, updateUser } from "../database/reposirory/userRepository"
import { getTokenInfo } from "../utils/token"

export default defineEventHandler(async (event) => {
  const token = getTokenInfo(event)
  if (isError(token)) {
    return sendError(event, createError({
      statusCode: 401,
      statusMessage: '请先登录'
    }))
  }
  try {
    // 获取更新数据
    const body = await readBody(event)
    if (!body || !body.oldPwd || !body.newPwd) {
      return sendError(event, createError({
        statusCode: 400,
        statusMessage: '参数错误'
      }))
    }

    // 验证原密码
    const user = await getUserByUsername(token.username)

    // 校验密码
    const result = await bcrypt.compare(body.oldPwd, user!.password)

    if (!result) {
      return sendError(event, createError({
        statusCode: 400,
        statusMessage: '原密码错误'
      }))
    }

    // 加密
    const salt = await bcrypt.genSalt(10)
    const hashPwd = await bcrypt.hash(body.newPwd, salt)

    // 更新密码
    await updateUser(token.id, { password: hashPwd })
    return { ok: true }

  } catch (error) {
    console.error(error)
    return sendError(event, createError('更新密码失败!'))
  }
})