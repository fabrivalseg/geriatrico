import { Montserrat } from 'next/font/google';
import localFont from 'next/font/local';

export const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['400', '700'],
    variable: '--font-montserrat',
    display: 'swap',
  });

export const theSeasons = localFont({
  src: './TheSeasons-Regular.otf',
  variable: '--font-the-seasons',
  display: 'swap',
});

export const aviano = localFont({
  src: './Aviano-Regular.otf',
  variable: '--font-aviano',
  display: 'swap',
});