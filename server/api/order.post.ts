import { Order, OrderStatus } from "@prisma/client"
import { createOrder } from "../database/repositories/orderRepository"
import { getTokenInfo } from "../utils/token"


export default defineEventHandler(async (e) => {
  const { courseId } = await readBody(e)
  const result = getTokenInfo(e)

  if (isError(result)) {
    return sendError(e, result)
  }


  const order = {
    courseId:Number(courseId),
    userId: result.id,
    createdAt: new Date(),
    status: OrderStatus.WAIT_CONFIRM,
  } as Order



  const o = await createOrder(order)

  return { ok: true, data: { orderId: o.id } }
})