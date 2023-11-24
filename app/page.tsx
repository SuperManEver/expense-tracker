// vendor
import cn from 'clsx'
import { auth } from '@clerk/nextjs'

// ui
import Link from '@/app/components/navbar/link'
import Navbar from '@/app/components/navbar/main-navbar'
import Button from '@/app/components/ui/button'
import Image from 'next/image'

// styles
import css from './page.module.scss'

function Landing() {
  const { userId } = auth()
  const href = userId ? '/overview' : '/new-user'
  const title = userId ? 'Dashboard' : 'Get Started'

  return (
    <section>
      <header className={cn(css.pageContent, css.header)}>
        <h3 className={css.title}>Expense</h3>
        <Navbar />
      </header>

      <article className={cn(css.pageContent, css.heroSection)}>
        <div>
          <h3 className={css.title}>
            Experience a Fresh Way to{' '}
            <span className={css.hightlight}>Manage Money</span>
          </h3>
          <p className={css.text}>
            Reach your goals with personalized insights, custom badges, spend
            tracking - all for free
          </p>

          <footer>
            <Link href={href} wrapperClassName={css.linkWrapper}>
              <Button>{title}</Button>
            </Link>
          </footer>
        </div>

        <div>
          <Image
            src="/landing-hero-image.jpg"
            width="450"
            height="370"
            style={{ maxWidth: '100%', height: 'auto' }}
            alt="Picture of the author"
          />
        </div>
      </article>

      <section className={css.features}>
        <div className={css.pageContent}>
          <h3 className={css.title}>
            Expenso helps you to take your finances under your control
          </h3>

          <section className={css.sellingPointsContainer}>
            <article className={css.sellingPoint}>
              <div>icon</div>

              <div>
                <p>Title</p>

                <p>Description</p>
              </div>
            </article>

            <article className={css.sellingPoint}>
              <div>icon</div>

              <div>
                <p>Title</p>

                <p>Description</p>
              </div>
            </article>

            <article className={css.sellingPoint}>
              <div>icon</div>

              <div>
                <p>Title</p>

                <p>Description</p>
              </div>
            </article>
          </section>
        </div>
      </section>
    </section>
  )
}

export default Landing
