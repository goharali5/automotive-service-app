
import { GoogleGenAI, Type } from "@google/genai";

// Fix: Initialized GoogleGenAI according to latest guidelines using named parameter and strictly process.env.API_KEY
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getDiagnosticReport = async (symptoms: string) => {
  // Fix: Upgraded to gemini-3-pro-preview for complex mechanical reasoning and expert diagnostics
  const model = 'gemini-3-pro-preview';
  
  const response = await ai.models.generateContent({
    model,
    contents: `Analyze these car symptoms: "${symptoms}". Provide a professional diagnostic report.`,
    config: {
      systemInstruction: `You are an expert master mechanic for Poet's Corner Automotive in Pleasant Hill. 
      Analyze customer symptoms and provide a JSON response. 
      Be professional, encouraging, and emphasize that they should come in for a hands-on inspection. 
      DO NOT give medical or financial advice. Focus ONLY on automotive diagnostics.`,
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          likelyCauses: {
            type: Type.ARRAY,
            items: { type: Type.STRING },
            description: "A list of potential mechanical issues based on the description."
          },
          recommendation: {
            type: Type.STRING,
            description: "What the customer should do next at Poet's Corner Automotive."
          },
          estimatedTime: {
            type: Type.STRING,
            description: "Rough estimation of how long a check-up might take (e.g. 30-60 mins)."
          },
          severity: {
            type: Type.STRING,
            enum: ["low", "medium", "high"],
            description: "The urgency of the repair."
          }
        },
        required: ["likelyCauses", "recommendation", "estimatedTime", "severity"]
      }
    }
  });

  // Fix: Properly access the response text using the property getter and handle potential undefined
  const jsonStr = response.text?.trim();
  if (!jsonStr) {
    throw new Error("Failed to receive a valid diagnostic response from the AI service.");
  }
  
  return JSON.parse(jsonStr);
};
