import "./globals.css";
import { Almarai } from 'next/font/google';

const almarai = Almarai({
  subsets: ['latin'],
  weight: ['400', '700'], // Escolha os pesos que deseja usar
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`bg-zinc-500 antialiased w-screen h-screen flex justify-center ${almarai.className}`}>
        <div className="max-w-md w-full">
          {children}
        </div>
      </body>
    </html>
  );
}
