import css from './styles.module.scss'

function OverviewPage() {
  return (
    <div className={css.root}>
      <aside className={css.sidebar}>Sidebar</aside>
      <section className={css.contentArea}>Dashboard Main Page</section>
    </div>
  )
}

export default OverviewPage
