// Global css
import "./globals.css";
// Google Fonts
import { Roboto_Condensed, Bangers, Quicksand } from "next/font/google";

import CardProvider from "@/CreateContex/CreateContex";
import CartMobileIcon from "@/components/CartMobileIcon";
import Nav from "@/components/Nav";
import CartMobile from "@/components/CartMobile";
import CartDesktop from "@/components/CartDesktop";
import Footer from "@/components/Footer";
const Banger = Bangers({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-Banger",
});

const QuickSand = Quicksand({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-QuickSand",
});

const RobotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-RobotoCondensed",
});

export const metadata = {
  title: "Burger Land",
  description: "Next years Burger Land",
};

export default function RootLayout({ children }) {
  return (
    <CardProvider>
      <html lang="tr">
        <body
          className={`${QuickSand.variable} ${RobotoCondensed.variable} ${Banger.variable}`}
        >
          <Nav />
          <CartMobileIcon />
          <CartMobile />
          {children}
          <CartDesktop />
          <Footer />
        </body>
      </html>
    </CardProvider>
  );
}
