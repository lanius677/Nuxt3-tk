import { getCoursesByUser } from "../database/repositories/orderRepository"
import { getTokenInfo } from "../utils/token"

export default defineEventHandler(async (e) => {
  try {
    const token = getTokenInfo(e)
    if (isError(token)) return token
    const courses = await getCoursesByUser(token.id)
    return { ok: true, data: courses }
  } catch (error) {
    return sendError(e, createError('获取数据失败'))
  }
})