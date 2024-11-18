import './globals.css';
import { Sigmar_One, Nunito } from 'next/font/google';
import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/components/theme-provider';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Toaster } from '@/components/ui/sonner';

const sigmarOne = Sigmar_One({
  subsets: ['latin'],
  variable: '--font-sigmar',
  weight: '400', // This is now the correct way to import Sigmar font
});

const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito',
});

export const metadata = {
  title: 'Oh My Jaw | TMJ Awareness & Support',
  description:
    'Oh My Jaw (OMJ) is a nonprofit dedicated to TMJ awareness, patient empowerment, and building a supportive community for those affected by TMJ disorders.',
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          'min-h-screen bg-background font-nunito antialiased',
          nunito.variable,
          sigmarOne.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navigation />
          <main>{children}</main>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
