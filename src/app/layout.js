import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import RevealController from "@/components/RevealController";

export const metadata = {
  title: "Agriturismo Fratelli Oddone — Un'avventura lunga trent'anni",
  description:
    "Dal 1996 a Bardineto: 93 ettari di boschi e pascoli, cucina di territorio, ospitalità e avventura wild nel cuore della Liguria.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Nav />
        {children}
        <Footer />
        <RevealController />
      </body>
    </html>
  );
}
