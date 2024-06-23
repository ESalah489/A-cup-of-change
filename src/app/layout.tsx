import type { Metadata } from 'next';
import './globals.scss';
import { Navbar } from './components/navbar/navbar';
import { Footer } from './components/Footer/Footer';

export const metadata: Metadata = {
  title: 'A Cup of Change',
  description: 'A cup of change',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div className="content">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
