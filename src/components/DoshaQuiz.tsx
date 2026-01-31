'use client';

import { useState } from 'react';

const questions = [
  {
    question: 'Milline on sinu kehaehitus?',
    options: [
      { text: 'Sale, pikk, kergelt muskliline', dosha: 'vata' },
      { text: 'Keskmine, atleetlik, proportsionaalne', dosha: 'pitta' },
      { text: 'Tugev, raske, lai', dosha: 'kapha' },
    ],
  },
  {
    question: 'Kuidas sa kirjeldaksid oma nahka?',
    options: [
      { text: 'Kuiv, kare, külm', dosha: 'vata' },
      { text: 'Soe, õlitav, punetusele kalduv', dosha: 'pitta' },
      { text: 'Pehme, niiske, rasune', dosha: 'kapha' },
    ],
  },
  {
    question: 'Milline on sinu energiatase päeva jooksul?',
    options: [
      { text: 'Kiiresti vaheldub, laineline', dosha: 'vata' },
      { text: 'Kõrge, pidev, tugev', dosha: 'pitta' },
      { text: 'Aeglane alustamine, stabiilne, vastupidav', dosha: 'kapha' },
    ],
  },
  {
    question: 'Kuidas reageerid stressile?',
    options: [
      { text: 'Ärevus, hirm, muretsmine', dosha: 'vata' },
      { text: 'Viha, ärrituvus, kriitilisus', dosha: 'pitta' },
      { text: 'Tagasitõmbumine, loidus, ülesöömne', dosha: 'kapha' },
    ],
  },
  {
    question: 'Milline on sinu uni?',
    options: [
      { text: 'Kerge, katkendlik, raske uinuda', dosha: 'vata' },
      { text: 'Mõõdukas, ärkamisega keset ööd', dosha: 'pitta' },
      { text: 'Sügav, pikk, raske ärgata', dosha: 'kapha' },
    ],
  },
];

const doshaResults = {
  vata: {
    name: 'Vata',
    color: 'lavender',
    emoji: '🌬️',
    description: 'Sinu domineeriv dosha on Vata - õhu ja eetri element. Sa oled loominguline, kiire mõtlemisega ja energiline.',
    recommendation: 'Soovitame "Vata Tasakaal" mahlasid - soojendavad, maandavad ja toitvad koostised aitavad tasakaalustada sinu liikuvat energiat.',
  },
  pitta: {
    name: 'Pitta',
    color: 'mint',
    emoji: '🔥',
    description: 'Sinu domineeriv dosha on Pitta - tule ja vee element. Sa oled teotahteline, intelligentne ja entusiastlik.',
    recommendation: 'Soovitame "Pitta Jahedus" mahlasid - jahutavad, rahustavad koostised aitavad tasakaalustada sinu tulist energiat.',
  },
  kapha: {
    name: 'Kapha',
    color: 'gold',
    emoji: '🌍',
    description: 'Sinu domineeriv dosha on Kapha - maa ja vee element. Sa oled rahulik, stabiilne ja armastav.',
    recommendation: 'Soovitame "Kapha Energia" mahlasid - ergutavad, kerged koostised aitavad aktiveerida sinu stabiilset energiat.',
  },
};

export default function DoshaQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [result, setResult] = useState<keyof typeof doshaResults | null>(null);
  const [isStarted, setIsStarted] = useState(false);

  const handleAnswer = (dosha: string) => {
    const newAnswers = [...answers, dosha];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Calculate result
      const counts = { vata: 0, pitta: 0, kapha: 0 };
      newAnswers.forEach((answer) => {
        counts[answer as keyof typeof counts]++;
      });
      const dominant = Object.entries(counts).reduce((a, b) => (a[1] > b[1] ? a : b))[0];
      setResult(dominant as keyof typeof doshaResults);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setResult(null);
    setIsStarted(false);
  };

  const colorClasses = {
    lavender: 'from-lavender via-lavender to-lavender-dark',
    mint: 'from-mint via-mint to-mint-dark',
    gold: 'from-sage via-gold to-gold-dark',
  };

  return (
    <section id="dosha-test" className="py-24 bg-gradient-to-b from-cream via-peach/10 to-cream">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-gradient-to-r from-sage to-gold bg-clip-text text-transparent text-sm font-semibold tracking-wider uppercase mb-4">
            Avasta Oma Dosha
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            Milline dosha sinus domineerib?
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto text-lg">
            Vasta 5 lihtsale küsimusele ja avasta oma Ayurveda kehatüüp, et leida sulle sobivad mahlad.
          </p>
        </div>

        {/* Quiz container */}
        <div className="bg-white rounded-3xl shadow-xl shadow-sage/10 p-8 sm:p-12 border border-gold/10">
          {!isStarted && !result && (
            <div className="text-center">
              <div className="flex justify-center gap-4 mb-8">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-lavender to-lavender-dark flex items-center justify-center text-2xl font-bold text-white shadow-lg shadow-lavender/30">V</div>
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-mint to-mint-dark flex items-center justify-center text-2xl font-bold text-white shadow-lg shadow-mint/30">P</div>
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-sage to-gold-dark flex items-center justify-center text-2xl font-bold text-white shadow-lg shadow-gold/30">K</div>
              </div>
              <p className="text-foreground/70 mb-8">
                Ayurveda järgi on igal inimesel unikaalne kombinatsioon kolmest doshast:
                <strong className="text-lavender-dark"> Vata</strong> (õhk), <strong className="text-mint-dark">Pitta</strong> (tuli) ja <strong className="text-sage">Kapha</strong> (maa).
                Avasta, milline neist sinus domineerib!
              </p>
              <button
                onClick={() => setIsStarted(true)}
                className="bg-gradient-to-r from-sage to-gold hover:from-sage-dark hover:to-gold-dark text-white px-8 py-4 rounded-full text-lg font-medium transition-all transform hover:scale-105 shadow-lg shadow-sage/30"
              >
                Alusta testi
              </button>
            </div>
          )}

          {isStarted && !result && (
            <div>
              {/* Progress bar */}
              <div className="mb-8">
                <div className="flex justify-between text-sm text-foreground/60 mb-2">
                  <span>Küsimus {currentQuestion + 1}/{questions.length}</span>
                  <span>{Math.round(((currentQuestion + 1) / questions.length) * 100)}%</span>
                </div>
                <div className="h-3 bg-cream-dark rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-sage via-gold to-coral transition-all duration-500 rounded-full"
                    style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                  ></div>
                </div>
              </div>

              {/* Question */}
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-8 text-center">
                {questions[currentQuestion].question}
              </h3>

              {/* Options */}
              <div className="space-y-4">
                {questions[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(option.dosha)}
                    className="w-full p-4 text-left border-2 border-gold/30 rounded-2xl hover:border-sage hover:bg-gradient-to-r hover:from-sage/5 hover:to-gold/5 transition-all text-foreground/80 hover:text-foreground hover:shadow-md"
                  >
                    {option.text}
                  </button>
                ))}
              </div>
            </div>
          )}

          {result && (
            <div className="text-center">
              {/* Result icon */}
              <div className={`inline-flex items-center justify-center w-32 h-32 rounded-full bg-gradient-to-br ${colorClasses[doshaResults[result].color as keyof typeof colorClasses]} mb-6 shadow-xl`}>
                <span className="text-5xl">{doshaResults[result].emoji}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                Sinu dosha on <span className={`bg-gradient-to-r ${colorClasses[doshaResults[result].color as keyof typeof colorClasses]} bg-clip-text text-transparent`}>{doshaResults[result].name}</span>!
              </h3>

              <p className="text-foreground/70 mb-6 max-w-lg mx-auto">
                {doshaResults[result].description}
              </p>

              <div className="bg-gradient-to-r from-cream-dark/50 to-gold/10 rounded-2xl p-6 mb-8 border border-gold/20">
                <p className="text-foreground/80">
                  <strong className="text-sage">Meie soovitus:</strong> {doshaResults[result].recommendation}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#mahlad"
                  className="bg-gradient-to-r from-sage to-gold hover:from-sage-dark hover:to-gold-dark text-white px-8 py-3 rounded-full font-medium transition-all transform hover:scale-105 shadow-md"
                >
                  Vaata soovitatud mahlasid
                </a>
                <button
                  onClick={resetQuiz}
                  className="border-2 border-sage text-sage-dark hover:bg-sage hover:text-white px-8 py-3 rounded-full font-medium transition-colors"
                >
                  Tee test uuesti
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
