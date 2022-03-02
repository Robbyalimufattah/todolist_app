import React from "react";
import { NativeBaseProvider, extendTheme } from "native-base";
import AppLoading from "expo-app-loading";

import { useFonts } from "expo-font";
// Import font with Expo
import { Poppins_400Regular, Poppins_400Regular_Italic } from "@expo-google-fonts/poppins"
import { ComicNeue_400Regular, ComicNeue_700Bold } from "@expo-google-fonts/comic-neue"

// Import Container
import Container from "./Container";

export default function App() {
  // Load Font with Expo
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_400Regular_Italic,
    ComicNeue_400Regular,
    ComicNeue_700Bold
  })

  // Setup Font
  const fontConfig = {
    Poppins : {
      400: {
        normal: 'Poppins_400Regular',
        italic: 'Poppins_400Regular_Italic'
      }
    },
    ComicNeue : {
      400: {
        normal: 'ComicNeue_400Regular',
      },
      700: {
        normal: 'ComicNeue_700Bold'
      }
    },
  }

  // Setup Theme
  const customColor = {
    primary: {
      50: '#ecfeff',
      100: '#cffafe',
      200: '#a5f3fc',
      300: '#76e8f9',
      400: '#22d3ee',
      500: '#06b6d4',
      600: '#0891b2',
      700: '#0e7490',
      800: '#155e75',
      900: '#164e63',
    }
  }

  // Configuration Native Base Custom Theme
  const theme = extendTheme ({
    color: customColor,
    fontConfig,
    fonts: {
      Poppins: 'Poppins',
      ComicNeue: 'ComicNeue'
    },
    config: {initialColorMode: 'dark'}
  })

  if (!fontsLoaded) {
    return <AppLoading />
  } else {
    return (
      <NativeBaseProvider theme={theme}>
        <Container />
      </NativeBaseProvider>
    )
  }
}

