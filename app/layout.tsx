import '@mantine/core/styles.css';
import { ColorSchemeScript, mantineHtmlProps } from '@mantine/core';
import { Providers } from './Providers';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

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
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <Providers>
			    <Header />
			    {children}
			    <Footer />
        </Providers>
      </body>
    </html>
  );
}