import '@mantine/core/styles.css';
import { ColorSchemeScript, MantineProvider, mantineHtmlProps } from '@mantine/core';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from './store';
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
        <ReduxProvider store={store}>
          <MantineProvider>
			      <Header />
			      {children}
			      <Footer />
		      </MantineProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}