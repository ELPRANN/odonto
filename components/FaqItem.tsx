
import React from 'react';

interface FaqItemProps {
  question: string;
  answer?: string;
  icon: React.ReactNode;
  isOpen: boolean;
  isLoading: boolean;
  onClick: () => void;
}

const LoadingSpinner: React.FC = () => (
  <div className="flex justify-center items-center py-4">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-500"></div>
  </div>
);

const FaqItem: React.FC<FaqItemProps> = ({ question, answer, icon, isOpen, isLoading, onClick }) => {
  return (
    <div className="border border-slate-200 rounded-lg overflow-hidden transition-all duration-300 ease-in-out hover:shadow-lg focus-within:shadow-lg">
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center p-4 text-left bg-white focus:outline-none focus:ring-2 focus:ring-cyan-300"
        aria-expanded={isOpen}
      >
        <span className="flex items-center">
            <span className="text-cyan-500 mr-4">{icon}</span>
            <span className="font-semibold text-slate-700">{question}</span>
        </span>
        <span className="transform transition-transform duration-300 text-cyan-500" style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>
      <div
        className="overflow-hidden transition-all duration-500 ease-in-out"
        style={{ maxHeight: isOpen ? '1000px' : '0px' }}
      >
        <div className="p-5 bg-slate-50 border-t border-slate-200">
          {isLoading && <LoadingSpinner />}
          {answer && !isLoading && (
            <div
              className="prose prose-sm sm:prose-base max-w-none text-slate-600"
              dangerouslySetInnerHTML={{ __html: answer.replace(/\n/g, '<br />') }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default FaqItem;
