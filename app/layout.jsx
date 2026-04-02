import "../styles/globals.css";

export const metadata = {
  title: "DSA Gemini Bot",
  description: "DSA chatbot powered by Google Gemini"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
