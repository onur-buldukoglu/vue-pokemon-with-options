<script lang="ts">
import type { PokemonListResponse, PokemonListItem } from '@/types/index'
import ListPagination from '@/components/ListPagination.vue'
import PokemonList from '@/components/PokemonList.vue'

export default {
  components: {
    ListPagination,
    PokemonList
  },
  data() {
    return {
      pageNumber: 1,
      pokemonCount: 0,
      pokemonList: [] as Array<PokemonListItem>
    }
  },
  methods: {
    changePageNumber(payload: { pageNumber: number }) {
      this.pageNumber = payload.pageNumber
    },
    async fetchPokemonList() {
      try {
        const response: PokemonListResponse = await fetch(
          `https://pokeapi.co/api/v2/pokemon?offset=${(this.pageNumber - 1) * 24}&limit=24`
        ).then((res) => res.json())

        this.pokemonCount = response.count
        this.pokemonList = response.results
      } catch (error) {
        console.log(error)
      }
    }
  },
  watch: {
    pageNumber: {
      handler() {
        this.fetchPokemonList()
      },
      immediate: true
    }
  }
}
</script>

<template>
  <main class="flex flex-col justify-between bg-slate-700 rounded p-8 w-[40rem]">
    <PokemonList :pokemon-list="pokemonList" />
    <ListPagination @changePage="changePageNumber" :pokemon-count="pokemonCount" />
  </main>
</template>
