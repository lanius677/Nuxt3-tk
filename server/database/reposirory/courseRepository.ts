import { Course,PrismaClient} from "@prisma/client";

const prisma = new PrismaClient()
// 导出一个异步函数，用于获取新的课程
export async function getNewCourses(): Promise<Course[] | null>{
  const result = await prisma.course.findMany({
    take:4,
    orderBy:{
      id:'desc'
    }
  })

  return result;
}


// 导出一个异步函数，用于获取课程信息
export async function getCourses({ page, size }:{ page: number; size: number}): Promise<{ courses: Course[] | null; total: number }> {
  const [courses, total] = await Promise.all([
    prisma.course.findMany({
      orderBy: { id: 'desc' },
      skip: page * size,
      take: size,
    }),
    prisma.course.count(),
  ])
  return { courses, total }
}

// 导出一个异步函数，用于根据id获取课程信息
export async function getCourseById(id: number): Promise<Course | null> {
  const result=await prisma.course.findFirst({
    where:{
      id
    },
    include:{
      Catalogue:true
    }
  })
  return result;
}