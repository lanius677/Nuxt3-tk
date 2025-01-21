import { Column,PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()
// 导出一个异步函数，用于获取新的列
export async function getNewColumns(): Promise<Column[] | null>{
  const result = await prisma.column.findMany({
    take:4,
    orderBy:{
      id:'desc'
    }
  })

  return result;
}

// 导出一个异步函数，用于获取列
export async function getColumns({ page, size }:{page:number; size: number}): Promise<{ columns: Column[] | null; total: number }> {
  const [columns, total] = await Promise.all([
    prisma.column.findMany({
      orderBy: { id: 'desc' },
      skip: page * size,
      take: size,
    }),
    prisma.column.count(),
  ])
  return { columns, total }
}

// 导出一个异步函数，用于根据id获取列
export async function getColumnById(id: number): Promise<Column | null> {
  const result = await prisma.column.findFirst({
    where: {
      id,
    },
  })
  return result
}
