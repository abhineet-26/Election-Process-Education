import ChatInterface from "../components/ChatInterface";

export default function Home() {
  return (
    <main className="main-container">
      <header className="header">
        <h1>India Election Assistant</h1>
        <p>Your interactive guide to the voting process.</p>
      </header>
      <section className="chat-section">
        <ChatInterface />
      </section>
    </main>
  );
}
