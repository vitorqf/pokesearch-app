import React from 'react'

import { Type } from '../../@types/pokemon'
import { Container, TypeText } from './styles'

export function TypeBadge({ type, slot }: Type) {
  return (
    <Container>
      <TypeText type={type.name}>{type.name}</TypeText>
    </Container>
  )
}
