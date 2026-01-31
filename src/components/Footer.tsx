import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-foreground text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-sage to-mint flex items-center justify-center">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <span className="text-xl font-semibold">
                Ayurveda <span className="text-sage">Mahlapaast</span>
              </span>
            </Link>
            <p className="text-white/60 text-sm mb-6">
              Eesti esimene autentne Ayurveda mahlapaastu bränd. Personaliseeritud
              dosha-põhised programmid kohalikest mahekoostisosadest.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-sage transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-sage transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-semibold mb-4">Kiirlingid</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/#mahlad" className="text-white/60 hover:text-sage transition-colors">
                  Mahlad
                </Link>
              </li>
              <li>
                <Link href="/#programmid" className="text-white/60 hover:text-sage transition-colors">
                  Programmid
                </Link>
              </li>
              <li>
                <Link href="/#dosha-test" className="text-white/60 hover:text-sage transition-colors">
                  Dosha Test
                </Link>
              </li>
              <li>
                <Link href="/#meist" className="text-white/60 hover:text-sage transition-colors">
                  Meist
                </Link>
              </li>
              <li>
                <Link href="/#telli" className="text-white/60 hover:text-sage transition-colors">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Doshas */}
          <div>
            <h4 className="font-semibold mb-4">Doshad</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="text-white/60 hover:text-lavender transition-colors flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-lavender"></span>
                  Vata
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-mint transition-colors flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-mint"></span>
                  Pitta
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-peach transition-colors flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-peach"></span>
                  Kapha
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Kontakt</h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li>
                <a href="mailto:info@ayurvedamahlapaast.ee" className="hover:text-sage transition-colors">
                  info@ayurvedamahlapaast.ee
                </a>
              </li>
              <li>
                <a href="tel:+3725XXXXXXX" className="hover:text-sage transition-colors">
                  +372 5XX XXXX
                </a>
              </li>
              <li>Tallinn, Eesti</li>
              <li>E-R 9:00-18:00</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            &copy; 2026 Ayurveda Mahlapaast OÜ. Kõik õigused kaitstud.
          </p>
          <div className="flex gap-6 text-sm text-white/40">
            <a href="#" className="hover:text-white/60 transition-colors">Privaatsuspoliitika</a>
            <a href="#" className="hover:text-white/60 transition-colors">Kasutustingimused</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
