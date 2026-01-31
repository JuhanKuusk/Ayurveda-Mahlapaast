const programs = [
  {
    name: '1-päevane Detox',
    duration: '1 päev',
    juices: 5,
    price: '40€',
    description: 'Ideaalne algajatele või iganädalaseks puhastuseks. Sisaldab 5 mahlat dosha järgi.',
    benefits: ['Kerge puhastus', 'Energia boost', 'Seedimise tugi'],
    popular: false,
  },
  {
    name: '3-päevane Puhastus',
    duration: '3 päeva',
    juices: 15,
    price: '110€',
    description: 'Sügavam puhastus, mis aitab taastada tasakaalu ja energiat. Populaarseim valik!',
    benefits: ['Sügav detox', 'Kaalu langus', 'Selge mõte', 'Parem uni'],
    popular: true,
  },
  {
    name: '5-päevane Transformatsioon',
    duration: '5 päeva',
    juices: 25,
    price: '165€',
    description: 'Põhjalik Ayurveda puhastus keha ja meele täielikuks taastamiseks.',
    benefits: ['Täielik detox', 'Keha reset', 'Harjumuste muutus', 'Pikaajaline energia'],
    popular: false,
  },
];

export default function ProgramsSection() {
  return (
    <section id="programmid" className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block text-sage-dark text-sm font-semibold tracking-wider uppercase mb-4">
            Mahlapaastu Programmid
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            Vali oma teekond
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto text-lg">
            Kõik programmid sisaldavad personaalset dosha-konsultatsiooni,
            mahlasid vastavalt sinu konstitutsioonile ja täielikku juhist.
          </p>
        </div>

        {/* Program cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 ${
                program.popular ? 'ring-2 ring-sage transform scale-105' : ''
              }`}
            >
              {/* Popular badge */}
              {program.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-sage text-white text-sm font-medium px-4 py-1 rounded-full">
                  Populaarseim
                </div>
              )}

              {/* Header */}
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-sage/20 to-mint/20 mb-4">
                  <span className="text-2xl font-bold text-sage-dark">{program.juices}</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-1">{program.name}</h3>
                <p className="text-foreground/60 text-sm">{program.duration} • {program.juices} mahlat</p>
              </div>

              {/* Price */}
              <div className="text-center mb-6">
                <span className="text-4xl font-bold text-foreground">{program.price}</span>
              </div>

              {/* Description */}
              <p className="text-foreground/70 text-sm text-center mb-6">
                {program.description}
              </p>

              {/* Benefits */}
              <ul className="space-y-3 mb-8">
                {program.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-center gap-3 text-foreground/70 text-sm">
                    <svg className="w-5 h-5 text-sage flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {benefit}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                className={`w-full py-3 rounded-full font-medium transition-colors ${
                  program.popular
                    ? 'bg-sage hover:bg-sage-dark text-white'
                    : 'border-2 border-sage text-sage-dark hover:bg-sage hover:text-white'
                }`}
              >
                Telli nüüd
              </button>
            </div>
          ))}
        </div>

        {/* Additional info */}
        <div className="mt-16 text-center">
          <p className="text-foreground/60 text-sm">
            Kõik hinnad sisaldavad käibemaksu. Kojutoimetamine Tallinnas tasuta tellimustelt alates 50€.
          </p>
        </div>
      </div>
    </section>
  );
}
