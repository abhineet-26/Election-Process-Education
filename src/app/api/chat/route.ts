import { NextResponse } from 'next/server';
import { GoogleGenAI } from '@google/genai';

// Initialize the SDK. It will automatically pick up process.env.GEMINI_API_KEY
// We wrap it in a try-catch or conditional to handle the case where the key isn't provided yet.
let ai: GoogleGenAI | null = null;
try {
  ai = new GoogleGenAI({});
} catch (error) {
  console.warn("Gemini API key not found. The chatbot will return an error message to the user.");
}

const SYSTEM_PROMPT = `
You are the ultimate Indian Election Process Assistant. 
You are an expert on the Election Commission of India (ECI), the Constitution, the Model Code of Conduct, Electronic Voting Machines (EVMs), and the entire process of voting in India.
Your goal is to answer ANY question a first-time voter or citizen has about the election process accurately, neutrally, and clearly.

Key Guidelines:
1. Be encouraging, accessible, and polite.
2. Provide factual information based on ECI rules.
3. If asked about a specific political party or candidate, remain strictly neutral and objective. Do NOT endorse or criticize any party.
4. Explain acronyms (like EVM, VVPAT, EPIC, NOTA) simply.
5. If you do not know the answer, advise the user to visit the official ECI website (eci.gov.in).
6. Format your responses using markdown for readability (bullet points, bold text).
`;

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    if (!ai) {
      return NextResponse.json({
        content: "Hello! I am ready to be your ultimate election assistant. However, the site administrator needs to add a **Gemini API Key** to the `.env.local` file for me to work! \n\nYou can get one for free at [Google AI Studio](https://aistudio.google.com/)."
      });
    }

    // Convert the generic message format to the Gemini SDK format
    const formattedMessages = messages.map((msg: any) => ({
      role: msg.role === 'user' ? 'user' : 'model',
      parts: [{ text: msg.content }]
    }));

    // Add the system prompt as the first message from the user, to set context.
    // In newer SDKs, there's a specific systemInstruction parameter.
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: formattedMessages,
      config: {
        systemInstruction: SYSTEM_PROMPT,
        temperature: 0.2, // Keep it factual
      }
    });

    return NextResponse.json({ content: response.text });
  } catch (error: any) {
    console.error('Chat API Error:', error);
    return NextResponse.json(
      { error: 'Failed to process chat request' },
      { status: 500 }
    );
  }
}
