"use client";

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-gray-200 dark:border-gray-700 px-6 py-4 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto flex justify-between items-center text-sm text-gray-600 dark:text-gray-400">
        <div>© {year} Ryodes</div>

        <div className="flex space-x-4 text-xl">
          <a
            href="https://github.com/ryodes"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-black dark:hover:text-white"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/adel-kacimi-146b08166/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-blue-600 dark:hover:text-blue-400"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:adel.kacimi.daw@gmail.com"
            aria-label="Email"
            className="hover:text-red-600 dark:hover:text-red-400"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
}
