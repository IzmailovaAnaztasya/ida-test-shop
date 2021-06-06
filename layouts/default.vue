<template>
  <div>
    <client-only>

      <Basket v-if="isOpenBasket" />
    </client-only>
    
    <Header />
    <div class="container">
      <Catalog />
      
      <Nuxt />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import Header from '@/components/Header'

export default {
  components: {
      Header
    },
  computed: {
    ...mapGetters("basket", ["isOpenBasket"])
  },
}
</script>

<style lang="scss">
  .overflow-class {
    overflow-y: hidden;
  }
  .container {
    display: flex;
    justify-content: space-between;
    padding: 32px 88px 0 88px;
  }


</style>
