'use client';

import { Flex, Image, Text } from '@mantine/core';

export default function Footer() {
	return (
		<Flex component="footer" align="center" justify="center" direction="column" bg="blue" h={300}>
			<Text c="white">Powered by</Text>
			<Image src="/espn-logo.svg" alt="ESPN" w={50} />
		</Flex>
	)
}
