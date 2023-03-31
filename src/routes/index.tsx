import { AppRoutes } from './app.routes'
import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'

export function Routes() {
  return (
    <NavigationContainer>
      <StatusBar style='dark' />
      <AppRoutes />
    </NavigationContainer>
  )
}
