// ui
import Button from '@/app/components/ui/button'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

// styles
import css from './styles.module.scss'

interface IProps {
  children: React.ReactNode
}

function AuthLayout({ children }: IProps) {
  return (
    <section className={css.root}>
      <header className={css.header}>
        <Link href="/">
          <Button>
            <ArrowLeftIcon className={css.backIcon} />
          </Button>
        </Link>
      </header>

      <main>{children}</main>
    </section>
  )
}

export default AuthLayout
