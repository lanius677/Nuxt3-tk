import { createOrder, getOrderById } from "~/server/database/repositories/orderRepository"

export default defineEventHandler(async (e) => {

  // 获取定单id
  const id = e.context.params?.id ? parseInt(e.context.params.id) : undefined

  // 如果没有定单id，则返回错误
  if (!id) {
    return sendError(e, createError({
      statusCode: 400,
      statusMessage: '缺少订单id',
    }))
  }

  
  const order = await getOrderById(id)
  return { ok: true, data: order }
})