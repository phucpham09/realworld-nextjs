"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
    const pathname = usePathname();
  
  return (
    <nav className="">
      <div className="flex justify-between px-16 py-3">
        <Link href="/" className="text-2xl font-semibold text-green-500">
          conduit
        </Link>
        <ul className="flex gap-4 items-center">
          <li>
            <Link
              href="/"
              className={`${
                pathname === '/' ? '' : 'text-gray-400'
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/login"
              className={`${
                pathname === '/login' ? '' : 'text-gray-400'
              }`}
            >
              Sign in
            </Link>
          </li>
          <li>
            <Link
              href="/register"
              className={`${
                pathname === '/register' ? '' : 'text-gray-400'
              }`}
            >
              Sign up
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}


/* 
<nav className="">
      <div className="flex justify-between px-16 py-3">
        <Link href="/" className="text-2xl font-semibold text-green-500">
          conduit
        </Link>
        <ul className="flex gap-4 items-center">
          <li>
            <Link
              href="/"
              className={`${
                pathname === '/' ? '' : 'text-gray-400'
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/editor"
              className={`${
                pathname === '/editor' ? '' : 'text-gray-400'
              }`}
            >
              New Article
            </Link>
          </li>
          <li>
            <Link
              href="/settings"
              className={`${
                pathname === '/settings' ? '' : 'text-gray-400'
              }`}
            >
              Settings
            </Link>
          </li>
          <li><Link href={"/profile/eric-simons"} 
          className={`${
                pathname === '/profile/eric-simons' ? '' : 'text-gray-400'
              }`}>Eric Simons<Link/></li>
        </ul>
      </div>
    </nav>
*/