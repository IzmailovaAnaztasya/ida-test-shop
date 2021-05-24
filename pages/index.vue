<template>
      <div class="products">
        <div class="sort">
          <DropdownSort />
        </div>

        <div class="alert">
            <h3>Каталог не выбран</h3>
            <h4>Воспользуйтейсь боковым меню для выбора каталога</h4>
        </div>

        <!-- <div class="slots__container">
        <div class="slots">
          <ProductSlot 
            v-for="product in allProducts" 
            :key="product.id"
            :products_data="product"
          />
        </div>
        </div> -->
        
      </div>
</template>

<script>

export default {
  // async fetch({store}) {
  //   if (store.getters['product/getterProductsList'].length === 0) {
  //     await store.dispatch('product/getAllProductsList')
  //   }
  // },
  data() {
    return {
      
    }
  },
  methods: {
    
  },
  // middleware: ['initCatalog'],

  // computed: {
  //   allProducts() {
  //     return this.$store.getters['product/allProducts']
  //   }
  // }
}
</script>

<style lang="scss" scoped>
  .alert {
    padding-top: 50px;
    text-align: center;
  }

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
