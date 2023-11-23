// vendor
import { auth } from '@clerk/nextjs'

// ui
import Navbar from '@/app/components/navbar/main-navbar'

// styles
import css from './page.module.css'

function Landing() {
  const { userId } = auth()

  return (
    <section>
      <header className={css.header}>
        <h3 className={css.title}>Expense</h3>
        <Navbar />
      </header>
    </section>
  )
}

export default Landing
