import { NextResponse } from 'next/server';

// Since the user doesn't have an API key, we'll simulate the Gemini API
// with a focused, rule-based responses for the Indian Election Context.
// If an API key is provided later, this can be swapped out for @google/genai

const INDIAN_ELECTION_KNOWLEDGE = [
  {
    keywords: ["register", "how to vote", "voter id", "apply", "epic"],
    response: "To register to vote in India, you must be an Indian citizen and 18 years or older on the qualifying date (usually Jan 1st). You can apply online through the Voter's Service Portal (voters.eci.gov.in) using Form 6. You will need proof of age, proof of residence, and a passport-sized photograph. Once processed, you will receive your Electors Photo Identity Card (EPIC)."
  },
  {
    keywords: ["who can vote", "eligibility", "age", "nri"],
    response: "Any Indian citizen who is 18 years of age or older on the qualifying date is eligible to vote. Non-Resident Indians (NRIs) can also vote but they must be present at their respective polling station in India on election day; postal ballots are not yet available for NRIs."
  },
  {
    keywords: ["where", "polling booth", "station", "find"],
    response: "You can find your polling booth on the Voter's Service Portal by searching your name in the Electoral Roll or by entering your EPIC number. Alternatively, you can use the 'Voter Helpline' mobile app provided by the Election Commission of India."
  },
  {
    keywords: ["process", "election day", "evm", "vvpat", "steps"],
    response: "On election day: 1. Go to your polling booth with your Voter ID or approved alternate ID. 2. A polling official will check your name on the voter list and your ID. 3. Another official will ink your finger, give you a slip, and take your signature. 4. Deposit the slip with the third official. 5. Proceed to the Electronic Voting Machine (EVM). Press the blue button next to your chosen candidate's symbol. A red light will glow, and you will hear a beep. 6. Check the VVPAT machine's glass window to verify a slip with your candidate's details printed on it."
  },
  {
    keywords: ["timelines", "when", "dates", "schedule"],
    response: "Election dates in India are announced by the Election Commission of India (ECI) through a Model Code of Conduct notification. General Elections for the Lok Sabha are held every 5 years, usually occurring in multiple phases across April and May. State assembly elections happen on their own 5-year cycles."
  },
  {
    keywords: ["nota", "none of the above"],
    response: "If you do not wish to vote for any of the candidates, you can choose NOTA (None of the Above) on the EVM. It is usually the last button on the machine."
  }
];

function generateSimulatedResponse(userMessage: string) {
  const lowerMessage = userMessage.toLowerCase();
  
  for (const item of INDIAN_ELECTION_KNOWLEDGE) {
    if (item.keywords.some(keyword => lowerMessage.includes(keyword))) {
      return item.response;
    }
  }

  return "That's a great question about the Indian election process! While I'm still learning, you can always find official and comprehensive information on the Election Commission of India's website (eci.gov.in) or the Voter's Service Portal (voters.eci.gov.in). Do you have questions about registering, polling booths, or the voting process?";
}

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    if (!message) {
      return NextResponse.json({ error: "Message is required" }, { status: 400 });
    }

    // Artificial delay to simulate network request
    await new Promise((resolve) => setTimeout(resolve, 800 + Math.random() * 500));

    const reply = generateSimulatedResponse(message);

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("API Route Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
