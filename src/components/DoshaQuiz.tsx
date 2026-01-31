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
    description: 'Sinu domineeriv dosha on Vata - õhu ja eetri element. Sa oled loominguline, kiire mõtlemisega ja energiline.',
    recommendation: 'Soovitame "Vata Tasakaal" mahlasid - soojendavad, maandavad ja toitvad koostised aitavad tasakaalustada sinu liikuvat energiat.',
  },
  pitta: {
    name: 'Pitta',
    color: 'mint',
    description: 'Sinu domineeriv dosha on Pitta - tule ja vee element. Sa oled teotahteline, intelligentne ja entusiastlik.',
    recommendation: 'Soovitame "Pitta Jahedus" mahlasid - jahutavad, rahustavad koostised aitavad tasakaalustada sinu tulist energiat.',
  },
  kapha: {
    name: 'Kapha',
    color: 'peach',
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
    lavender: 'from-lavender to-sky',
    mint: 'from-mint to-sky',
    peach: 'from-peach to-coral',
  };

  return (
    <section id="dosha-test" className="py-24 bg-gradient-to-b from-cream to-lavender/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <span className="inline-block text-sage-dark text-sm font-semibold tracking-wider uppercase mb-4">
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
        <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-12">
          {!isStarted && !result && (
            <div className="text-center">
              <div className="flex justify-center gap-4 mb-8">
                <div className="w-20 h-20 rounded-full bg-lavender/50 flex items-center justify-center text-2xl font-bold text-lavender-dark">V</div>
                <div className="w-20 h-20 rounded-full bg-mint/50 flex items-center justify-center text-2xl font-bold text-mint-dark">P</div>
                <div className="w-20 h-20 rounded-full bg-peach/50 flex items-center justify-center text-2xl font-bold text-peach-dark">K</div>
              </div>
              <p className="text-foreground/70 mb-8">
                Ayurveda järgi on igal inimesel unikaalne kombinatsioon kolmest doshast:
                <strong> Vata</strong> (õhk), <strong>Pitta</strong> (tuli) ja <strong>Kapha</strong> (maa).
                Avasta, milline neist sinus domineerib!
              </p>
              <button
                onClick={() => setIsStarted(true)}
                className="bg-sage hover:bg-sage-dark text-white px-8 py-4 rounded-full text-lg font-medium transition-all transform hover:scale-105"
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
                <div className="h-2 bg-cream-dark rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-sage to-mint transition-all duration-300"
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
                    className="w-full p-4 text-left border-2 border-sage/30 rounded-2xl hover:border-sage hover:bg-sage/5 transition-all text-foreground/80 hover:text-foreground"
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
              <div className={`inline-flex items-center justify-center w-32 h-32 rounded-full bg-gradient-to-br ${colorClasses[doshaResults[result].color as keyof typeof colorClasses]} mb-6`}>
                <span className="text-4xl font-bold text-white">{doshaResults[result].name.charAt(0)}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                Sinu dosha on {doshaResults[result].name}!
              </h3>

              <p className="text-foreground/70 mb-6 max-w-lg mx-auto">
                {doshaResults[result].description}
              </p>

              <div className="bg-cream-dark/50 rounded-2xl p-6 mb-8">
                <p className="text-foreground/80">
                  <strong>Meie soovitus:</strong> {doshaResults[result].recommendation}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#mahlad"
                  className="bg-sage hover:bg-sage-dark text-white px-8 py-3 rounded-full font-medium transition-colors"
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
