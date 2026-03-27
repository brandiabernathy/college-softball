import { createTheme, MantineThemeOverride } from '@mantine/core';

const appTheme = (colorScheme: 'light' | 'dark'): MantineThemeOverride =>
  createTheme({
    // @ts-expect-error Mantine types missing colorScheme in theme override
    colorScheme,
    primaryColor: 'brand',
    fontFamily: 'Inter, sans-serif',
    headings: {
      fontFamily: 'Inter, sans-serif',
    },
    breakpoints: {
      xs: '30em',
      sm: '48em',
      md: '64em',
      lg: '74em',
      xl: '90em',
    },
    spacing: {
      xxs: `calc(0.25rem * 1)`,
      '2xl': '60px',
    },
    colors: {
    },
    components: {
    },
  });

export default appTheme;