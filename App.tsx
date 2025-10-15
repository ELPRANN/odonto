
import React, { useState, useCallback } from 'react';
import { getDentalInfo } from './services/geminiService';
import FaqItem from './components/FaqItem';
import Header from './components/Header';
import { DENTAL_QUESTIONS } from './constants';

const App: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [loadingStates, setLoadingStates] = useState<Record<number, boolean>>({});
  const [error, setError] = useState<string | null>(null);

  const handleItemClick = useCallback(async (index: number) => {
    if (activeIndex === index) {
      setActiveIndex(null);
      return;
    }

    setActiveIndex(index);
    
    if (answers[index]) {
      return; 
    }

    setLoadingStates(prev => ({ ...prev, [index]: true }));
    setError(null);

    try {
      const question = DENTAL_QUESTIONS[index];
      const answer = await getDentalInfo(question.title);
      setAnswers(prev => ({ ...prev, [index]: answer }));
    } catch (err) {
      console.error("Error al obtener información de Gemini:", err);
      setError("No se pudo obtener la respuesta. Por favor, intente de nuevo más tarde.");
    } finally {
      setLoadingStates(prev => ({ ...prev, [index]: false }));
    }
  }, [activeIndex, answers]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-blue-100 font-sans">
      <div className="container mx-auto p-4 sm:p-6 md:p-8 max-w-4xl">
        <Header />
        
        <main className="mt-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 md:p-8">
          <h2 className="text-2xl font-bold text-slate-700 mb-6 text-center">Preguntas Frecuentes</h2>
          
          {error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg relative mb-6" role="alert">
            <strong className="font-bold">Error: </strong>
            <span className="block sm:inline">{error}</span>
          </div>}

          <div className="space-y-4">
            {DENTAL_QUESTIONS.map((faq, index) => (
              <FaqItem
                key={index}
                question={faq.title}
                icon={faq.icon}
                answer={answers[index]}
                isOpen={activeIndex === index}
                isLoading={loadingStates[index]}
                onClick={() => handleItemClick(index)}
              />
            ))}
          </div>
        </main>
        <footer className="text-center text-sm text-slate-500 mt-8 pb-4">
            <p>&copy; {new Date().getFullYear()} Clínica Dental Sonrisa Brillante. Todos los derechos reservados.</p>
        </footer>
      </div>
    </div>
  );
};

export default App;
