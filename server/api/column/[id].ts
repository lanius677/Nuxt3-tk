import { getColumnById, getColumns } from "~/server/database/reposirory/columnRepository"

export default defineEventHandler(async (e) => {
  // 从请求的上下文中获取 id 参数，并将其转换为整数
  const id = e.context.params?.id ? parseInt(e.context.params.id) : undefined

  // 如果 id 参数不存在，或者无法转换为整数，则返回 HTTP 400 错误响应
  if (!id)
    return sendError(e, createError({ statusCode: 400, statusMessage: '参数错误' }))

  try {
    // 从数据库中获取指定 ID 的专栏
    const column = await getColumnById(id)

    // 如果找不到该专栏，则返回 HTTP 404 错误响应
    if (!column)
      return sendError(e, createError({ statusCode: 404, statusMessage: '没有对应专栏' }))

    // 从数据库中获取推荐专栏列表
    const { columns: recommend } = await getColumns({ page: 1, size: 2 })

    // 返回包含专栏信息和推荐专栏列表的 JSON 响应
    return { ok: true, data: { item: column, recommend } }
  }
  catch (error) {
    // 如果在处理请求时发生错误，则返回 HTTP 500 错误响应
    return sendError(e, createError({ statusCode: 500, statusMessage: '服务器错误' }))
  }
})
