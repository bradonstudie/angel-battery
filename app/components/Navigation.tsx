"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav>
      <ul className="w-full flex flex-row gap-3 p-3 border-1 border-white">
        <li className="grow uppercase">
          <p>Bradon Studebaker</p>
        </li>
        <li className="self-end uppercase">
          <Link
            href="/"
            className={`link ${pathname === "/" ? "font-bold" : ""}`}
          >
            Projects
          </Link>
        </li>
        <li className="self-end uppercase">
          <Link
            href="/contact"
            className={`link ${pathname === "/contact" ? "font-bold" : ""}`}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
