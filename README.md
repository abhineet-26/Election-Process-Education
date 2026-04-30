# Election Process Education

An interactive assistant that helps first-time voters understand the Indian election process, timelines, and steps to vote.

## Overview

This project was built to provide a clean, accessible, and simple-to-understand conversational interface. It guides users through various aspects of the Indian election process, such as voter registration, locating polling booths, understanding EVMs, and knowing the election schedule.

## Chosen Vertical: First-Time Voter (India)

The assistant specifically targets individuals looking to vote for the first time in India. The knowledge base is designed to be supportive, providing clear, step-by-step information tailored to someone entirely new to the system.

## Approach and Logic

The project uses:
- **Next.js (App Router)**: For robust frontend delivery and secure API handling.
- **Vanilla CSS**: To build a bespoke, responsive, and visually appealing UI without relying on heavy styling frameworks.
- **Simulated AI Backend**: Since no external API key was provided, the backend (`src/app/api/chat/route.ts`) simulates an AI by using a pattern-matching algorithm against a predefined knowledge base of Indian Election rules. This demonstrates the architecture (client -> API route -> processing -> response) and is fully ready to be swapped out for a real LLM SDK (like `@google/genai`) by simply updating the API route logic once an API key is available.

## How it Works

1.  **User Interaction**: The user lands on the simple, clean interface and types a question into the chat input.
2.  **State Management**: React state handles the conversational flow and UI loading indicators.
3.  **API Communication**: The frontend sends the query to the `/api/chat` endpoint.
4.  **Processing**: The backend searches its knowledge base for keywords related to the Indian election process (e.g., "register", "EVM", "polling booth").
5.  **Response**: If a match is found, the relevant information is returned. Otherwise, a helpful fallback message is provided, directing the user to official sources.

## Assumptions Made

-   **Target Audience**: The primary users are individuals asking straightforward questions about the Indian voting process.
-   **API Constraints**: Due to the lack of an API key, the logic is rule-based but architected in a way that seamlessly supports integrating a real LLM in the future. The frontend is completely decoupled from how the backend generates the response.
-   **Aesthetics**: The design prioritizes clarity and simplicity over complex layouts to remain accessible to all categories of people, as requested.

## Running Locally

1.  `npm install`
2.  `npm run dev`
3.  Open `http://localhost:3000`

## Running Tests

`npm test` to run the Jest unit tests for the Chat Interface component.
