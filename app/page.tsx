// ui
import Navbar from '@/app/components/navbar/main-navbar'
import Button from '@/app/components/ui/button'
import Image from 'next/image'

// styles
import css from './page.module.scss'

function Landing() {
  return (
    <section>
      <header className={css.header}>
        <h3 className={css.title}>Expense</h3>
        <Navbar />
      </header>

      <article className={css.heroSection}>
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
            <Button>Get Started</Button>
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
    </section>
  )
}

export default Landing
