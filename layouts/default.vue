<template>
  <div>
    <Header />
    <div class="container">
      <Catalog />
      
      <Nuxt />
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header'

export default {
  components: {
      Header
    }
}
</script>

<style lang="scss" scoped>
  .container {
    display: flex;
    justify-content: space-between;
    padding: 32px 88px 0 88px;
  }
</style>
