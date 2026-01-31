interface JuiceCardProps {
  name: string;
  subtitle: string;
  description: string;
  ingredients: string[];
  benefits: string[];
  color: 'vata' | 'pitta' | 'kapha' | 'universal';
  price: string;
}

const colorClasses = {
  vata: {
    bg: 'bg-gradient-to-br from-lavender to-sky',
    badge: 'bg-lavender-dark/80',
    button: 'bg-lavender-dark hover:bg-lavender',
  },
  pitta: {
    bg: 'bg-gradient-to-br from-mint to-sky',
    badge: 'bg-mint-dark/80',
    button: 'bg-mint-dark hover:bg-mint',
  },
  kapha: {
    bg: 'bg-gradient-to-br from-peach to-coral',
    badge: 'bg-peach-dark/80',
    button: 'bg-coral-dark hover:bg-coral',
  },
  universal: {
    bg: 'bg-gradient-to-br from-gold to-sage',
    badge: 'bg-sage-dark/80',
    button: 'bg-sage-dark hover:bg-sage',
  },
};

export default function JuiceCard({
  name,
  subtitle,
  description,
  ingredients,
  benefits,
  color,
  price,
}: JuiceCardProps) {
  const colors = colorClasses[color];

  return (
    <div className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
      {/* Top colored section */}
      <div className={`h-48 ${colors.bg} relative overflow-hidden`}>
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Bottle silhouette */}
          <div className="w-16 h-32 bg-white/30 rounded-xl backdrop-blur-sm shadow-inner transform group-hover:scale-110 transition-transform duration-300"></div>
        </div>
        {/* Badge */}
        <div className={`absolute top-4 right-4 ${colors.badge} text-white text-xs font-medium px-3 py-1 rounded-full`}>
          {color === 'universal' ? 'Universaalne' : color.charAt(0).toUpperCase() + color.slice(1)}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-foreground mb-1">{name}</h3>
        <p className="text-sm text-foreground/60 mb-3">{subtitle}</p>
        <p className="text-foreground/70 text-sm mb-4">{description}</p>

        {/* Ingredients */}
        <div className="mb-4">
          <p className="text-xs font-semibold text-foreground/50 uppercase tracking-wide mb-2">Koostisosad</p>
          <div className="flex flex-wrap gap-1">
            {ingredients.map((ingredient, index) => (
              <span
                key={index}
                className="text-xs bg-cream-dark text-foreground/70 px-2 py-1 rounded-full"
              >
                {ingredient}
              </span>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-6">
          <p className="text-xs font-semibold text-foreground/50 uppercase tracking-wide mb-2">Kasud</p>
          <ul className="space-y-1">
            {benefits.map((benefit, index) => (
              <li key={index} className="text-xs text-foreground/60 flex items-center gap-2">
                <svg className="w-3 h-3 text-sage" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {benefit}
              </li>
            ))}
          </ul>
        </div>

        {/* Price and CTA */}
        <div className="flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold text-foreground">{price}</span>
            <span className="text-sm text-foreground/50"> / 330ml</span>
          </div>
          <button className={`${colors.button} text-white px-6 py-2 rounded-full text-sm font-medium transition-colors`}>
            Lisa korvi
          </button>
        </div>
      </div>
    </div>
  );
}
