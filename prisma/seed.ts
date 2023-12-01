import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  await prisma.commonCategory.createMany({
    data: [
      {
        name: 'Fitness',
      },

      {
        name: 'Entertainment',
      },

      {
        name: 'Gift',
      },

      {
        name: 'Shopping',
      },
      {
        name: 'Housing',
      },
      {
        name: 'Coffee',
      },
      {
        name: 'Taxes',
      },
    ],
    skipDuplicates: true, // Skip 'Bobo'
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
