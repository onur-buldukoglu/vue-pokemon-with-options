<script lang="ts">
import { range } from '@/helpers/index'
export default {
  props: {
    pokemonCount: { type: Number, required: true }
  },
  data() {
    return {
      activePageNumber: 1,
      pageGroupNumber: 0,
      pageNumberRange: range(10)
    }
  },
  methods: {
    range,
    handleChangePageClick(pageNumber: number) {
      this.activePageNumber = pageNumber
      this.$emit('changePage', { pageNumber })
    },
    jumpForwardTenPages() {
      this.$emit('changePage', { pageNumber: this.activePageNumber + 10 })
      this.activePageNumber += 10
      this.pageGroupNumber += 1
    },
    jumpBackTenPages() {
      this.$emit('changePage', { pageNumber: this.activePageNumber - 10 })
      this.activePageNumber -= 10
      this.pageGroupNumber -= 1
    },
    setPageNumberRange() {
      this.pageNumberRange = Array.from(range(10), (number) => number + 10 * this.pageGroupNumber)
    }
  },
  emits: {
    changePage(payload: { pageNumber: number }) {
      return payload.pageNumber > 0
    }
  },
  computed: {
    lastPageNumber(): number {
      return Math.round(this.pokemonCount / 24)
    }
  },
  watch: {
    pageGroupNumber() {
      this.setPageNumberRange()
    }
  }
}
</script>

<template>
  <div class="join self-center">
    <button
      class="join-item btn btn-accent"
      :disabled="pageGroupNumber <= 0"
      @click="jumpBackTenPages"
    >
      &lt;&lt;
    </button>
    <template v-for="pageNumber in pageNumberRange" :key="pageNumber">
      <button
        :class="[{ 'btn-active': activePageNumber === pageNumber }, 'join-item btn btn-accent']"
        v-if="pageNumber <= lastPageNumber"
        @click="handleChangePageClick(pageNumber)"
      >
        {{ pageNumber }}
      </button></template
    >
    <button
      class="join-item btn btn-accent"
      :disabled="(pageGroupNumber + 1) * 10 > lastPageNumber"
      @click="jumpForwardTenPages"
    >
      &gt;&gt;
    </button>
  </div>
</template>
