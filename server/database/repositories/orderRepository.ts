import { Order, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient(); //  创建PrismaClient实例

// 创建订单
export async function createOrder(data: Order) {
  const order = await prisma.order.create({ data })
  return order
}

// 根据id获取订单
export async function getOrderById(id: number) {
  const res = await prisma.order.findUnique({
    where: {
      id
    },
    include: {
      course: {
        select: {
          title: true,
          cover: true,
          price: true,

        }
      }
    }
  })
  return res
}


// 根据id更新订单
export async function updateOrder(id: number, data: Partial<Order>) {
  const res = await prisma.order.update({
    where: {
      id
    },
    data: data
  })
  return res
}

export async function getCoursesByUser(userId: number) {
  const orders = await prisma.order.findMany({
    where: {
      userId,
    },
    include: {
      course: {
        select: {
          id: true,
          title: true,
          cover: true,
        }
      }
    }
  })

  
  const courses = orders.flatMap(order => order.course)
  const uniqueCourses = courses.filter((course, index, arr) => arr.findIndex(c => c.id === course.id) === index)
  return uniqueCourses
}