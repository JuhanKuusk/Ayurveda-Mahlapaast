'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-md border-b border-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-sage to-gold flex items-center justify-center shadow-md shadow-sage/20">
              <span className="text-white font-bold text-lg">A</span>
            </div>
            <span className="text-xl font-semibold text-foreground">
              Ayurveda <span className="bg-gradient-to-r from-sage to-gold bg-clip-text text-transparent">Mahlapaast</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/#mahlad" className="text-foreground/80 hover:text-sage transition-colors font-medium">
              Mahlad
            </Link>
            <Link href="/#programmid" className="text-foreground/80 hover:text-sage transition-colors font-medium">
              Programmid
            </Link>
            <Link href="/#dosha-test" className="text-foreground/80 hover:text-sage transition-colors font-medium">
              Dosha Test
            </Link>
            <Link href="/#meist" className="text-foreground/80 hover:text-sage transition-colors font-medium">
              Meist
            </Link>
            <Link
              href="/#telli"
              className="bg-gradient-to-r from-sage to-gold hover:from-sage-dark hover:to-gold-dark text-white px-6 py-2 rounded-full transition-all font-medium shadow-md shadow-sage/20 hover:shadow-lg"
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
              className="w-6 h-6 text-sage"
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
          <nav className="md:hidden py-4 border-t border-gold/20">
            <div className="flex flex-col space-y-4">
              <Link
                href="/#mahlad"
                className="text-foreground/80 hover:text-sage transition-colors px-2 py-1 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Mahlad
              </Link>
              <Link
                href="/#programmid"
                className="text-foreground/80 hover:text-sage transition-colors px-2 py-1 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Programmid
              </Link>
              <Link
                href="/#dosha-test"
                className="text-foreground/80 hover:text-sage transition-colors px-2 py-1 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Dosha Test
              </Link>
              <Link
                href="/#meist"
                className="text-foreground/80 hover:text-sage transition-colors px-2 py-1 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Meist
              </Link>
              <Link
                href="/#telli"
                className="bg-gradient-to-r from-sage to-gold text-white px-6 py-2 rounded-full transition-colors font-medium text-center shadow-md"
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
