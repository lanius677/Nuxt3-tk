import { updateOrder } from "../database/repositories/orderRepository"

export default defineEventHandler(async (e) => {
  // 读取请求体
  const body = await readBody(e)
  
  // 更新订单状态
  try {
    await updateOrder(body.id, { status: body.status })
    return { ok: true }
  } catch (error) {
    return sendError(e, createError('订单状态更新失败'))
  }
})
