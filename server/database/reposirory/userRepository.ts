import { type User, PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// 导出一个异步函数，用于根据用户名获取用户信息
export async function getUserByUsername(username: string): Promise<User | null> {
  const result = await prisma.user.findUnique({
    where: {
      username,
    },
  })
  return result
}

// 导出一个异步函数，用于创建用户
export async function createUser(data: User) {
  const user = await prisma.user.create({
    data,
  })

  return user
}

// 导出一个异步函数，用于根据用户ID获取用户信息
export async function updateUser(id: number, data: Partial<User>) {
  const user = await prisma.user.update({
    where: {
      id,
    },
    data,
  })

  return user
}