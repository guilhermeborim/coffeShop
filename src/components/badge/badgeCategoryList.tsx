import { prisma } from '@/lib/prisma'
import Container from '../Container'
import { BadgeCategoryItem } from './badgeCategoryItem'

export const BadgeCategoryList = async () => {
  const categorys = await prisma.category.findMany({})

  return (
    <nav>
      <Container>
        <ul className="flex justify-between flex-1 overflow-x-auto gap-2">
          {categorys &&
            categorys.map((category) => (
              <BadgeCategoryItem category={category} key={category.id} />
            ))}
        </ul>
      </Container>
    </nav>
  )
}
