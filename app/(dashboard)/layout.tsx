// ui
import Link from 'next/link'

// styles
import css from './styles.module.scss'

interface IProps {
  children: React.ReactNode
}

function DashboardLayout({ children }: IProps) {
  return (
    <div className={css.root}>
      <aside className={css.sidebar}>
        <ul>
          <Link href="/overview">Home</Link>
          <Link href="/expenses">Expenses</Link>
          <Link href="/categories">Categories</Link>
        </ul>
      </aside>
      <section className={css.contentArea}>{children}</section>
    </div>
  )
}

export default DashboardLayout
