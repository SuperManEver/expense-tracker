// vendor
import cn from 'clsx'
import { auth } from '@clerk/nextjs'

// ui
import Link from '@/app/components/navbar/link'
import Navbar from '@/app/components/navbar/main-navbar'
import Button from '@/app/components/ui/button'
import Image from 'next/image'
import { PowerIcon } from '@heroicons/react/24/outline'

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
          <h3 className={css.sectionTitle}>
            Expenso helps you to take your finances under your control
          </h3>

          <section className={css.sellingPointsContainer}>
            <article className={css.sellingPoint}>
              <div className={css.iconWrapper}>
                <PowerIcon className={css.icon} />
              </div>

              <div>
                <p className={css.title}>Effortless Habitual Tracking</p>

                <p className={css.subtitle}>
                  Simplify your financial life with our effortless expense
                  tracking. Easily monitor your spending habits to gain valuable
                  insights into where your money goes, allowing you to make
                  informed decisions.
                </p>
              </div>
            </article>

            <article className={css.sellingPoint}>
              <div className={css.iconWrapper}>
                <PowerIcon className={css.icon} />
              </div>

              <div>
                <p className={css.title}>Personalized Budget Management</p>

                <p className={css.subtitle}>
                  Take control of your finances with our personalized budgeting
                  tools. Set realistic spending limits, track your progress, and
                  achieve your financial goals with ease.
                </p>
              </div>
            </article>

            <article className={css.sellingPoint}>
              <div className={css.iconWrapper}>
                <PowerIcon className={css.icon} />
              </div>

              <div>
                <p className={css.title}>Goal-Oriented Financial Planning</p>

                <p className={css.subtitle}>
                  Turn dreams into reality with our goal-oriented financial
                  planning. Whether it`s saving for a vacation, a home, or
                  retirement, our app helps you stay on track and celebrate your
                  financial achievements.
                </p>
              </div>
            </article>
          </section>
        </div>
      </section>
    </section>
  )
}

export default Landing
