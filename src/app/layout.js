// src/app/layout.js
import "./globals.css";

export const metadata = {
  title: "To-Do List",
  description: "A simple to-do list app using Next.js and Tailwind CSS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
