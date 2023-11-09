<script lang="ts">
import { capitalize } from '@/helpers/index'
import type { PokemonListItem } from '@/types'
export default {
  props: {
    pokemonList: { type: Array<PokemonListItem>, required: true }
  },
  methods: {
    capitalize
  }
}
</script>

<template>
  <div class="grid grid-cols-3 grid-flow-row gap-4 mb-8">
    <a
      v-for="pokemon in pokemonList"
      :key="pokemonList.indexOf(pokemon)"
      class="border border-accent text-slate-400 p-2 rounded text-center hover:bg-accent hover:text-slate-700"
      :href="`/${pokemon.name}`"
      >{{ capitalize(pokemon.name) }}</a
    >
  </div>
</template>
