import type { Metadata } from "next";
import { Heebo, Nunito, Pacifico } from "next/font/google";
import "./globals.css";

const heebo = Heebo({
  subsets: ["latin"],
  variable: "--font-heebo",
  display: "swap",
});

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
});

const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pacifico",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Restaurant template free",
  description:
    "Enjoy our delicious meals at Restaurant. Premium dining experience with master chefs and quality food.",
  keywords: "restaurant, food, dining, chef, menu, booking",
  openGraph: {
    title: "Restaurant template free",
    description:
      "Enjoy our delicious meals at Restaurant. Premium dining experience with master chefs and quality food.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${heebo.variable} ${nunito.variable} ${pacifico.variable}`}
    >
      <body
        suppressHydrationWarning
        className={`${heebo.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
