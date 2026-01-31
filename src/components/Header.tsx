'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cream/90 backdrop-blur-md border-b border-sage/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-sage to-mint flex items-center justify-center">
              <span className="text-white font-bold text-lg">A</span>
            </div>
            <span className="text-xl font-semibold text-foreground">
              Ayurveda <span className="text-sage-dark">Mahlapaast</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/#mahlad" className="text-foreground/80 hover:text-sage-dark transition-colors">
              Mahlad
            </Link>
            <Link href="/#programmid" className="text-foreground/80 hover:text-sage-dark transition-colors">
              Programmid
            </Link>
            <Link href="/#dosha-test" className="text-foreground/80 hover:text-sage-dark transition-colors">
              Dosha Test
            </Link>
            <Link href="/#meist" className="text-foreground/80 hover:text-sage-dark transition-colors">
              Meist
            </Link>
            <Link
              href="/#telli"
              className="bg-sage hover:bg-sage-dark text-white px-6 py-2 rounded-full transition-colors font-medium"
            >
              Telli
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 text-foreground"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-sage/20">
            <div className="flex flex-col space-y-4">
              <Link
                href="/#mahlad"
                className="text-foreground/80 hover:text-sage-dark transition-colors px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Mahlad
              </Link>
              <Link
                href="/#programmid"
                className="text-foreground/80 hover:text-sage-dark transition-colors px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Programmid
              </Link>
              <Link
                href="/#dosha-test"
                className="text-foreground/80 hover:text-sage-dark transition-colors px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Dosha Test
              </Link>
              <Link
                href="/#meist"
                className="text-foreground/80 hover:text-sage-dark transition-colors px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Meist
              </Link>
              <Link
                href="/#telli"
                className="bg-sage hover:bg-sage-dark text-white px-6 py-2 rounded-full transition-colors font-medium text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Telli
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
