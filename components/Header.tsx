'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Anchor, Box, Container, Flex, Image, Title, Tabs } from '@mantine/core';

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

	return (
    <Flex component="header" align="center" bg="white" p="lg" justify="space-between">
      {/* <Container strategy="grid"> */}
        <Flex align="center">
          <Anchor component={Link} href="/">
            <Image
                src="/ncaa-softball-logo.svg"
                alt="NCAA Softball"
                w={70}
            />
          </Anchor>
          <Title>NCAA College Softball Tournament</Title>
        </Flex>

        <Flex component="nav">
          <Tabs>
            <Tabs.List>
              <Tabs.Tab value="/regionals">Regionals</Tabs.Tab>
              <Tabs.Tab value="/supers">Super Regionals</Tabs.Tab>
            </Tabs.List>
          </Tabs>
        </Flex>
      {/* </Container>, */}
    </Flex>
		// <header className="shadow-md bg-white flex flex-center">
		// 	<div className="flex items-center justify-between container max-w-8xl py-5">
        //         <div className="flex items-center">
        //             <Link href="/" className="relative w-8 h-8 lg:w-20 lg:h-20">
        //                 <Image
        //                     src="/ncaa-softball-logo.svg"
        //                     alt="NCAA Softball"
        //                     fill={true}
        //                     priority
        //                 />
        //             </Link>
		// 	        <h1 className="text-lg lg:text-4xl">2024 NCAA College Softball Tournament</h1>
        //         </div>
        //         <div className="md:hidden">
        //             { !menuOpen && <Image
        //                 src="/menu.svg"
        //                 alt="Menu"
        //                 width={32}
        //                 height={32}
        //                 priority
        //                 onClick={() => setMenuOpen(prevState => !prevState)}
        //             /> }
        //             { menuOpen && <Image
        //                 src="/close.svg"
        //                 alt="Close"
        //                 width={32}
        //                 height={32}
        //                 priority
        //                 onClick={() => setMenuOpen(prevState => !prevState)}
        //                 className="relative z-20"
        //             /> }
        //         </div>
        //         <nav className={"text-xl md:block " + (menuOpen ? 'fixed bg-slate-300 top-0 left-0 right-0 bottom-0 z-10 flex items-center justify-center text-5xl flex-col gap-8' : 'hidden')}>
        //             <span className={pathname == '/regionals' ? 'underline text-royal-blue' : ''}><Link href="/regionals" onClick={() => setMenuOpen(false)}>Regionals</Link></span>
        //             <span className={"md:ml-8 " + (pathname == '/supers' ? 'underline text-royal-blue' : '')}><Link href="/supers" onClick={() => setMenuOpen(false)}>Super Regionals</Link></span>
        //         </nav>
        //     </div>
		// </header>
	)
}
