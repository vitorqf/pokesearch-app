import React, { useEffect, useState } from 'react'
import { Image } from 'react-native'

import { IPokemon, Species } from '../../@types/pokemon'
import { api } from '../../services/api'
import {
  Container,
  Header,
  PokeCardContainer,
  PokeId,
  PokeName,
  TypesContainer,
} from './styles'

interface PokeCardProps {
  data: Species
}

export function PokeCard({ data }: PokeCardProps) {
  const [pokemon, setPokemon] = useState<IPokemon>({} as IPokemon)

  function fetchDetailedPokemonAPIInfo() {
    api.get(`pokemon/${data.name}`).then(response => {
      setPokemon(response.data)
    })
  }

  useEffect(() => {
    fetchDetailedPokemonAPIInfo()
  }, [])

  return (
    <Container>
      <PokeCardContainer>
        <Header>
          <PokeName>{pokemon.name}</PokeName>
          <PokeId>#{pokemon.id}</PokeId>
        </Header>

        <Image
          source={{
            uri: `https://www.smogon.com/dex/media/sprites/xy/${pokemon.name}.gif`,
          }}
        />

        <TypesContainer>
          {pokemon.types?.map(item => {
            return <PokeId>{item.type.name}</PokeId>
          })}
        </TypesContainer>
      </PokeCardContainer>
    </Container>
  )
}
