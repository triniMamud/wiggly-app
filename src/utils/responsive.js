import { Dimensions, PixelRatio } from 'react-native';

const BASE_WIDTH  = 390;
const BASE_HEIGHT = 844;

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

const widthScale  = SCREEN_WIDTH  / BASE_WIDTH;
const heightScale = SCREEN_HEIGHT / BASE_HEIGHT;

export const scale = (size) =>
  Math.round(PixelRatio.roundToNearestPixel(size * widthScale));

export const verticalScale = (size) =>
  Math.round(PixelRatio.roundToNearestPixel(size * heightScale));

// factor por defecto 0.5
export const moderateScale = (size, factor = 0.5) =>
  Math.round(PixelRatio.roundToNearestPixel(
    size + (scale(size) - size) * factor
  ));

export const deviceType = () => {
  if (SCREEN_WIDTH < 360) return 'small';   // ej: Galaxy A series chicos
  if (SCREEN_WIDTH < 400) return 'medium';  // ej: iPhone SE, Pixel 6a
  if (SCREEN_WIDTH < 430) return 'large';   // ej: iPhone 14, Pixel 7
  return 'xlarge';                          // ej: iPhone 14 Plus, tablets
};

export const isSmallDevice = SCREEN_WIDTH < 375;

export const { width: WINDOW_WIDTH, height: WINDOW_HEIGHT } = Dimensions.get('window');