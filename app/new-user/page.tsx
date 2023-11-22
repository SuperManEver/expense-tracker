import { prisma } from '@/utils/db'
import { currentUser } from '@clerk/nextjs'
import { redirect } from 'next/navigation'

const createNewUser = async () => {
  const user = await currentUser()

  const match = await prisma.user.findUnique({
    where: {
      clerkId: user ? user.id : void 0,
    },
  })

  console.log('--------------------------------------------------')
  console.log('matched user: ', match)
  console.log('--------------------------------------------------')

  if (!match && user) {
    await prisma.user.create({
      data: {
        clerkId: user.id,
        email: user?.emailAddresses[0].emailAddress,
      },
    })
  }

  redirect('/overview')
}

const NewUser = async () => {
  // await createNewUser()

  return <div>...loading</div>
}

export default NewUser
