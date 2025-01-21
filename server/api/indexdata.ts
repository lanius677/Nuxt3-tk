import {getNewColumns} from '../database/reposirory/columnRepository';
import { getNewCourses } from '../database/reposirory/courseRepository';

// 导出一个默认的事件处理器
export default defineEventHandler(async (e)=>{
  try {
    // 获取数据
    const columns = await getNewColumns()
    const courses = await getNewCourses()
    
    return { ok: true, data: { columns, courses } }
  } catch (error) {
    return sendError(e, createError('获取数据失败'))
  }

})