import type { Metadata } from "next";
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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
