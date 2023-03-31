import styled from 'styled-components/native'

export const Container = styled.View`
  margin: 16px;
`

export const SearchBarContainer = styled.TextInput`
  padding: 8px 16px;
  background-color: #fff;
  border-radius: 8px;
  font-size: 14px;
  border: 2px solid ${({ theme }) => theme.colors.gray200};
`
