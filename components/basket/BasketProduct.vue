<template>
  <div class="product__container">
      <div class="product__photo">
          <img src="~/assets/images/louisvuitton.png" alt="">
      </div>
      <div class="product__info">
          <p>Рюкзак Louis Vuitton Discovery</p>
          <h5>150 000 ₽</h5>
          <div class="basket__star">
              <div class="stars__background" ></div>
              <div class="stars__main">
                <img src="~/assets/images/star.svg" alt="">
                <span>4.5</span>
              </div>
          </div>
      </div>
      <div class="product__delete">
          <img src="~/assets/images/deletebasket.svg" alt="">
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    .product__container {
        display: flex;
        height: 120px;
        width: 100%;
        background-color: #fff;
        box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.05);
        border-radius: 8px;
        margin-bottom: 12px;
    }

    .product__photo {
        margin: 15px 34px 15px 25px;
        height: 90px;
        width: 71px;

        img {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
    }

    .product__info {
        position: relative;
        width: 170px;
        padding: 12px 0;

        p {
            margin: 0;
            margin-bottom: 6px;
        }
    }

    .product__delete {
        padding: 49px 22px 49px 22px;
    }

    span {
        margin: 0;
        font-weight: bold;
        font-size: 10px;
        line-height: 13px;
        color: $ellow-color;
        vertical-align: 7px;
    }

    .basket__star {

    }

    .stars__background {
        position: absolute;
        bottom: 12px;
        height: 20px;
        background-color: $ellow-color;
        max-height: 20px;
        width: 20px;
    }

    .stars__main {
        position: absolute;
        bottom: 8px;
    }
</style>