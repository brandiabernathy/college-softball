'use client';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {

	return (
		<footer className="bg-royal-blue py-24">
			<div className="container max-w-8xl py-5 text-white flex justify-center">
				Powered by
				<Image
					src="/espn-logo.svg"
					alt="ESPN"
					width={50}
					height={25}
					className="ml-2"
				/>
            </div>
		</footer>
	)
}
