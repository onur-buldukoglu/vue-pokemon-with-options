<script lang="ts">
import type { PokemonDetails } from '@/types'
import PokemonCard from '@/components/PokemonCard.vue'

export default {
  components: {
    PokemonCard
  },
  data(): { pokemonName: string | string[]; pokemon: PokemonDetails | null } {
    return {
      pokemonName: this.$route.params.pokemonName,
      pokemon: null
    }
  },
  methods: {
    async fetchPokemonDetails() {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.pokemonName}`)

      this.pokemon = await res.json()
    }
  },
  beforeMount() {
    this.fetchPokemonDetails()
  }
}
</script>

<template>
  <PokemonCard v-if="pokemon" :pokemon="pokemon" />
</template>
