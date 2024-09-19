import { requireNativeModule } from 'expo-modules-core';

export default process.env.EXPO_OS !== 'web' || typeof window !== 'undefined'
  ? requireNativeModule('ExpoHaptics')
  : {};
