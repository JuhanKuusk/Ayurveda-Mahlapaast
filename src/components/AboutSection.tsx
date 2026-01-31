export default function AboutSection() {
  return (
    <section id="meist" className="py-24 bg-cream-dark/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left column - Image placeholder */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-sage/30 via-mint/20 to-lavender/30 rounded-3xl overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="grid grid-cols-2 gap-4 p-8">
                  <div className="bg-white/60 backdrop-blur rounded-2xl p-6 shadow-lg">
                    <div className="w-12 h-12 rounded-full bg-sage/30 mb-4 flex items-center justify-center">
                      <svg className="w-6 h-6 text-sage-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                    <p className="text-sm font-medium text-foreground">Armastusega valmistatud</p>
                  </div>
                  <div className="bg-white/60 backdrop-blur rounded-2xl p-6 shadow-lg mt-8">
                    <div className="w-12 h-12 rounded-full bg-mint/30 mb-4 flex items-center justify-center">
                      <svg className="w-6 h-6 text-mint-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                      </svg>
                    </div>
                    <p className="text-sm font-medium text-foreground">Kohalik mahetoodang</p>
                  </div>
                  <div className="bg-white/60 backdrop-blur rounded-2xl p-6 shadow-lg">
                    <div className="w-12 h-12 rounded-full bg-lavender/30 mb-4 flex items-center justify-center">
                      <svg className="w-6 h-6 text-lavender-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <p className="text-sm font-medium text-foreground">Autentne Ayurveda</p>
                  </div>
                  <div className="bg-white/60 backdrop-blur rounded-2xl p-6 shadow-lg mt-8">
                    <div className="w-12 h-12 rounded-full bg-peach/30 mb-4 flex items-center justify-center">
                      <svg className="w-6 h-6 text-peach-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <p className="text-sm font-medium text-foreground">Külmpressitud</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Floating accent */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-peach/40 rounded-full blur-2xl"></div>
          </div>

          {/* Right column - Content */}
          <div>
            <span className="inline-block text-sage-dark text-sm font-semibold tracking-wider uppercase mb-4">
              Meie Lugu
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
              Ayurveda tarkus
              <br />
              <span className="text-sage-dark">kohtub Eestiga</span>
            </h2>

            <div className="space-y-6 text-foreground/70">
              <p>
                Ayurveda Mahlapaast sündis armastusest nii Ayurveda iidse tarkuse kui ka Eesti puhta
                looduse vastu. Me usume, et tõeline tervis algab tasakaalust - keha, meele ja vaimu
                harmoonilisest koostööst.
              </p>
              <p>
                Meie mahlad kombineerivad kohalikke mahekoostisosi - värskelt talumajapidamistes
                kasvatatud juurvilju ja puuvilju - autentsete India Ayurveda vürtsidega. Iga retsept
                on hoolikalt loodud, et toetada sinu unikaalset dosha-profiili.
              </p>
              <p>
                Kasutame külmpressimise tehnoloogiat, et säilitada kõik vitamiinid, ensüümid ja
                eluenergia. Meie mahlad on värskemad, toitainerikkamad ja maitsvamad.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-10 pt-10 border-t border-sage/20">
              <div>
                <div className="text-3xl font-bold text-foreground">100%</div>
                <div className="text-sm text-foreground/60">Mahekoostisosad</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-foreground">12+</div>
                <div className="text-sm text-foreground/60">Unikaalset retsepti</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-foreground">3</div>
                <div className="text-sm text-foreground/60">Dosha programmi</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
