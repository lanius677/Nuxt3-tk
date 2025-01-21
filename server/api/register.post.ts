import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { User } from "@prisma/client"
import { createUser, getUserByUsername } from "~/server/database/reposirory/userRepository"
import { jwtSecretKey } from '~/server/config/jwtSecretKey';

export default defineEventHandler(async (e) => {
  try {

    // 用户传递的参数
    const data = await readBody<User>(e)
    const { username, password } = data

    // 获取用户的信息，存在同名用户
    const user = await getUserByUsername(username)
    if (user) {
      return sendError(e, createError({ statusCode: 400, statusMessage: '用户已存在' }))
    }

    // 加密
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)
    data.password = hash

    // 入库
    const result = await createUser(data)

    //生成token,写入cookie
    const token = jwt.sign({ username: result.username }, jwtSecretKey, { expiresIn: '24h' })
    // 设置cookie
    setCookie(e, 'token', token, { maxAge: 24 * 3600 })

    return { ok: true, data: result }


  } catch (error) {

    console.error(error);
    return sendError(e, createError({ statusCode: 500, statusMessage: '注册失败' }))
  }
})
