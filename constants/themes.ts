import {
  MD3LightTheme as PaperLightTheme,
  MD3DarkTheme as PaperDarkTheme,
  MD3Theme
} from 'react-native-paper';
import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationLightTheme
} from '@react-navigation/native';

export const LightTheme: MD3Theme = {
  ...PaperLightTheme,
  ...NavigationLightTheme,
  colors: {
    ...PaperLightTheme.colors,
    primary: '#6200ee',
    background: '#ffffff'
  }
};

export const DarkTheme: MD3Theme = {
  ...PaperDarkTheme,
  ...NavigationDarkTheme,
  colors: {
    ...PaperDarkTheme.colors,
    primary: '#bb86fc',
    background: '#121212'
  }
};
