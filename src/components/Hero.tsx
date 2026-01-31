export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-cream via-gold/10 to-cream">
      {/* Decorative circles - warm Ayurveda colors */}
      <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-gold/40 blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-mint/30 blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-peach/30 blur-3xl"></div>
      <div className="absolute top-40 right-20 w-48 h-48 rounded-full bg-lavender/25 blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center">
          {/* Badge - Golden/Turmeric */}
          <div className="inline-flex items-center px-5 py-2.5 rounded-full bg-gradient-to-r from-sage/90 to-gold/90 text-white text-sm font-medium mb-8 shadow-lg shadow-sage/30">
            <span className="w-2 h-2 rounded-full bg-white mr-2 animate-pulse"></span>
            Eesti esimene Ayurveda mahlapaast
          </div>

          {/* Main headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6">
            Tasakaalusta oma keha
            <br />
            <span className="bg-gradient-to-r from-sage via-gold to-coral bg-clip-text text-transparent">
              Ayurveda tarkusega
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-foreground/70 max-w-2xl mx-auto mb-10">
            Personaliseeritud dosha-põhised mahlapaastud kohalikest mahekoostisosadest.
            Avasta oma unikaalne tee tervise ja heaolu poole.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#dosha-test"
              className="w-full sm:w-auto bg-gradient-to-r from-sage to-gold hover:from-sage-dark hover:to-gold-dark text-white px-8 py-4 rounded-full text-lg font-medium transition-all transform hover:scale-105 shadow-lg shadow-sage/40"
            >
              Avasta oma Dosha
            </a>
            <a
              href="#mahlad"
              className="w-full sm:w-auto border-2 border-sage text-sage-dark hover:bg-sage hover:text-white px-8 py-4 rounded-full text-lg font-medium transition-all"
            >
              Vaata mahlasid
            </a>
          </div>

          {/* Trust badges */}
          <div className="mt-16 flex flex-wrap justify-center gap-8 text-foreground/70 text-sm">
            <div className="flex items-center gap-2 bg-white/60 backdrop-blur px-4 py-2 rounded-full">
              <svg className="w-5 h-5 text-mint" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>100% Mahekoostisosad</span>
            </div>
            <div className="flex items-center gap-2 bg-white/60 backdrop-blur px-4 py-2 rounded-full">
              <svg className="w-5 h-5 text-sage" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Külmpressitud mahlad</span>
            </div>
            <div className="flex items-center gap-2 bg-white/60 backdrop-blur px-4 py-2 rounded-full">
              <svg className="w-5 h-5 text-coral" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Kojutoimetamine Tallinn</span>
            </div>
          </div>
        </div>

        {/* Floating juice bottles illustration - Vibrant Ayurveda colors */}
        <div className="mt-20 flex justify-center gap-4 sm:gap-8">
          <div className="animate-float" style={{ animationDelay: '0s' }}>
            <div className="w-16 h-32 sm:w-20 sm:h-40 rounded-xl bg-gradient-to-b from-lavender via-lavender to-lavender-dark shadow-xl shadow-lavender/40 border-2 border-white/30"></div>
            <p className="text-xs text-center mt-2 text-lavender-dark font-medium">Vata</p>
          </div>
          <div className="animate-float" style={{ animationDelay: '0.5s' }}>
            <div className="w-16 h-32 sm:w-20 sm:h-40 rounded-xl bg-gradient-to-b from-mint via-mint to-mint-dark shadow-xl shadow-mint/40 border-2 border-white/30"></div>
            <p className="text-xs text-center mt-2 text-mint-dark font-medium">Pitta</p>
          </div>
          <div className="animate-float" style={{ animationDelay: '1s' }}>
            <div className="w-16 h-32 sm:w-20 sm:h-40 rounded-xl bg-gradient-to-b from-sage via-gold to-gold-dark shadow-xl shadow-gold/40 border-2 border-white/30"></div>
            <p className="text-xs text-center mt-2 text-gold-dark font-medium">Kapha</p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
