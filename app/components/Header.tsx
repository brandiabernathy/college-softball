import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
	return (
		<header className="shadow-md bg-white flex flex-center shadow-black">
			<div className="flex items-center justify-between container mx-auto py-5">
                <div className="flex items-center">
                    <Link href="/">
                        <Image
                            src="/ncaa-softball-logo.svg"
                            alt="NCAA Softball"
                            width={80}
                            height={80}
                            priority
                        />
                    </Link>
			        <h1 className="text-4xl">2023 NCAA College Softball Tournament</h1>
                </div>
                <div className="text-xl">
                    <span><Link href="/regionals">Regionals</Link></span>
                    <span className="ml-2.5">Super Regionals</span>
                    <span className="ml-2.5">WCWS</span>
                </div>
            </div>
		</header>
	)
}
