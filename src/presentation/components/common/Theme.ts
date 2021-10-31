import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  styles: {
    global: {
      'html, body': {
        fontSize: 'md',
        fontWight: 'normal',
        color: 'black',
      },
    },
  },
  colors: {
    transparent: 'transparent',
    personalityGradientMobile: 'linear-gradient(180deg, #FFFFFF 10%, #F6F7F9 60%)',
    personalityGradientDesktop: 'radial-gradient(40% 372% at 32% 48%, #FFFFFF 0%, #FFFFFF 36%, #F6F7F9 100%)',
    star: '#FDD835',
    primary: {
      50: '#E0EEFA',
      100: '#B6D8F5',
      200: '#5DA6E5',
      300: '#1D8BD9',
      400: '#1B79CC',
      500: '#0068B4',
      600: '#1256A2',
      700: '#0E4A8C',
      800: '#093B73',
      900: '#07365E',
    },
    deal: {
      50: '#E9E7F6',
      100: '#C9C4E9',
      200: '#A69DDB',
      300: '#8475CD',
      400: '#6C57C2',
      500: '#533AB7',
      600: '#412C9A',
      700: '#372779',
      800: '#251C4D',
      900: '#372779',
    },
    warning: {
      50: '#FFEBEE',
      100: '#FFCDD5',
      200: '#EF9AA8',
      300: '#E57386',
      400: '#F4667D',
      500: '#F34A66',
      600: '#CD2641',
      700: '#A31930',
      800: '#871E32',
      900: '#500F15',
    },
    gray: {
      50: '#F6F7F9',
      100: '#F0F2F5',
      200: '#E1E6ED',
      300: '#C7CED7',
      400: '#A3AFBF',
      500: '#7C8DA3',
      600: '#6D7B8F',
      700: '#525E6D',
      800: '#37414F',
      900: '#031B30',
    },
    brand: {
      50: 'linear-gradient(225deg, #00928E 0%, #2363A9 95.01%)',
      100: 'linear-gradient(225deg, #00928E 0%, #2363A9 95.01%)',
      200: 'linear-gradient(225deg, #00928E 0%, #2363A9 95.01%)',
      300: 'linear-gradient(225deg, #0F6A68 0%, #234C79 95.01%)',
      400: 'linear-gradient(225deg, #00928E 0%, #2363A9 95.01%)',
      500: 'linear-gradient(225deg, #00928E 0%, #2363A9 95.01%)',
      600: 'linear-gradient(225deg, #0F6A68 0%, #234C79 95.01%)',
      700: 'linear-gradient(225deg, #0F6A68 0%, #234C79 95.01%)',
      800: 'linear-gradient(225deg, #0F6A68 0%, #234C79 95.01%)',
      900: 'linear-gradient(225deg, #0F6A68 0%, #234C79 95.01%)',
    },
  },
  fonts: {
    body: 'Roboto, sans-serif',
  },
  fontSizes: {
    xs: '12px',
    sm: '14px',
    md: '16px',
    lg: '18px',
    xl: '20px',
    '2xl': '24px',
    '3xl': '28px',
    '4xl': '36px',
    '5xl': '48px',
    '6xl': '64px',
  },
  fontWeights: {
    normal: 400,
    medium: 500,
    bold: 700,
  },
  shadows: {
    xs: '0px 0px 1px rgba(48, 49, 51, 0.05), 0px 1px 3px rgba(48, 49, 51, 0.1)',
    sm: '0px 0px 1px rgba(48, 49, 51, 0.05), 0px 2px 4px rgba(48, 49, 51, 0.1)',
    md: '0px 0px 1px rgba(48, 49, 51, 0.05), 0px 4px 8px rgba(48, 49, 51, 0.1)',
    lg: '0px 0px 1px rgba(48, 49, 51, 0.05), 0px 8px 16px rgba(48, 49, 51, 0.1)',
    xl: '0px 0px 1px rgba(48, 49, 51, 0.05), 0px 16px 24px rgba(48, 49, 51, 0.1)',
  },
  components: {
    Tag: {
      variants: {
        radius: {
          rounded: 'radius',
        },
      },
    },
    Divider: {
      variants: {
        bold: {
          rounded: 'full',
          borderBottomWidth: 3,
          borderStyle: 'solid',
        },
      },
    },
  },
});
