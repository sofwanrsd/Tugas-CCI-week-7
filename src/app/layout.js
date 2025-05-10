// src/app/layout.js
import "./globals.css";

export const metadata = {
  title: "To-Do List",
  description: "Tugas CCI dengan Next.js and Tailwind CSS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
