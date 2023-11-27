// styles
import css from './styles.module.scss'

// ui
import Links from '@/app/components/ui/dashboard/sidebar-links'

interface IProps {
  children: React.ReactNode
}

function DashboardLayout({ children }: IProps) {
  return (
    <div className={css.root}>
      <aside className={css.sidebar}>
        <Links />
      </aside>
      <section className={css.contentArea}>{children}</section>
    </div>
  )
}

export default DashboardLayout
