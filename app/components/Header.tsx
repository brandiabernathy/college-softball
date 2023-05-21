'use strict';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Header() {
    const pathname = usePathname();
	return (
		<header className="shadow-md bg-white flex flex-center">
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
                <nav className="text-xl">
                    <span className={pathname == '/regionals' ? 'underline text-blue-900' : ''}><Link href="/regionals">Regionals</Link></span>
                    <span className={"ml-2.5 " + (pathname == '/supers' ? 'underline text-blue-900' : '')}><Link href="/supers">Super Regionals</Link></span>
                    <span className={"ml-2.5 " + (pathname == '/wcws' ? 'underline text-blue-900' : '')}><Link href="/wcws">WCWS</Link></span>
                </nav>
            </div>
		</header>
	)
}
