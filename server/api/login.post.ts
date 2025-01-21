import { User } from '@prisma/client';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken'
import { getUserByUsername } from '~/server/database/reposirory/userRepository'
import { jwtSecretKey } from '../config/jwtSecretKey';

export default defineEventHandler(async (e) => {
  const { username, password } = await readBody<User>(e)
  try {
    // 根据用户名获取用户信息
    const user = await getUserByUsername(username)
    // 检验用户
    if (!user) {
      return sendError(e, createError({ statusCode: 401, statusMessage: '用户错误' }))
    }

    // 使用bcrypt.compare方法比较用户输入的密码和数据库中存储的密码
    const result = bcrypt.compare(password, user.password)

    // 如果result为false，则返回一个错误信息
    if (!result) {
      // 返回一个错误信息，状态码为401，状态信息为“密码错误”
      return sendError(e, createError({ statusCode: 401, statusMessage: '密码错误' }))
    }

    //生成token,写入cookie
    const token = jwt.sign({ username: user.username,id: user.id }, jwtSecretKey, { expiresIn: '24h' })

    // 设置cookie
    setCookie(e, 'token', token, { maxAge: 24 * 3600 })


    return { ok: true, data: user }

  

  } catch (error) {
    console.error(error);
    return sendError(e, createError({ statusCode: 500, statusMessage: '登录失败' }))
  }
})