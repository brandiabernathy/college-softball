import { createTheme, MantineThemeOverride } from '@mantine/core';

const appTheme = (colorScheme: 'light' | 'dark'): MantineThemeOverride =>
  createTheme({
    // @ts-expect-error Mantine types missing colorScheme in theme override
    colorScheme,
    fontFamily: 'Barlow Condensed, sans-serif',
    fontWeight: 400,
    headings: {
      fontFamily: 'Barlow Condensed, sans-serif',
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
      Text: {
        defaultProps: {
          size: 'lg',
        },
      },
    },
  });

export default appTheme;