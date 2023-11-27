// ui
import Link from 'next/link'

// styles
import css from './styles.module.scss'

function OverviewPage() {
  return (
    <div className={css.root}>
      <aside className={css.sidebar}>
        <ul>
          <Link href="/overview">Home</Link>
          <Link href="/expenses">Expenses</Link>
          <Link href="/categories">Categories</Link>
        </ul>
      </aside>
      <section className={css.contentArea}>Dashboard Main Page</section>
    </div>
  )
}

export default OverviewPage
