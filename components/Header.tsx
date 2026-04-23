'use client';
import { useState } from 'react';
import { useAppSelector } from '@/app/store';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { Anchor, Box, Container, Flex, Image, Title } from '@mantine/core';

export default function Header() {
  const { year } = useAppSelector(state => state.app);
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

	return (
    <Container size={1480} py="lg">
      <Flex component="header" align="center" bg="white" justify="space-between">
          <Flex align="center">
            <Anchor component={Link} href="/">
              <Image
                  src="/ncaa-softball-logo.svg"
                  alt="NCAA Softball"
                  w={70}
              />
            </Anchor>
            <Title fw={300}>NCAA College Softball Tournament</Title>
          </Flex>

          <Flex component="nav" gap="lg">
            <Anchor component={Link} href="/regionals" c={pathname == '/regionals' ? 'blue' : 'gray.7'} size="xl">Regionals</Anchor>
            <Anchor component={Link} href="/supers" c={pathname == '/supers' ? 'blue' : 'gray.7'} size="xl">Super Regionals</Anchor>
          </Flex>
      </Flex>
    </Container>
	)
}
