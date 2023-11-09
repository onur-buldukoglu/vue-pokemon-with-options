<script lang="ts">
import type { PokemonDetails } from '@/types'
import type { PropType } from 'vue'
import { capitalize } from '@/helpers/index'

export default {
  props: {
    pokemon: {
      type: Object as PropType<PokemonDetails>,
      required: true
    }
  },
  methods: {
    capitalize
  }
}
</script>

<template>
  <div class="card w-96 bg-base-100 shadow-xl border border-accent">
    <figure class="p-12">
      <img
        :src="pokemon?.sprites.other.dream_world.front_default"
        :alt="`Image of ${pokemon.name}`"
      />
    </figure>
    <div class="card-body border-t border-t-accent">
      <h2 class="card-title">
        <span>#{{ pokemon.order }}</span
        >{{ capitalize(pokemon?.name) }}
      </h2>
      <div class="card-actions justify-end">
        <div
          v-for="pokeType in pokemon.types"
          :key="pokemon.types.indexOf(pokeType)"
          class="badge badge-outline"
        >
          {{ capitalize(pokeType.type.name) }}
        </div>
      </div>
    </div>
  </div>
</template>
