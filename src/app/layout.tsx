import type { Metadata } from "next";
import { ThemeProvider } from "../components/ThemeProvider";
import NavBar from "../components/NavBar";
import ThemeToggle from "../components/ThemeToggle";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "India Election Assistant",
  description: "An interactive guide to the Indian election process for first-time voters.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="data-theme" defaultTheme="system" enableSystem>
          <div className="mesh-background">
            <div className="mesh-blob blob-1"></div>
            <div className="mesh-blob blob-2"></div>
            <div className="mesh-blob blob-3"></div>
            <div className="dot-grid"></div>
          </div>
          <ThemeToggle />
          <NavBar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
