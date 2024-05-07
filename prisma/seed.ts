/* eslint-disable @typescript-eslint/no-var-requires */
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
async function main() {
  try {
    const chaCategory = await prisma.category.create({
      data: {
        name: 'Chá',
        slug: 'cha',
      },
    })

    const cha = [
      {
        name: 'Chá Verde Tradicional',
        slug: 'cha-verde-tradicional',
        price: 3.99,
        image:
          'https://images.pexels.com/photos/905485/pexels-photo-905485.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        rating: 4.6,
        reviews: 150,
        categoryId: chaCategory.id,
        description:
          'Desfrute da pureza e frescor do chá verde tradicional, conhecido por suas propriedades antioxidantes e sabor refrescante.',
      },
      {
        name: 'Chá de Camomila Relaxante',
        slug: 'cha-de-camomila-relaxante',
        price: 4.49,
        image:
          'https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        rating: 4.8,
        reviews: 165,
        categoryId: chaCategory.id,
        description:
          'Relaxe e descanse com este chá de camomila calmante, perfeito para acalmar os nervos e promover uma boa noite de sono.',
      },
      {
        name: 'Chá de Frutas Tropicais',
        slug: 'cha-de-frutas-tropicais',
        price: 4.99,
        image:
          'https://images.pexels.com/photos/259955/pexels-photo-259955.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        rating: 4.7,
        reviews: 180,
        categoryId: chaCategory.id,
        description:
          'Sinta-se transportado para um paraíso tropical com este chá de frutas exóticas, combinando sabores tropicais e frescos em cada gole.',
      },
      {
        name: 'Chá de Hibisco Energizante',
        slug: 'cha-de-hibisco-energizante',
        price: 5.29,
        image:
          'https://images.pexels.com/photos/2013749/pexels-photo-2013749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        rating: 4.9,
        reviews: 195,
        categoryId: chaCategory.id,
        description:
          'Recarregue suas energias com este chá de hibisco revitalizante, conhecido por suas propriedades estimulantes e sabor vibrante.',
      },
      {
        name: 'Chá Preto Clássico',
        slug: 'cha-preto-classico',
        price: 3.79,
        image:
          'https://images.pexels.com/photos/1493079/pexels-photo-1493079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        rating: 4.5,
        reviews: 135,
        categoryId: chaCategory.id,
        description:
          'Desfrute da riqueza e profundidade do chá preto clássico, perfeito para um impulso de energia matinal ou uma tarde relaxante.',
      },
    ]
    await prisma.product.createMany({
      data: cha,
    })
  } catch (error) {
    console.error('Error seeding database:', error)
  } finally {
    await prisma.$disconnect()
  }
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
