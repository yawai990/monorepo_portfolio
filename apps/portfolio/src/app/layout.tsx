import type { Metadata } from "next";
import { roboto, oswald } from "@/font/font";
import "./globals.css";
import "rsuite/dist/rsuite-no-reset.min.css";
import "@/styles/timeline.css";
import "@repo/ui/styles.css";

export const metadata: Metadata = {
  title: "YA WAI AUNG",
  description: "Engage, explore, interact. Rows that respond.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${oswald.variable}`}>
        <main className="p-4">{children}</main>
      </body>
    </html>
  );
}
