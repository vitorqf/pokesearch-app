import styled from 'styled-components/native'

export const Container = styled.TouchableOpacity`
  flex: 1;
  flex-direction: column;
`

export const Header = styled.View`
  width: 100%;
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
  padding: 8px 12px;
  border-radius: 10px;
  margin: 6px 6px;
  justify-content: center;
  align-items: center;
  gap: 16px;
`

export const TypesContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 4px;
`

export const ViewDetailsContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const ViewDetailsText = styled.Text`
  font-size: ${({ theme }) => theme.fontSizes.large};
`
