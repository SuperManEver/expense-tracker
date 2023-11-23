// vendor
import { auth } from '@clerk/nextjs'

// ui
import Link from '@/app/components/navbar/link'
import Button from '@/app/components/ui/button'

// styles
import css from './styles.module.css'

function MainNavbar() {
  const { userId } = auth()
  const href = userId ? '/overview' : '/new-user'
  const title = userId ? 'Dashboard' : 'Get Started'

  return (
    <ul className={css.root}>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/sign-in">Login</Link>

      <Link href={href}>
        <Button variant="bordered">{title}</Button>
      </Link>
    </ul>
  )
}

export default MainNavbar
