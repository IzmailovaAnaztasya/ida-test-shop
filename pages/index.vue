<template>
      <div class="products">
        <div class="sort">
          <DropdownSort />
        </div>

        <!-- <div>
            <p>Выберите категорию или вам тут весь каталог прилетит!</p>
        </div> -->

        <div class="slots__container">
        <div class="slots">
          <ProductSlot 
            v-for="product in allProducts" 
            :key="product.id"
            :products_data="product"
          />
        </div>
        </div>
        
      </div>
</template>

<script>

export default {
  // async asyncData({$axios}) {
  //   const allProducts = await $axios.$get('https://front-test.idalite.com/api/product')
  //   return {allProducts}
  // },
  async fetch({store}) {
    if (store.getters['product/getterProductsList'].length === 0) {
      await store.dispatch('product/getAllProductsList')
    }
  },
  data() {
    return {
      
    }
  },
  methods: {
    
  },
  // middleware: ['initCatalog'],

  computed: {
    allProducts() {
      return this.$store.getters['product/allProducts']
    }
  }

  // computed: {
  //   sortList() {
  //     return this.allProducts.sort((a, b) => a.price - b.price)
  //   }
  // }
}
</script>

<style lang="scss" scoped>
  .products {
    position: relative;
    margin-top: 10px;
    width: 100%;
    max-width: 100%;
  }

  .sort {
    position: absolute;
    right: 0%;
  }
  .slots__container {
    position: relative;
  }
  .slots {
    display: flex;
    flex-wrap: wrap;
    margin-top: 55px;
  }
</style>
