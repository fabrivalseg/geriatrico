import "./globals.css";
import { montserrat,theSeasons, aviano } from "./fonts/fonts";
import Header from "./_header/Header";
import Footer from "./_footer/Footer";

export const metadata = {
  title: "Residencia Geriátrica | Cuidado y atención para adultos mayores | Geriatrico en Rio Segundo, Cordoba, Argentina",
  description:
    "Ofrecemos servicios de cuidado integral para adultos mayores en un ambiente acogedor y seguro. Atención médica 24/7, actividades recreativas y más.",
  keywords:
    "residencia geriátrica, cuidado de adultos mayores, hogar de ancianos, atención médica para mayores, residencia tercera edad, Residencia, Geriátrica, Cuidado, Atención, Adultos, Mayores, Geriátrico, Cordoba, Rio Segundo, Argentina",
  openGraph: {
    title: "Residencia Geriátrica | Cuidado y atención para adultos mayores",
    description:
      "Ofrecemos servicios de cuidado integral para adultos mayores en un ambiente acogedor y seguro. Atención médica 24/7, actividades recreativas y más.",
    url: "https://www.residenciageriatrica.com",
    siteName: "Residencia Geriátrica",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Residencia Geriátrica",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Residencia Geriátrica | Cuidado y atención para adultos mayores",
    description:
      "Ofrecemos servicios de cuidado integral para adultos mayores en un ambiente acogedor y seguro. Atención médica 24/7, actividades recreativas y más.",
    images: ["/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.residenciageriatrica.com",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${theSeasons.variable} ${aviano.variable} ${montserrat.variable}`}>
      <head>
        <link rel="icon" type="image/x-icon" href="/imagenes/logo/logo.png" />
      </head>
      <body>
        <Header /> 
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
