// vendor
import Link from 'next/link';
import cn from 'clsx';

// styles
import css from './styles.module.css';

interface IProps {
  href: string;
  children: string;
  className?: string;
}

function NavbarLink({ href, children, className }: IProps) {
  return (
    <Link className={cn(css.root, className)} href={href}>
      {children}
    </Link>
  );
}

export default NavbarLink;
