'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function NavLink({ href, text }: { href: string; text: string }) {
  const path = usePathname();
  return (
    <Link
      className={`text-[#ddd6cb] font-bold py-2 px-4 rounded-lg gradient-text-hover ${
        path.startsWith(href) ? 'gradient-text-active' : ''
      }`}
      href={href}
    >
      {text}
    </Link>
  );
}
