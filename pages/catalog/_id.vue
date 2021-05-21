<template>
      <div class="products">
        <div class="sort">
          <DropdownSort />
        </div>
        <div class="slots__container">
        <div class="slots">
          <ProductSlot 
            v-for="product in getterProductsList" 
            :key="product.id"
            :products_data="product"
          />
        </div>
        </div>
      </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  async asyncData({ params }) {
      const id = params.id // When calling /abc the id will be "abc"
      return { id }
  },
  data() {
    return {
      showBasket: false,
    }
  },
  methods: {
    ...mapActions("product", ["getProductsList","getProductsCategory"]),

    isShowBasket() {
      this.showBasket = true
    },
  },
  mounted() {
    this.getProductsList(this.id)
  },
  computed: {
    ...mapGetters("product", ["getterProductsList"]),
  }
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
