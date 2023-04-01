import styled from 'styled-components/native'

export const Container = styled.View`
  flex-direction: column;
`

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const PokeName = styled.Text`
  font-size: ${({ theme }) => theme.fontSizes.x2_large};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  text-transform: capitalize;
`

export const PokeId = styled.Text`
  color: ${({ theme }) => theme.colors.slate[400]};
  font-size: ${({ theme }) => theme.fontSizes.large};
`

export const PokeCardContainer = styled.View`
  background-color: #fff;
  padding: 6px 12px;
  border-radius: 10px;
  margin: 0px 16px;
`

export const TypesContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
