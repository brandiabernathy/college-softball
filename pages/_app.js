
import '../app/globals.css';
import { Barlow_Condensed } from 'next/font/google';

const barlow_condensed = Barlow_Condensed({ subsets: ['latin'], weight: ['400', '600'] });

export default function App({ Component, pageProps }) {
    return (
        <main className={barlow_condensed.className}><Component {...pageProps} /></main>
    );
}
