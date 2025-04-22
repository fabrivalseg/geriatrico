import "./globals.css";
import { montserrat,theSeasons, aviano } from "./fonts/fonts";
import Header from "./_header/Header";
import Footer from "./_footer/Footer";

export const metadata = {
  title: "Residencia Senior | Cuidado y atención para adultos mayores | Geriatrico en Rio Segundo, Cordoba, Argentina",
  description:
    "Ofrecemos servicios de cuidado integral para adultos mayores en un ambiente acogedor y seguro. Atención médica 24/7, actividades recreativas y más.",
  keywords:
    "residencia Senior, cuidado de adultos mayores, hogar de ancianos, atención médica para mayores, residencia tercera edad, Residencia, Geriátrica, Cuidado, Atención, Adultos, Mayores, Geriátrico, Cordoba, Rio Segundo, Argentina",
  openGraph: {
    title: "Residencia Senior | Cuidado y atención para adultos mayores",
    description:
      "Ofrecemos servicios de cuidado integral para adultos mayores en un ambiente acogedor y seguro. Atención médica 24/7, actividades recreativas y más.",
    url: "https://www.calidia.com.ar",
    siteName: "Calidia Residencia senior",
    images: [
      {
        url: "/logo/calidia_name_blanco.jpg",
        width: 1200,
        height: 630,
        alt: "Calidia Residencia senior",
      },
    ],
    locale: "es_ES",
    type: "website",
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
    canonical: "https://www.calidia.com.ar",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${theSeasons.variable} ${aviano.variable} ${montserrat.variable}`}>
      <head>
        <link rel="icon" type="image/x-icon" href="./imagenes/logo/favicon.ico" />
      </head>
      <body>
        <img src="https://tracker.metricool.com/c3po.jpg?hash=1d898470c208bacbcaf6a37503e240ea"/>
        <Header /> 
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
