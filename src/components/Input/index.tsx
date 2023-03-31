import { Text, View, TextInput } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context/'
import { useTheme } from 'styled-components'
import { Container, SearchBarContainer } from './styles'

export function Input() {
  const theme = useTheme()

  return (
    <SafeAreaView>
      <Container>
        <SearchBarContainer
          placeholder='Name or pokémon id'
          placeholderTextColor={theme.colors.gray200}
        />
      </Container>
    </SafeAreaView>
  )
}
