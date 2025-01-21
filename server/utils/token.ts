import { EventHandlerRequest } from 'h3';
import { H3Event } from 'h3';
import jwt, { JwtPayload } from 'jsonwebtoken';
import {jwtSecretKey} from '../config/jwtSecretKey';

export function getTokenInfo(e: H3Event<EventHandlerRequest>) {
  let info
  const token = getCookie(e, 'token')

  // 如果token不存在
  if (!token) {
    return createError({
      statusCode: 401,
      statusMessage: '未登录',
    })
  }

  try {
    // 解析token
    info = jwt.verify(token, jwtSecretKey) as JwtPayload
    // 如果token过期
    const currentTime = Date.now() / 1000
    if (info.exp! < currentTime) {
      return createError({
        statusCode: 401,
        statusMessage: '登录过期',
      })
    }


    return info
  } catch (error) {
    // 如果token无效
    return createError({
      statusCode: 401,
      statusMessage: 'token无效',
    })
  }
}