import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { cn } from "../../utils";
import {
  HomeIcon,
  UserGroupIcon,
  AcademicCapIcon,
  CurrencyDollarIcon,
  NewspaperIcon,
  EnvelopeIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
const navigation = [
  { name: "Home", href: "/", icon: HomeIcon },
  { name: "About", href: "/about", icon: UserGroupIcon },
  { name: "Course", href: "/course", icon: AcademicCapIcon },
  { name: "Pricing", href: "/pricing", icon: CurrencyDollarIcon },
  { name: "Blog", href: "/blog", icon: NewspaperIcon },
  { name: "Contact", href: "/contact", icon: EnvelopeIcon },
];
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav
      className={cn(" sticky top-0  z-50 transition-all duration-300", {
        "bg-white/80 backdrop-blur-md shadow-sm": isScrolled,
        "bg-transparent": !isScrolled,
      })}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              to="/"
              className="text-xl font-semibold tracking-tight hover:opacity-80 transition-opacity"
            >
              <img
                src="https://gyanias.in/wp-content/uploads/2022/01/Artboard-%E2%80%93-12.svg"
                alt="Logo"
                className="h-12 w-auto"
              />
            </Link>
          </div>
          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="group flex items-center space-x-2 text-sm font-medium text-gray-700 hover:text-emerald-600 transition-colors duration-200"
              >
                <item.icon className="h-5 w-5 opacity-75 group-hover:opacity-100 transition-opacity" />
                <span>{item.name}</span>
              </Link>
            ))}
          </div>
          {/* Auth Buttons */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <Link
              to="/signin"
              className="text-sm font-medium text-gray-700 hover:text-emerald-600 transition-colors duration-200"
            >
              Sign in
            </Link>
            <Link
              to="/signup"
              className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700 transition-colors duration-200"
            >
              Sign up
            </Link>
          </div>
          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white  transition-colors duration-200 bg-emerald-600"
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <XMarkIcon className="block h-6 w-6" />
              ) : (
                <Bars3Icon className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      <div
        className={cn(
          "md:hidden transition-all duration-300 ease-in-out overflow-hidden",
          {
            "max-h-[600px] border-b border-gray-200": isMobileMenuOpen,
            "max-h-0": !isMobileMenuOpen,
          }
        )}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white/80 backdrop-blur-md">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="group flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 transition-all duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <item.icon className="h-5 w-5 opacity-75 group-hover:opacity-100 transition-opacity" />
              <span>{item.name}</span>
            </Link>
          ))}
          <div className="pt-4 space-y-2">
            <Link
              to="/signin"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 transition-all duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Sign in
            </Link>
            <Link
              to="/signup"
              className="block px-3 py-2 rounded-md text-base font-medium text-white bg-emerald-600 hover:bg-emerald-700 transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
