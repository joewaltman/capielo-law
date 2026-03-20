'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAVIGATION, SITE_NAME } from '@/lib/constants';
import { cn } from '@/lib/utils';
import MobileMenu from './MobileMenu';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled
            ? 'bg-cream-50/95 backdrop-blur-sm shadow-sm py-3'
            : 'bg-transparent py-5'
        )}
      >
        <div className="container-custom">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="transition-opacity hover:opacity-80"
            >
              <img
                src="/images/capielo-logo.png"
                alt={SITE_NAME}
                className="h-16 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {NAVIGATION.map((item) => (
                <NavItem key={item.href} item={item} pathname={pathname} />
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="lg:hidden p-2 -mr-2 text-primary"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}

interface NavItemProps {
  item: (typeof NAVIGATION)[number];
  pathname: string;
}

function NavItem({ item, pathname }: NavItemProps) {
  const [isOpen, setIsOpen] = useState(false);
  const isActive = pathname === item.href || pathname.startsWith(item.href + '/');

  if (item.children) {
    return (
      <div
        className="relative"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <Link
          href={item.href}
          className={cn(
            'flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors',
            isActive
              ? 'text-accent-500'
              : 'text-primary-700 hover:text-accent-500'
          )}
        >
          {item.label}
          <svg
            className={cn(
              'w-4 h-4 transition-transform',
              isOpen && 'rotate-180'
            )}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </Link>

        {/* Dropdown */}
        <div
          className={cn(
            'absolute top-full left-0 pt-2 transition-all duration-200',
            isOpen
              ? 'opacity-100 visible translate-y-0'
              : 'opacity-0 invisible -translate-y-2'
          )}
        >
          <div className="bg-white rounded-lg shadow-lg border border-cream-200 py-2 min-w-[220px]">
            {item.children.map((child) => (
              <Link
                key={child.href}
                href={child.href}
                className={cn(
                  'block px-4 py-2.5 text-sm transition-colors',
                  pathname === child.href
                    ? 'text-accent-500 bg-cream-100'
                    : 'text-primary-700 hover:text-accent-500 hover:bg-cream-50'
                )}
              >
                {child.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <Link
      href={item.href}
      className={cn(
        'px-4 py-2 text-sm font-medium transition-colors',
        isActive
          ? 'text-accent-500'
          : 'text-primary-700 hover:text-accent-500'
      )}
    >
      {item.label}
    </Link>
  );
}
