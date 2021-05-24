<template>
    <div>
        <div class="basket__shadow"></div>
        <div class="basket__container">
        <div class="basket__header">
            <h2>Корзина</h2>
            <button @click="closeBasket">
                <img src="~/assets/images/close.svg" alt="">
            </button>
        </div>
        <div class="basket__empty" v-if="!basketProductsCount">
            <h3>Пока что вы ничего не добавили<br> в корзину.</h3>
            <button class="basket__button" @click="closeBasket">
                Перейти к выбору
            </button>
        </div>
        <div v-else>
        <h4>Товары в корзине</h4>
            <ul>
                <BasketProduct
                  v-for="(product, index) in basketProducts"
                  :key="product._id"
                  :basket_data="product"
                  @deleteProduct="deleteProduct(index)"
                  />
            </ul>
            <BasketForm />
        </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from "vuex";

export default {

  methods: {
    ...mapMutations("basket", ["openBasket", "closeBasket"]),
    ...mapActions("basket", ["deleteToProduct"]),

    deleteProduct(index) {
        //console.log(index)
        this.deleteToProduct(index)
    }
  },
  computed: {
    ...mapGetters("basket", ["isOpenBasket", "basketProducts", "basketProductsCount"])
  },
  mounted() {
    if(this.isOpenBasket === true) {
        document.body.classList.add("overflow-class");
    }
  },
  beforeDestroy() {
    document.body.classList.remove("overflow-class"); 
  },
}
</script>

<style lang="scss" scoped>
    .basket__shadow {
        z-index: 1;
        height: 100vh;
        width: 100vw;
        position: absolute;
        left: 0px;
        top: 0px;
        background: #FFFFFF;
        opacity: 0.8;
    }

    .basket__container {
        z-index: 10;
        position: absolute;
        right: 0;
        top: 0;

        padding: 52px 48px;
        width: 460px;
        height: 100%;
        background: #FFFFFF;
        box-shadow: -4px 0px 16px rgba(0, 0, 0, 0.05);
        border-radius: 8px 0px 0px 8px;

    }

    .basket__header {
        display: flex;
        justify-content: space-between;
        margin-bottom: 24px;

        button {
            position: absolute;
            top: 65px;
            right: 60px;
            height: 14px;
            width: 14px;
            border: none;
            background: none;
            cursor: pointer;
        }
    }

    .basket__button {
            width: 100%;
            height: 50px;
            border-radius: 8px;
            background-color: $black-color;
            margin-top: 24px;
            border: 1px solid $black-color;
            color: #fff;
            font-style: normal;
            font-weight: normal;
            font-size: 16px;
            line-height: 21px;
            cursor: pointer;
    }
</style>