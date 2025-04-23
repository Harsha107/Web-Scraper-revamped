"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChartLine } from "react-icons/fa";
import { Menu, X } from "lucide-react";
import navLinks from "@/data/navLinks";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observerOptions = { root: null, rootMargin: "0px", threshold: 0.6 };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(`#${entry.target.id}`);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    navLinks.forEach(({ href }) => {
      const section = document.getElementById(href.substring(1));
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavigation = (href: string) => (event: React.MouseEvent) => {
    event.preventDefault();
    const targetSection = document.getElementById(href.substring(1));
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
      setActiveSection(href);
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed w-full z-50 flex justify-center p-4">
      <motion.div
        initial={{ width: "auto" }}
        animate={{ width: isMenuOpen ? "95vw" : "auto" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="relative flex items-center gap-6 justify-between bg-white/70 backdrop-blur-sm shadow-sm px-6 py-3 rounded-2xl"
      >
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: isMenuOpen ? "1vw" : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <Link 
            href="/" 
            className="flex items-center gap-2 text-gray-900 font-bold text-xl" 
            onClick={() => setActiveSection("")}
          >
            <span className="bg-primary-600 text-white p-2 rounded-lg">
              <FaChartLine className="h-5 w-5" />
            </span>
            <span>
              <span className="text-primary-600">Price</span>Track
            </span>
          </Link>
        </motion.div>

        <nav className="hidden md:flex gap-6">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={handleNavigation(href)}
              className={`transition ${
                activeSection === href
                  ? "text-primary-600 font-bold border-b-2 pb-1 border-primary-600"
                  : "text-gray-600 hover:text-primary-600"
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex gap-3">
          <Link href="/login" className="px-4 py-2 text-gray-700 hover:text-primary-600 transition">
            Login
          </Link>
          <Link
            href="/signup"
            className="px-4 py-2 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition"
          >
            Start Tracking
          </Link>
        </div>

        <motion.button
          initial={{ x: 0 }}
          animate={{ x: isMenuOpen ? "1vw" : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="md:hidden text-gray-500 cursor-pointer"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </motion.button>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden absolute top-full left-0 right-0 mt-2 bg-white shadow-md rounded-2xl overflow-hidden"
            >
              <nav className="flex flex-col gap-4 text-center p-4">
                {navLinks.map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    className={`transition ${
                      activeSection === href
                        ? "text-primary-600 font-bold border-b-2 pb-1 border-primary-600"
                        : "text-gray-700 hover:text-primary-600"
                    }`}
                    onClick={handleNavigation(href)}
                  >
                    {label}
                  </Link>
                ))}
                <Link href="/login" className="text-gray-700 hover:text-primary-600 transition">
                  Login
                </Link>
                <Link
                  href="/signup"
                  className="bg-primary-600 text-white rounded-xl py-2 text-center hover:bg-primary-700 transition"
                >
                  Start Tracking
                </Link>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </header>
  );
}