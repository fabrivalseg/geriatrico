import "./globals.css";
import Header from "./_header/Header";
import Footer from "./_footer/Footer";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
