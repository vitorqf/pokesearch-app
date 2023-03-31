import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

export const LoadingTextContainer = styled.View`
  justify-content: center;
  align-items: center;
  margin-bottom: 50%;
`

export const LoadingTitle = styled.Text`
  color: ${({ theme }) => theme.colors.badge.colors.fighting};
  font-size: ${({ theme }) => theme.fontSizes.x5_large};
  font-weight: 700;
  text-transform: uppercase;
  flex-direction: column;
`

export const LoadingMessage = styled.Text`
  font-size: ${({ theme }) => theme.fontSizes.x2_large};
  font-weight: 500;
`
