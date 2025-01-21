import { Order } from "@prisma/client"
import { updateOrder } from "../database/repositories/orderRepository"

export default defineEventHandler(async (event) => {
  
  const body = readBody(event) as Partial<Order>
  try {
    await updateOrder(Number(body.id), { status: body.status })
  } catch (error) {
    return sendError(event, createError('订单状态更新失败'))
  }
})