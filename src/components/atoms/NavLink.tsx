import Link from 'next/link';
import { PropsWithChildren } from 'react';

type TNavLink = {
  href: string;
};

export default function NavLink(props: PropsWithChildren<TNavLink>) {
  return (
    <Link href={props.href}>
      <span className="font-semibold">{props.children}</span>
    </Link>
  );
}
