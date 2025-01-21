
import jwt, { JwtPayload } from 'jsonwebtoken'
import { getUserByUsername } from '~/server/database/reposirory/userRepository'
import {jwtSecretKey} from '../config/jwtSecretKey'

export default defineEventHandler(async (e) => {

  // 获取令牌
  const token = getCookie(e, 'token')

  // 令牌不存在
  if (!token) {
    return {
      ok: false,
      code: 401,
    }
  }

  // 验证令牌
  let info
  try {
    info = jwt.verify(token, jwtSecretKey!) as JwtPayload
    const currentTime = Date.now() / 1000

    // 验证令牌是否过期
    if (Number(info.exp) < currentTime) {
      return sendError(e, createError({
        statusCode: 401,
        statusMessage: 'token过期'
      }))
    }
  }
  catch {
    return sendError(e, createError({
      statusCode: 401,
      statusMessage: 'token无效'
    }))
  }

  // 令牌生效
  try {
    // 获取用户信息
    const user = await getUserByUsername(info.username)

    // 用户不存在
    if (!user) {
      return sendError(e, createError({
        statusCode: 401,
        statusMessage: '用户不存在'
      }))
    }
    return {
      ok: true,
      data: user
    }
  } catch (error) {
    console.error(error);
    return sendError(e, createError('获取用户信息失败')
    )
  }

})