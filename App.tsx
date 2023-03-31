import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
  Poppins_900Black,
} from '@expo-google-fonts/poppins'
import { useFonts } from 'expo-font'
import { SafeAreaProvider } from 'react-native-safe-area-context/'
import { ThemeProvider } from 'styled-components'
import { Splash } from './src/components/Splash'

import { Routes } from './src/routes'
import theme from './src/styles/theme'

export default function App(): React.ReactNode {
  const [fontsLoaded] = useFonts({
    Poppins_900Black,
    Poppins_400Regular,
    Poppins_700Bold,
    Poppins_500Medium,
  })

  if (fontsLoaded) {
    return (
      <ThemeProvider theme={theme}>
        <Splash />
      </ThemeProvider>
    )
  }

  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <Routes />
      </SafeAreaProvider>
    </ThemeProvider>
  )
}
