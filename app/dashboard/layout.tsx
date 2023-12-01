// styles
import css from './styles.module.scss'

// ui
import Links from '@/app/components/dashboard/sidebar-links'
import UserInfo from '@/app/components/dashboard/user-info'

interface IProps {
  children: React.ReactNode
}

function DashboardLayout({ children }: IProps) {
  return (
    <div className={css.root}>
      <aside className={css.sidebar}>
        <Links />

        <div>
          <UserInfo />
        </div>
      </aside>
      <section className={css.contentArea}>{children}</section>
    </div>
  )
}

export default DashboardLayout
