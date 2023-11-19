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

      <Link href="/login">
        <Button variant="bordered">Get Started</Button>
      </Link>
    </ul>
  );
}

export default MainNavbar;
