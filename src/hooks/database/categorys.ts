import { prisma } from '@/lib/prisma'

export const CategorysDatabase = async () => {
  const categorys = await prisma.category.findMany({})
  return { categorys }
}
