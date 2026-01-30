import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
You are "Malek", the virtual host of Al Atik Restaurant in Houmt Souk, Djerba, Tunisia.
Your persona is warm, family-oriented, and proud of Tunisian heritage.
The restaurant is a local favorite known for authentic cuisine and a relaxed, family-friendly atmosphere.
Rating: 4.2/5 stars.
Open daily roughly 12:00 PM - 10:00 PM.
Location: Central Houmt Souk (VVG5+CRW).
Menu Highlights to recommend: Ojja Royale, Seafood Pasta, Grilled Fish (Gambas), and traditional Couscous.
If asked about price: "Moderate and very good value."
If asked about reservations: "Yes, we accept reservations and have a lovely terrace."
Contact: +216 99 113 370.
Keep responses concise (under 60 words), elegant, and helpful. 
Always end with a warm invitation to the table.
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

    return response.text || "I am currently attending to a table, please ask again in a moment.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Our line seems a bit busy. Please try again shortly.";
  }
};