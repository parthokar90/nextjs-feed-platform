import { Poppins } from 'next/font/google';
import ToasterProvider from '@/components/ui/ToasterProvider';

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// Global CSS
import './globals.css';

// Main CSS
import '../styles/main.css';

// Responsive CSS
import '../styles/responsive.css';

const poppins = Poppins({
  weight: ['100', '300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: 'Buddy Script',
  description: 'Social Feed Platform',
  icons: {
    icon: '/assets/images/logo-copy.svg',   // ← favicon
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.className}>
      <body>
        {children}
        <ToasterProvider />
      </body>
    </html>
  );
}