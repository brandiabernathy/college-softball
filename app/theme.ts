import { createTheme, MantineThemeOverride } from '@mantine/core';
import { Barlow_Condensed } from 'next/font/google';

const barlow_condensed = Barlow_Condensed({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });

const appTheme = (colorScheme: 'light' | 'dark'): MantineThemeOverride =>
  createTheme({
    // @ts-expect-error Mantine types missing colorScheme in theme override
    colorScheme,
    fontFamily: barlow_condensed.style.fontFamily,
    headings: {
      fontFamily: barlow_condensed.style.fontFamily,
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
      Button: {
        defaultProps: {
          size: 'lg',
        }
      }
    },
  });

export default appTheme;