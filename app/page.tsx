// vendor
import Image from 'next/image';

// ui
import MainNavbar from '@/app/components/main-navbar';

// styles
import css from './page.module.css';

export default function Home() {
  return (
    <main className={css.main}>
      <header className={css.header}>
        <h3>Expense Tracker</h3>
        <MainNavbar />
      </header>
      Landing
    </main>
  );
}
