
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  throw new Error("La variable de entorno API_KEY no está configurada.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

const systemInstruction = `
Eres un asistente dental virtual amigable y profesional en la recepción de una clínica dental.
Tu tarea es explicar procedimientos y responder preguntas de los pacientes de una manera muy clara, sencilla y tranquilizadora.
Evita el lenguaje técnico complicado. Usa analogías simples si es posible.
Tu objetivo es que el paciente se sienta informado y cómodo, no abrumado.
La respuesta debe estar en español y formateada en Markdown para una fácil lectura, usando encabezados, listas y negritas cuando sea apropiado.
No saludes ni te despidas, solo proporciona la explicación directa a la pregunta.
`;

export const getDentalInfo = async (question: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: `Por favor, explica lo siguiente: ${question}`,
        config: {
          systemInstruction: systemInstruction,
          temperature: 0.5,
        }
    });

    return response.text;
  } catch (error) {
    console.error("Error en la llamada a la API de Gemini:", error);
    throw new Error("No se pudo comunicar con el servicio de IA.");
  }
};
