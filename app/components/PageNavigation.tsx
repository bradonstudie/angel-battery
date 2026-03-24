"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Route } from "next";

interface NavigationItem {
  url: Route;
  text: string;
  id: string;
  sortOrder: number;
}

const navigationItems: NavigationItem[] = [
  {
    sortOrder: 0,
    url: "/",
    text: "Projects",
    id: "projects",
  },
  {
    sortOrder: 1,
    url: "/gallery",
    text: "Gallery",
    id: "gallery",
  },
  {
    sortOrder: 2,
    url: "/about",
    text: "About",
    id: "about",
  },
  {
    sortOrder: 3,
    url: "/contact",
    text: "Contact",
    id: "contact",
  },
];

export function PageNavigation() {
  const pathname = usePathname();

  return (
    <nav>
      <ul className="w-full flex flex-row justify-between gap-3 p-3">
        {navigationItems.map((navigationItem) => (
          <li key={navigationItem.id}>
            <Link href={navigationItem.url}>
              <p
                className={`link ${pathname === navigationItem.url ? "font-bold underline" : ""} hover:font-bold uppercase`}
              >
                {navigationItem.text}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
