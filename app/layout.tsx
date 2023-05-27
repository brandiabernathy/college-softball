import './globals.css';
import { Barlow_Condensed } from 'next/font/google';
import Header from '../components/Header';
import Footer from '../components/Footer';

const barlow_condensed = Barlow_Condensed({ subsets: ['latin'], weight: ['400', '600'] });

export const metadata = {
	title: '2023 NCAA Softball Tournament',
	description: '',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className={"min-h-screen " + (barlow_condensed.className)}>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	)
}
