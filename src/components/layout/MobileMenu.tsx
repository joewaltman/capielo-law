'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAVIGATION, SITE_NAME } from '@/lib/constants';
import { cn } from '@/lib/utils';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname();
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const toggleExpanded = (href: string) => {
    setExpandedItems((prev) =>
      prev.includes(href)
        ? prev.filter((item) => item !== href)
        : [...prev, href]
    );
  };

  return (
    <>
      {/* Overlay */}
      <div
        className={cn(
          'fixed inset-0 bg-primary-900/50 z-50 transition-opacity duration-300 lg:hidden',
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Menu Panel */}
      <div
        className={cn(
          'fixed top-0 right-0 bottom-0 w-full max-w-sm bg-cream-50 z-50 transition-transform duration-300 ease-out lg:hidden',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-cream-200">
            <Link href="/" onClick={onClose}>
              <img
                src="/images/capielo-logo.png"
                alt={SITE_NAME}
                className="h-12 w-auto"
              />
            </Link>
            <button
              type="button"
              className="p-2 -mr-2 text-primary"
              onClick={onClose}
              aria-label="Close menu"
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto py-4">
            {NAVIGATION.map((item) => {
              const isExpanded = expandedItems.includes(item.href);
              const isActive =
                pathname === item.href || pathname.startsWith(item.href + '/');

              if (item.children) {
                return (
                  <div key={item.href}>
                    <button
                      type="button"
                      onClick={() => toggleExpanded(item.href)}
                      className={cn(
                        'flex items-center justify-between w-full px-6 py-3 text-left',
                        isActive
                          ? 'text-accent-500 font-medium'
                          : 'text-primary-700'
                      )}
                    >
                      <span>{item.label}</span>
                      <svg
                        className={cn(
                          'w-5 h-5 transition-transform',
                          isExpanded && 'rotate-180'
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
                    </button>
                    <div
                      className={cn(
                        'overflow-hidden transition-all duration-200',
                        isExpanded ? 'max-h-96' : 'max-h-0'
                      )}
                    >
                      <div className="bg-cream-100 py-2">
                        <Link
                          href={item.href}
                          onClick={onClose}
                          className={cn(
                            'block px-8 py-2.5 text-sm',
                            pathname === item.href
                              ? 'text-accent-500 font-medium'
                              : 'text-primary-600'
                          )}
                        >
                          Overview
                        </Link>
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={onClose}
                            className={cn(
                              'block px-8 py-2.5 text-sm',
                              pathname === child.href
                                ? 'text-accent-500 font-medium'
                                : 'text-primary-600'
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
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className={cn(
                    'block px-6 py-3',
                    isActive
                      ? 'text-accent-500 font-medium'
                      : 'text-primary-700'
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Footer CTA */}
          <div className="p-4 border-t border-cream-200">
            <Link
              href="/contact"
              onClick={onClose}
              className="block w-full text-center rounded-md bg-accent px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-600"
            >
              Schedule a Free Consultation
            </Link>
            <p className="mt-3 text-center text-xs text-text-muted">
              Call us: (925) 397-9529
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
