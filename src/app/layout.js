import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Budget App",
  description: "Simple budgeting for salespeople with chaotic income.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <nav
          style={{
            padding: "1rem",
            background: "#f5f5f5",
            borderBottom: "1px solid #ddd",
            display: "flex",
            gap: "1rem",
            fontSize: "0.95rem",
            fontWeight: "500",
          }}
        >
          <Link href="/">🏠 Home</Link>
          <Link href="/retirement">📈 Retirement</Link>
          <Link href="/spreadsheet">📊 Spreadsheet</Link>
        </nav>
        <main style={{ padding: "2rem" }}>{children}</main>
      </body>
    </html>
  );
}
