import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  await prisma.column.create({
    data: {
      title: '上层框架最佳选择: Nuxt',
      cover: 'column-nuxt.png',
      desc: '上层框架最佳选择:Nuxt',
      content: `开箱即用的开发环境...`,
    },
  })
  await prisma.column.create({
    data: {
      title: '上层框架最佳选择: Nuxt',
      cover: 'column-nuxt.png',
      desc: '上层框架最佳选择:Nuxt',
      content: `开箱即用的开发环境...`,
    },
  })
  await prisma.course.create({
    data: {
      title: 'Nuxt全栈开发',
      cover: 'course-nuxt.png',
      desc: '这门课我会全面讲解。。。',
      oPrice: 129,
      price: 99,
      detail: `这门课程共分五个模块：。。。`,
      Catalogue: {
        createMany: {
          data: [
            { title: '01开篇:课程介绍和安排', source: 'https://www.bilibili.com/' },
            { title: '02上层框架最佳选择', source: 'https://www.bilibili.com/' },
            { title: '03五种渲染模式', source: 'https://www.bilibili.com/' },
            { title: '04快速创建首个nuxt项目', source: 'https://www.bilibili.com/' }
          ],
        },
      },
    },
  })
  await prisma.course.create({
    data: {
      title: 'Nuxt全栈开发',
      cover: 'course-nuxt.png',
      desc: '这门课我会全面讲解。。。',
      oPrice: 129,
      price: 99,
      detail: `这门课程共分五个模块：。。。`,
      Catalogue: {
        createMany: {
          data: [
            { title: '01开篇:课程介绍和安排', source: 'https://www.bilibili.com/' },
            { title: '02上层框架最佳选择', source: 'https://www.bilibili.com/' },
            { title: '03五种渲染模式', source: 'https://www.bilibili.com/' },
            { title: '04快速创建首个nuxt项目', source: 'https://www.bilibili.com/' }
          ],
        },
      },
    },
  })

  await prisma.column.create({
    data: {
      title: '上层框架最佳选择: Nuxt',
      cover: 'column-nuxt.png',
      desc: '上层框架最佳选择:Nuxt',
      content: `开箱即用的开发环境...`,
    },
  })
  await prisma.column.create({
    data: {
      title: '上层框架最佳选择: Nuxt',
      cover: 'column-nuxt.png',
      desc: '上层框架最佳选择:Nuxt',
      content: `开箱即用的开发环境...`,
    },
  })
  await prisma.course.create({
    data: {
      title: 'Nuxt全栈开发',
      cover: 'course-nuxt.png',
      desc: '这门课我会全面讲解。。。',
      oPrice: 129,
      price: 99,
      detail: `这门课程共分五个模块：。。。`,
      Catalogue: {
        createMany: {
          data: [
            { title: '01开篇:课程介绍和安排', source: 'https://www.bilibili.com/' },
            { title: '02上层框架最佳选择', source: 'https://www.bilibili.com/' },
            { title: '03五种渲染模式', source: 'https://www.bilibili.com/' },
            { title: '04快速创建首个nuxt项目', source: 'https://www.bilibili.com/' }
          ],
        },
      },
    },
  })
  await prisma.course.create({
    data: {
      title: 'Nuxt全栈开发',
      cover: 'course-nuxt.png',
      desc: '这门课我会全面讲解。。。',
      oPrice: 129,
      price: 99,
      detail: `这门课程共分五个模块：。。。`,
      Catalogue: {
        createMany: {
          data: [
            { title: '01开篇:课程介绍和安排', source: 'https://www.bilibili.com/' },
            { title: '02上层框架最佳选择', source: 'https://www.bilibili.com/' },
            { title: '03五种渲染模式', source: 'https://www.bilibili.com/' },
            { title: '04快速创建首个nuxt项目', source: 'https://www.bilibili.com/' }
          ],
        },
      },
    },
  })

  await prisma.column.create({
    data: {
      title: '上层框架最佳选择: Nuxt',
      cover: 'column-nuxt.png',
      desc: '上层框架最佳选择:Nuxt',
      content: `开箱即用的开发环境...`,
    },
  })
  await prisma.column.create({
    data: {
      title: '上层框架最佳选择: Nuxt',
      cover: 'column-nuxt.png',
      desc: '上层框架最佳选择:Nuxt',
      content: `开箱即用的开发环境...`,
    },
  })
  await prisma.course.create({
    data: {
      title: 'Nuxt全栈开发',
      cover: 'course-nuxt.png',
      desc: '这门课我会全面讲解。。。',
      oPrice: 129,
      price: 99,
      detail: `这门课程共分五个模块：。。。`,
      Catalogue: {
        createMany: {
          data: [
            { title: '01开篇:课程介绍和安排', source: 'https://www.bilibili.com/' },
            { title: '02上层框架最佳选择', source: 'https://www.bilibili.com/' },
            { title: '03五种渲染模式', source: 'https://www.bilibili.com/' },
            { title: '04快速创建首个nuxt项目', source: 'https://www.bilibili.com/' }
          ],
        },
      },
    },
  })
  await prisma.course.create({
    data: {
      title: 'Nuxt全栈开发',
      cover: 'course-nuxt.png',
      desc: '这门课我会全面讲解。。。',
      oPrice: 129,
      price: 99,
      detail: `这门课程共分五个模块：。。。`,
      Catalogue: {
        createMany: {
          data: [
            { title: '01开篇:课程介绍和安排', source: 'https://www.bilibili.com/' },
            { title: '02上层框架最佳选择', source: 'https://www.bilibili.com/' },
            { title: '03五种渲染模式', source: 'https://www.bilibili.com/' },
            { title: '04快速创建首个nuxt项目', source: 'https://www.bilibili.com/' }
          ],
        },
      },
    },
  })

  await prisma.column.create({
    data: {
      title: '上层框架最佳选择: Nuxt',
      cover: 'column-nuxt.png',
      desc: '上层框架最佳选择:Nuxt',
      content: `开箱即用的开发环境...`,
    },
  })
  await prisma.column.create({
    data: {
      title: '上层框架最佳选择: Nuxt',
      cover: 'column-nuxt.png',
      desc: '上层框架最佳选择:Nuxt',
      content: `开箱即用的开发环境...`,
    },
  })
  await prisma.course.create({
    data: {
      title: 'Nuxt全栈开发',
      cover: 'course-nuxt.png',
      desc: '这门课我会全面讲解。。。',
      oPrice: 129,
      price: 99,
      detail: `这门课程共分五个模块：。。。`,
      Catalogue: {
        createMany: {
          data: [
            { title: '01开篇:课程介绍和安排', source: 'https://www.bilibili.com/' },
            { title: '02上层框架最佳选择', source: 'https://www.bilibili.com/' },
            { title: '03五种渲染模式', source: 'https://www.bilibili.com/' },
            { title: '04快速创建首个nuxt项目', source: 'https://www.bilibili.com/' }
          ],
        },
      },
    },
  })
  await prisma.course.create({
    data: {
      title: 'Nuxt全栈开发',
      cover: 'course-nuxt.png',
      desc: '这门课我会全面讲解。。。',
      oPrice: 129,
      price: 99,
      detail: `这门课程共分五个模块：。。。`,
      Catalogue: {
        createMany: {
          data: [
            { title: '01开篇:课程介绍和安排', source: 'https://www.bilibili.com/' },
            { title: '02上层框架最佳选择', source: 'https://www.bilibili.com/' },
            { title: '03五种渲染模式', source: 'https://www.bilibili.com/' },
            { title: '04快速创建首个nuxt项目', source: 'https://www.bilibili.com/' }
          ],
        },
      },
    },
  })

  await prisma.column.create({
    data: {
      title: '上层框架最佳选择: Nuxt',
      cover: 'column-nuxt.png',
      desc: '上层框架最佳选择:Nuxt',
      content: `开箱即用的开发环境...`,
    },
  })
  await prisma.column.create({
    data: {
      title: '上层框架最佳选择: Nuxt',
      cover: 'column-nuxt.png',
      desc: '上层框架最佳选择:Nuxt',
      content: `开箱即用的开发环境...`,
    },
  })
  await prisma.course.create({
    data: {
      title: 'Nuxt全栈开发',
      cover: 'course-nuxt.png',
      desc: '这门课我会全面讲解。。。',
      oPrice: 129,
      price: 99,
      detail: `这门课程共分五个模块：。。。`,
      Catalogue: {
        createMany: {
          data: [
            { title: '01开篇:课程介绍和安排', source: 'https://www.bilibili.com/' },
            { title: '02上层框架最佳选择', source: 'https://www.bilibili.com/' },
            { title: '03五种渲染模式', source: 'https://www.bilibili.com/' },
            { title: '04快速创建首个nuxt项目', source: 'https://www.bilibili.com/' }
          ],
        },
      },
    },
  })
  await prisma.course.create({
    data: {
      title: 'Nuxt全栈开发',
      cover: 'course-nuxt.png',
      desc: '这门课我会全面讲解。。。',
      oPrice: 129,
      price: 99,
      detail: `这门课程共分五个模块：。。。`,
      Catalogue: {
        createMany: {
          data: [
            { title: '01开篇:课程介绍和安排', source: 'https://www.bilibili.com/' },
            { title: '02上层框架最佳选择', source: 'https://www.bilibili.com/' },
            { title: '03五种渲染模式', source: 'https://www.bilibili.com/' },
            { title: '04快速创建首个nuxt项目', source: 'https://www.bilibili.com/' }
          ],
        },
      },
    },
  })

  
}


main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })