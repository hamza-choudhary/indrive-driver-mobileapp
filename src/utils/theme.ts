import {
  configureFonts,
  MD3LightTheme as DefaultTheme,
} from 'react-native-paper';
import {isIOS} from './platformChecker';

export const fontFamily = 'Poppins';

const createFontStyle = (size, weight, letterSpacing, lineHeight) => ({
  fontFamily: fontFamily,
  fontSize: size,
  fontWeight: adjustWeights(weight),
  letterSpacing,
  lineHeight,
});

const fontConfig = {
  displaySmall: createFontStyle(36, '400', 0, 44),
  displayMedium: createFontStyle(45, '400', 0, 52),
  displayLarge: createFontStyle(57, '400', 0, 64),
  headlineSmall: createFontStyle(24, '400', 0, 32),
  headlineMedium: createFontStyle(28, '400', 0, 36),
  headlineLarge: createFontStyle(32, '400', 0, 40),
  titleSmall: createFontStyle(14, '500', 0.1, 20),
  titleMedium: createFontStyle(16, '500', 0.15, 24),
  titleLarge: createFontStyle(22, '500', 0, 28),
  labelSmall: createFontStyle(11, '500', 0.5, 16),
  labelMedium: createFontStyle(12, '500', 0.5, 16),
  labelLarge: createFontStyle(14, '600', 0.1, 20),
  bodySmall: createFontStyle(11, '400', 0.4, 16),
  bodyMedium: createFontStyle(14, '400', 0.25, 20),
  bodyLarge: createFontStyle(16, '400', 0.15, 24),
  default: {
    fontFamily: fontFamily,
    fontWeight: adjustWeights('400'),
    letterSpacing: 0,
  },
};

export const themeConfig = {
  ...DefaultTheme,
  myOwnProperty: true,
  roundness: 13,
  fonts: configureFonts({config: fontConfig}),
  colors: {
    ...DefaultTheme.colors,
    primary: '#87181a',
    primary100: '#bd3b3e',
    primary200: '#b23436',
    primary300: '#a72d2f',
    primary400: '#9d2528',
    primary500: '#921e21',
    primary600: '#87181a',
    secondary: '#DADADA',
    background: '#f9f9f9',
    primaryWithOpacity: 'rgba(135, 24, 26, 0.3)',
    black: '#3a3c3e',
    red: '#DB3022',
    review: '#FFBA49',
    white: '#ffffff',
    whiteWithOpacity: 'rgba(255, 255, 255, 0.3)',
    white100: '#F5F5F5',
    textSecondary: '#9B9B9B',
    lightGrey: '#e8e8e8',
    grey: '#9B9B9B',
    toasterRed: '#D84A49',
    toasterYellow: '#ECBF58',
    toasterGreen: '#5BC3A2',
    toasterBlue: '#6FB1C7',
    padBtn: '#dfe5eb',
    padBtnOperator: '#d3d8de',
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
};

function adjustWeights(weight) {
  if (!isIOS()) {
    const numericWeight = Number(weight);
    return (numericWeight + 200).toString();
  }
  return weight;
}
