'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { Anchor, Box, Container, Flex, Image, Title, Tabs } from '@mantine/core';

export default function Header() {
  const router = useRouter();
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
          <Tabs value={pathname as string} onChange={value => router.push(`${value}`)}>
            <Tabs.List>
              <Tabs.Tab value="/regionals">Regionals</Tabs.Tab>
              <Tabs.Tab value="/supers">Super Regionals</Tabs.Tab>
            </Tabs.List>
          </Tabs>
        </Flex>
      {/* </Container>, */}
    </Flex>
	)
}
