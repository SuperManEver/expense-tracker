// ui
import Link from '@/app/components/navbar/link';

// styles
import css from './styles.module.css';

function MainNavbar() {
  return (
    <ul className={css.root}>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/price">Price</Link>
    </ul>
  );
}

export default MainNavbar;
