// vendor
import React from 'react'
import { currentUser } from '@clerk/nextjs'

// ui
import { UserButton, SignInButton } from '@clerk/nextjs'

// styles
import css from './styles.module.scss'

async function UserInfo() {
  const user = await currentUser()

  if (!user) {
    return <SignInButton />
  }

  return (
    <div className={css.root}>
      <UserButton />
      <p className={css.userName}>
        {user.firstName} {user.lastName}
      </p>
    </div>
  )
}

export default UserInfo
