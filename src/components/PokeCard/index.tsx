import React, { useEffect, useState } from 'react'
import { Image, Text } from 'react-native'

import { IPokemon, Species } from '../../@types/pokemon'
import { api } from '../../services/api'
import { TypeBadge } from '../TypeBadge'
import {
  Container,
  Header,
  PokeCardContainer,
  PokeId,
  PokeName,
  TypesContainer,
  ViewDetailsContainer,
  ViewDetailsText,
} from './styles'
import { ArrowRight } from 'phosphor-react-native'

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
          style={{ width: 64, height: 64, resizeMode: 'contain' }}
        />

        <TypesContainer>
          {pokemon.types?.map(item => {
            return (
              <TypeBadge
                key={item.type.name}
                type={item.type}
                slot={item.slot}
              />
            )
          })}
        </TypesContainer>

        <ViewDetailsContainer>
          <ViewDetailsText>View details</ViewDetailsText>
          <ArrowRight size={16} />
        </ViewDetailsContainer>
      </PokeCardContainer>
    </Container>
  )
}
