"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function Navbar() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored) {
      setTheme(stored as "light" | "dark");
      document.documentElement.classList.toggle("dark", stored === "dark");
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      if (prefersDark) {
        setTheme("dark");
        document.documentElement.classList.add("dark");
      }
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <header className="w-full border-b border-gray-200 dark:border-gray-700 px-6 py-4">
      <nav className="max-w-4xl mx-auto flex justify-between items-center">
        <div>
          <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">
            Titre <span className="mx-1">&gt;</span> Ingérieur
          </div>
          <Link href="/">
            <h2 className="text-2xl font-semibold">Adel KACIMI</h2>
          </Link>
          <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">
            Ingénieur d'étude et développement
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <Link href="/blog" className="text-sm hover:underline">
            Blog
          </Link>
          <Link href="/projets" className="text-sm hover:underline">
            Projets
          </Link>
          <button
            onClick={toggleTheme}
            aria-label="Switch theme"
            className="p-1 rounded dark:hover:bg-gray-500"
          >
            {theme === "dark" ? (
              <Sun className="w-5 h-5 text-yellow-400" />
            ) : (
              <Moon className="w-5 h-5 text-gray-700" />
            )}
          </button>
        </div>
      </nav>
    </header>
  );
}
