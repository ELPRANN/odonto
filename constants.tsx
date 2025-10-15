
import React from 'react';

const CleanIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-12v4m-2-2h4m5 4h.01M15 20h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const WhiteningIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-12v4m-2-2h4m5 4h.01M15 20h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
     <path strokeLinecap="round" strokeLinejoin="round" d="M22 10.5h-4.521c-.464 0-.897.168-1.239.465l-2.48 2.067a1.5 1.5 0 00-.001 2.466l2.48 2.067c.342.297.775.465 1.239.465H22" />
     <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 12.75l-4.5 4.5" />
     <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 8.25l-4.5-4.5" />
  </svg>
);

const VeneersIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path d="M5.583 3.523c.347-.44.86-.723 1.417-.723h10c.557 0 1.07.283 1.417.723l1.833 2.308a1.5 1.5 0 010 1.938l-1.833 2.308c-.347.44-.86.723-1.417.723h-10c-.557 0-1.07-.283-1.417-.723L3.75 7.769a1.5 1.5 0 010-1.938l1.833-2.308z" />
    <path d="M5.583 12.773c.347-.44.86-.723 1.417-.723h10c.557 0 1.07.283 1.417.723l1.833 2.308a1.5 1.5 0 010 1.938l-1.833 2.308c-.347.44-.86.723-1.417.723h-10c-.557 0-1.07-.283-1.417-.723L3.75 17.019a1.5 1.5 0 010-1.938l1.833-2.308z" />
  </svg>
);

const ImplantIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 11v4" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 13h4" />
  </svg>
);

const OrthoIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
  </svg>
);

const ExtractionIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547a2 2 0 00-.547 1.806l.477 2.387a6 6 0 00.517 3.86l.158.318a6 6 0 003.86.517l2.387.477a2 2 0 001.806-.547a2 2 0 00.547-1.806l-.477-2.387a6 6 0 00-.517-3.86l-.158-.318a6 6 0 00-.517-3.86z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 10.25l-4.5 4.5m0-4.5l4.5 4.5" />
  </svg>
);

export const DENTAL_QUESTIONS = [
  { title: "¿Qué es una limpieza dental y por qué es importante?", icon: <CleanIcon /> },
  { title: "¿En qué consiste un blanqueamiento dental?", icon: <WhiteningIcon /> },
  { title: "¿Qué son las carillas dentales y para qué sirven?", icon: <VeneersIcon /> },
  { title: "¿Necesito un implante dental? ¿Cómo es el proceso?", icon: <ImplantIcon /> },
  { title: "¿Qué es la ortodoncia y cuáles son los tipos de brackets?", icon: <OrthoIcon /> },
  { title: "¿Duele la extracción de una muela del juicio?", icon: <ExtractionIcon /> },
];
