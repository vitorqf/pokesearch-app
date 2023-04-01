import { useEffect, useState } from 'react'
import { FlatList } from 'react-native-gesture-handler'

import { Species } from '../../@types/pokemon'
import { Input } from '../../components/Input'
import { PokeCard } from '../../components/PokeCard'
import { api } from '../../services/api'
import { Container } from './styles'

export function Home() {
  const [pokemons, setPokemons] = useState<Species[]>([])

  function fetchPokemonAPI() {
    api.get('pokemon?limit=10').then(response => {
      setPokemons(response.data.results)
    })
  }

  useEffect(() => {
    fetchPokemonAPI()
  }, [])

  return (
    <Container>
      <Input />
      <FlatList
        data={pokemons}
        keyExtractor={pokemon => pokemon.name}
        renderItem={({ item }) => <PokeCard data={item} />}
        numColumns={2}
        style={{
          paddingHorizontal: 14,
          gap: 4,
        }}
      />
    </Container>
  )
}
