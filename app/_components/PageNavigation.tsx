"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { navigationItems } from "@/app/_config";

export function PageNavigation() {
  const pathname = usePathname();

  return (
    <nav className="p-3">
      <ul className="w-full flex flex-row justify-between">
        {navigationItems
          .sort((a, b) => a.sortOrder - b.sortOrder)
          .map((navigationItem) => (
            <li key={navigationItem.id}>
              <Link href={navigationItem.url}>
                <p
                  className={`link hover:underline uppercase ${pathname === navigationItem.url ? "font-bold underline" : ""} `}
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
