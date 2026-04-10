import '@mantine/core/styles.css';
import { ColorSchemeScript, mantineHtmlProps, Box, Container } from '@mantine/core';
import { Providers } from './Providers';
import { Barlow_Condensed } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const barlow_condensed = Barlow_Condensed({ subsets: ['latin'], weight: ['400', '600'] });

export const metadata = {
	title: 'NCAA Softball Tournament',
	description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" {...mantineHtmlProps} className={barlow_condensed.className}>
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <Providers>
			    <Header />
          <Box bg="gray.1">
            <Container size={1480} py="xl">
              {children}
            </Container>
          </Box>
			    <Footer />
        </Providers>
      </body>
    </html>
  );
}