
import React from 'react';

const ToothIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-cyan-500" viewBox="0 0 20 20" fill="currentColor">
    <path d="M10 3.5a.5.5 0 01.5.5v1.438c.51.11 1.002.313 1.464.612l1.192-.917a.5.5 0 11.608.79l-1.192.917a4.5 4.5 0 011.83 5.432l.917 1.192a.5.5 0 11-.79.608l-.917-1.192a4.5 4.5 0 01-5.432 1.83l-1.192.917a.5.5 0 11-.608-.79l1.192-.917a4.5 4.5 0 01-1.83-5.432l-.917-1.192a.5.5 0 01.79-.608l.917 1.192a4.5 4.5 0 015.432-1.83l.917-1.192a.5.5 0 01.79.608l-.917 1.192A4.482 4.482 0 0112.5 5.438V4a.5.5 0 01.5-.5h-3a.5.5 0 01-.5-.5V4a.5.5 0 01-.5-.5zM6.623 9.41a3.5 3.5 0 104.95-4.95 3.5 3.5 0 00-4.95 4.95z" clipRule="evenodd" />
    <path d="M4.5 10.5a.5.5 0 01.5-.5h1.438a4.5 4.5 0 015.432 1.83l1.192-.917a.5.5 0 11.608.79l-1.192.917a4.5 4.5 0 01-1.83 5.432l-1.192-.917a.5.5 0 11-.608-.79l1.192-.917a3.5 3.5 0 00-4.95-4.95l-.917 1.192a.5.5 0 01-.79-.608l.917-1.192A4.482 4.482 0 015.938 10H4.5a.5.5 0 01-.5-.5z" />
  </svg>
);


const Header: React.FC = () => {
  return (
    <header className="flex flex-col sm:flex-row items-center justify-center sm:justify-between text-center sm:text-left p-4 rounded-2xl bg-white/60 shadow-md backdrop-blur-sm">
      <div className="flex items-center space-x-4">
        <ToothIcon />
        <div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-800">
            Clínica Dental Sonrisa Brillante
          </h1>
          <p className="text-cyan-600 font-medium mt-1">
            Su Asistente Virtual para resolver dudas
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
