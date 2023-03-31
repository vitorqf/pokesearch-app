import AnimatedLottieView from 'lottie-react-native'
import React from 'react'
import {
  Container,
  LoadingMessage,
  LoadingTextContainer,
  LoadingTitle,
} from './styles'
import { Text } from 'react-native'

export function Splash() {
  return (
    <Container>
      <LoadingTextContainer>
        <LoadingTitle>Hold tight</LoadingTitle>
        <LoadingMessage>We are preparing our pokémon...</LoadingMessage>
      </LoadingTextContainer>
      <AnimatedLottieView
        autoPlay
        loop={true}
        resizeMode='contain'
        speed={0.65}
        source={require('../../../assets/107408-pokemon-loading.json')}
      />
    </Container>
  )
}
