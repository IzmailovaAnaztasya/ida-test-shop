<template>
    <div class="catalog">
        <h2>Каталог</h2>

        <ul>
          <li v-for="category in getterProductsCategory" 
            :key="category.id"
            @click="setActive(category.id)"
            :class="{activeIdx: category.id === activeCategoryIdx}"
            >
              <nuxt-link :to="`/catalog/${category.id}`" :class="{activeIdx: category.id === activeCategoryIdx}"
                >{{category.name}} 
              </nuxt-link>
          </li>
        </ul>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      activeCategoryIdx: null,
    }
  },
  methods: {
    ...mapActions("product", ["getProductsCategory", "getProductsList"]),

    setActive(key) {
      this.activeCategoryIdx = key
      // console.log(key);
    },
  },
  mounted() {
    this.getProductsCategory()
  },
  computed: {
    ...mapGetters("product", ["getterProductsCategory"])
  }
}
</script>

<style lang="scss" scoped>
  .catalog {
    float: left;
    width: 160px;
    min-width: 160px;
  }

  h2 {
    color: $black-color;
    font-style: normal;
    font-weight: bold;
    font-size: 32px;
    line-height: 41px;
    margin-bottom: 24px;
  }

  ul {
      padding-left: 0;
      margin-left: 0;

      li {
        margin-bottom: 16px;
        list-style-type: none;
        font-size: 16px;
        line-height: 21px;
        color: $grey-light-color;
        cursor: pointer;

        &:hover {
            color: $grey-color;
        }
      }
  }

  .activeIdx {
      color: $black-color;
      text-decoration: underline;
  }
</style>