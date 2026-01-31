'use client';

import { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    dosha: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Täname! Võtame sinuga peagi ühendust.');
    setFormData({ name: '', email: '', phone: '', message: '', dosha: '' });
  };

  return (
    <section id="telli" className="py-24 bg-gradient-to-b from-cream to-sage/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left column - Contact info */}
          <div>
            <span className="inline-block text-sage-dark text-sm font-semibold tracking-wider uppercase mb-4">
              Võta Ühendust
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
              Alusta oma
              <br />
              <span className="text-sage-dark">terviseteekonda</span>
            </h2>
            <p className="text-foreground/70 mb-10 text-lg">
              Kas sul on küsimusi või soovid tellida personaalse mahlapaastu?
              Kirjuta meile ja me aitame sul leida parima lahenduse.
            </p>

            {/* Contact info cards */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm">
                <div className="w-12 h-12 rounded-full bg-sage/20 flex items-center justify-center">
                  <svg className="w-5 h-5 text-sage-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-foreground/60">E-post</p>
                  <p className="text-foreground font-medium">info@ayurvedamahlapaast.ee</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm">
                <div className="w-12 h-12 rounded-full bg-mint/20 flex items-center justify-center">
                  <svg className="w-5 h-5 text-mint-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-foreground/60">Telefon</p>
                  <p className="text-foreground font-medium">+372 5XX XXXX</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm">
                <div className="w-12 h-12 rounded-full bg-lavender/20 flex items-center justify-center">
                  <svg className="w-5 h-5 text-lavender-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-foreground/60">Asukoht</p>
                  <p className="text-foreground font-medium">Tallinn, Eesti</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm">
                <div className="w-12 h-12 rounded-full bg-peach/20 flex items-center justify-center">
                  <svg className="w-5 h-5 text-peach-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-foreground/60">Töötunnid</p>
                  <p className="text-foreground font-medium">E-R 9:00-18:00</p>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="mt-8">
              <p className="text-sm text-foreground/60 mb-4">Jälgi meid</p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-sage/20 flex items-center justify-center hover:bg-sage hover:text-white transition-colors text-sage-dark">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-sage/20 flex items-center justify-center hover:bg-sage hover:text-white transition-colors text-sage-dark">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-sage/20 flex items-center justify-center hover:bg-sage hover:text-white transition-colors text-sage-dark">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right column - Contact form */}
          <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-10">
            <h3 className="text-2xl font-bold text-foreground mb-6">Saada päring</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground/70 mb-2">
                  Nimi *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border border-sage/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-sage/50 focus:border-sage transition-all"
                  placeholder="Sinu nimi"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground/70 mb-2">
                  E-post *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border border-sage/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-sage/50 focus:border-sage transition-all"
                  placeholder="sinu@email.ee"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground/70 mb-2">
                  Telefon
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 border border-sage/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-sage/50 focus:border-sage transition-all"
                  placeholder="+372 5XX XXXX"
                />
              </div>

              <div>
                <label htmlFor="dosha" className="block text-sm font-medium text-foreground/70 mb-2">
                  Sinu dosha (kui tead)
                </label>
                <select
                  id="dosha"
                  value={formData.dosha}
                  onChange={(e) => setFormData({ ...formData, dosha: e.target.value })}
                  className="w-full px-4 py-3 border border-sage/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-sage/50 focus:border-sage transition-all"
                >
                  <option value="">Vali...</option>
                  <option value="vata">Vata</option>
                  <option value="pitta">Pitta</option>
                  <option value="kapha">Kapha</option>
                  <option value="unknown">Ei tea veel</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground/70 mb-2">
                  Sõnum *
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 border border-sage/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-sage/50 focus:border-sage transition-all resize-none"
                  placeholder="Kuidas saame sind aidata?"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-sage hover:bg-sage-dark text-white py-4 rounded-full font-medium transition-colors text-lg"
              >
                Saada päring
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
