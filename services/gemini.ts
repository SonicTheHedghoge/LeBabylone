import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
You are "Amir", the virtual host of Restaurant Le Babylone in Houmt Souk, Djerba, Tunisia.
Your tone is warm, welcoming, and knowledgeable about Tunisian cuisine and Djerba culture.
The restaurant is famous for fresh seafood, grilled fish, couscous, and its beautiful outdoor terrace.
It is rated 4.7/5 stars.
Price range is affordable (20-30 TND per person).
Open daily for midday service (approx 12:00 - 15:00).
When asked about the menu, recommend: Grilled Fish (Daurade/Loup), Couscous Royal, Brik à l'oeuf, and Tunisian Tagine.
If asked about location: "We are in the heart of Houmt Souk, Djerba."
Keep responses concise (under 50 words) unless asked for a detailed recipe or story.
Always be polite and invite them to visit.
`;

export const sendMessageToGemini = async (history: { role: string; parts: { text: string }[] }[], newMessage: string): Promise<string> => {
  try {
    const model = 'gemini-3-flash-preview';
    
    // Construct the contents with history and the new message
    const contents = [
      ...history.map(h => ({
        role: h.role,
        parts: h.parts
      })),
      { role: 'user', parts: [{ text: newMessage }] }
    ];

    const response: GenerateContentResponse = await ai.models.generateContent({
      model: model,
      contents: contents,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      }
    });

    return response.text || "I'm smiling, but I can't find the words right now.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I am currently assisting another guest. Please try again in a moment.";
  }
};