import Logo from '@/assets/logo.png';
import { MainHeaderBackground } from './main-header-background';
import Link from 'next/link';
import { NavLink } from './nav-link';
export function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className="flex justify-between item-center px-4 md:px-[10%] py-8">
        <Link
          href={'/'}
          className="flex items-center justify-center gap-8 text-[#ddd6cb] font-bold traking-[0.15rem] uppercase text-2xl"
        >
          <img
            src={Logo.src}
            alt="Logo"
            className="w-20 h-20 object-contain drop-shadow-[0_0_0.75rem_rgba(0,0,0,0.5)]"
          />
          NextLevel Food
        </Link>
        <nav className="flex items-center justify-center">
          <ul className="flex gap-6 text-xl">
            <li>
              <NavLink href={'/meals'} text="Browse Meals" />
            </li>
            <li>
              <NavLink href={'/community'} text="Foodies Community" />
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
