import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <header>
        <h3>Expense Tracker</h3>

        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Price</li>
        </ul>
      </header>
      Landing
    </main>
  );
}
