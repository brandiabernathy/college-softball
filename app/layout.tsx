import '@mantine/core/styles.css';
import { ColorSchemeScript, MantineProvider, mantineHtmlProps } from '@mantine/core';
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
        <MantineProvider>
			<Header />
			{children}
			<Footer />
		</MantineProvider>
      </body>
    </html>
  );
}