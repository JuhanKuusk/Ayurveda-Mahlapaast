import JuiceCard from './JuiceCard';

const juices = [
  {
    name: 'Vata Tasakaal',
    subtitle: 'Maandav Juur',
    description: 'Magus ja soojendav mahl, mis tasakaalustab Vata energiat ning toetab närvisüsteemi.',
    ingredients: ['Porgand', 'Õun', 'Peet', 'Ingver', 'Kaneel'],
    benefits: ['Maandab rahutust', 'Soojendab keha', 'Toetab seedimist'],
    color: 'vata' as const,
    price: '8.90€',
  },
  {
    name: 'Pitta Jahedus',
    subtitle: 'Roheline Rahu',
    description: 'Jahutav ja rahustav mahl, mis tasakaalustab Pitta tuld ning toetab maksa.',
    ingredients: ['Kurk', 'Seller', 'Õun', 'Spinat', 'Münt', 'Aaloe'],
    benefits: ['Jahutab keha', 'Rahustab meelt', 'Toetab maksa'],
    color: 'pitta' as const,
    price: '9.90€',
  },
  {
    name: 'Kapha Energia',
    subtitle: 'Terav Ärkamine',
    description: 'Ergutav ja kerge mahl, mis aktiveerib Kapha energiat ning toetab ainevahetust.',
    ingredients: ['Kapsas', 'Seller', 'Õun', 'Ingver', 'Kurkum', 'Cayenne'],
    benefits: ['Ergutab energiat', 'Toetab ainevahetust', 'Vähendab raskustunnet'],
    color: 'kapha' as const,
    price: '8.90€',
  },
  {
    name: 'Kuldne Päikesetõus',
    subtitle: 'Põletikuvastane',
    description: 'Võimas põletikuvastane mahl kurkumi ja ingveriga, sobib kõigile doshadele.',
    ingredients: ['Porgand', 'Apelsin', 'Kurkum', 'Ingver', 'Must pipar'],
    benefits: ['Vähendab põletikku', 'Tugevdab immuunsust', 'Annab energiat'],
    color: 'universal' as const,
    price: '9.50€',
  },
  {
    name: 'Roheline Detox',
    subtitle: 'Igapäevane Puhastus',
    description: 'Klorofüllirikas roheline mahl igapäevaseks detoksiks ja energiaks.',
    ingredients: ['Lehtkapsas', 'Seller', 'Kurk', 'Õun', 'Sidrun', 'Petersell'],
    benefits: ['Puhastab keha', 'Annab energiat', 'Toetab seedimist'],
    color: 'universal' as const,
    price: '9.90€',
  },
  {
    name: 'Punane Jõud',
    subtitle: 'Energia Boost',
    description: 'Peedirikkas mahl sportlastele ja aktiivsetele inimestele, toetab vereringet.',
    ingredients: ['Peet', 'Porgand', 'Õun', 'Ingver', 'Sidrun'],
    benefits: ['Parandab vastupidavust', 'Toetab vereringet', 'Annab jõudu'],
    color: 'universal' as const,
    price: '8.50€',
  },
];

export default function JuicesSection() {
  return (
    <section id="mahlad" className="py-24 bg-cream-dark/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block text-sage-dark text-sm font-semibold tracking-wider uppercase mb-4">
            Meie Mahlad
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            Dosha-põhised mahlad
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto text-lg">
            Iga mahl on loodud Ayurveda põhimõtete järgi, kasutades kohalikke mahekoostisosi
            ja autentseid India vürtse.
          </p>
        </div>

        {/* Dosha filter pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button className="bg-sage text-white px-6 py-2 rounded-full text-sm font-medium">
            Kõik
          </button>
          <button className="bg-lavender hover:bg-lavender-dark text-foreground px-6 py-2 rounded-full text-sm font-medium transition-colors">
            Vata
          </button>
          <button className="bg-mint hover:bg-mint-dark text-foreground px-6 py-2 rounded-full text-sm font-medium transition-colors">
            Pitta
          </button>
          <button className="bg-peach hover:bg-peach-dark text-foreground px-6 py-2 rounded-full text-sm font-medium transition-colors">
            Kapha
          </button>
          <button className="bg-gold hover:bg-gold-dark text-foreground px-6 py-2 rounded-full text-sm font-medium transition-colors">
            Universaalsed
          </button>
        </div>

        {/* Juice cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {juices.map((juice, index) => (
            <JuiceCard key={index} {...juice} />
          ))}
        </div>
      </div>
    </section>
  );
}
