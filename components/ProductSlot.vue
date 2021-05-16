<template>
  <div class="card">
      <div class="card__stars">
          <div class="stars__background" v-bind:style="{height:star}"></div>
          <div class="stars__main">
                <img src="~/assets/images/star.svg" alt="">
                <span>4.5</span>
          </div>
      </div>
      <div class="card__photo">
          <img src="~/assets/images/louisvuitton.png" alt="">
      </div>
      <div class="card__basket">
          <img src="~/assets/images/basket.svg" alt="">
      </div>
      <div class="card__text">
          <p>Рюкзак Louis Vuitton Discovery</p>
          <h5>150 000 ₽</h5>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            star: '12px',
            stars: [
                {
                    starkey: 0,
                    starmean: '6px',
                },
                {
                    starkey: 1,
                    starmean: '7px',
                },
                {
                    starkey: 2,
                    starmean: '8px',
                },
                {
                    starkey: 3,
                    starmean: '10px',
                },
                {
                    starkey: 4,
                    starmean: '12px',
                },
                {
                    starkey: 0,
                    starmean: '15px',
                },
            ]
        }
    }

}
</script>

<style lang="scss" scoped>
    .card {
        display: flex;
        background: #fff;
        width: 264px;
        height: 272px;
        box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.05);
        border-radius: 8px;
        margin-left: 16px;
        margin-bottom: 16px;
        position: relative;
    }

    span {
        margin: 0;
        font-weight: bold;
        font-size: 10px;
        line-height: 13px;
        color: $ellow-color;
        vertical-align: 7px;
    }
    .card__stars {
        margin: 17px 40px 0 16px;
        position: relative;
    }

    .stars__main {
       position: absolute; 
        height: 20px;
        width: 45px;
        background-color: transparent;

    }

    .stars__background {
        position: absolute;
        background-color: $ellow-color;
        max-height: 20px;
        width: 20px;
        bottom: 235px;
    }

    .card__photo {
        margin-top: 18px;
        margin-right: 30px;
    }
    .card__basket {
        margin: 17px 18px 0 0;

        &:hover {
            cursor: pointer;
        }
    }
    .card__text {
        position: absolute;
        margin-top: 214px;
        margin-left: 16px;

        p {
            margin: 0;
            font-size: 14px;
            line-height: 18px;
            margin-bottom: 6px;
        }
    }
</style>