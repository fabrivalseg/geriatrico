import { Montserrat } from 'next/font/google';
import localFont from 'next/font/local';

export const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['400', '700'],
    variable: '--font-montserrat',
    display: 'swap',
  });

export const theSeasons = localFont({
  src: './TheSeasons-Regular.woff2',
  variable: '--font-the-seasons',
  display: 'swap',
});

export const aviano = localFont({
  src: './Aviano-Regular.woff2',
  variable: '--font-aviano',
  display: 'swap',
});