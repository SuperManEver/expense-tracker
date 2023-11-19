// ui
import Link from '@/app/components/navbar/link';
import Button from '@/app/components/ui/button';

// styles
import css from './styles.module.css';

function MainNavbar() {
  return (
    <ul className={css.root}>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/login">Login</Link>

      <Button variant="bordered" className={css.button}>
        Get Started
      </Button>
    </ul>
  );
}

export default MainNavbar;
