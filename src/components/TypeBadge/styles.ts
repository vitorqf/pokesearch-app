import styled from 'styled-components/native'

interface TypeBadgeProps {
  type: string
}

export const Container = styled.View``

export const TypeText = styled.Text<TypeBadgeProps>`
  color: #fff;
  padding: 2px 6px;
  text-transform: capitalize;
  border-radius: 4px;
  background-color: ${props =>
    props.theme.colors.badge.colors[
      props.type as keyof typeof props.theme.colors.badge.colors
    ]};
`
