'use client';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Header() {
    const pathname = usePathname();

    const [ menuOpen, setMenuOpen ] = useState(false);

	return (
		<header className="shadow-md bg-white flex flex-center">
			<div className="flex items-center justify-between container max-w-8xl py-5">
                <div className="flex items-center">
                    <Link href="/" className="relative w-8 h-8 lg:w-20 lg:h-20">
                        <Image
                            src="/ncaa-softball-logo.svg"
                            alt="NCAA Softball"
                            fill={true}
                            priority
                        />
                    </Link>
			        <h1 className="text-lg lg:text-4xl">2023 NCAA College Softball Tournament</h1>
                </div>
                <div className="md:hidden">
                    { !menuOpen && <Image
                        src="/menu.svg"
                        alt="Menu"
                        width={32}
                        height={32}
                        priority
                        onClick={() => setMenuOpen(prevState => !prevState)}
                    /> }
                    { menuOpen && <Image
                        src="/close.svg"
                        alt="Close"
                        width={32}
                        height={32}
                        priority
                        onClick={() => setMenuOpen(prevState => !prevState)}
                        className="relative z-20"
                    /> }
                </div>
                <nav className={"text-xl md:block " + (menuOpen ? 'fixed bg-slate-300 top-0 left-0 right-0 bottom-0 z-10 flex items-center justify-center text-4xl flex-col gap-8' : 'hidden')}>
                    <span className={pathname == '/regionals' ? 'underline text-royal-blue' : ''}><Link href="/regionals">Regionals</Link></span>
                    <span className={"md:ml-8 " + (pathname == '/supers' ? 'underline text-royal-blue' : '')}><Link href="/supers">Super Regionals</Link></span>
                </nav>
            </div>
		</header>
	)
}
