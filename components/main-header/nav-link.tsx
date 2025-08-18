import Link from 'next/link';

export function NavLink({ href, text }: { href: string; text: string }) {
  return (
    <Link
      className="text-[#ddd6cb] font-bold py-2 px-4 rounded-lg gradient-text-hover gradient-text-active"
      href={href}
    >
      {text}
    </Link>
  );
}
