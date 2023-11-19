'use client';

// vendor
import Link from 'next/link';
import cn from 'clsx';
import { usePathname } from 'next/navigation';

// styles
import css from './styles.module.css';

interface IProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

function NavbarLink({ href, children, className }: IProps) {
  const pathname = usePathname();

  return (
    <div className={css.wrapper}>
      <Link
        className={cn(css.root, { [css.active]: pathname === href }, className)}
        href={href}
      >
        {children}
      </Link>
    </div>
  );
}

export default NavbarLink;
