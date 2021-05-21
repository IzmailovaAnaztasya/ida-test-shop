<template>
  <div class="card">
      <div class="card__stars">
          <div class="stars__background" v-bind:style="{height:rating}"></div>
          <div class="stars__main">
                <img src="~/assets/images/star.svg" alt="">
                <span>{{products_data.rating}}</span>
          </div>
      </div>
      <div class="card__photo">
          <img class="card-photo-img" :src="`https://front-test.idalite.com${products_data.photo}`" alt="">
      </div>
      <div class="card__basket">
          <img src="~/assets/images/basket.svg" alt="">
      </div>
      <div class="card__text">
          <p>{{products_data.name}}</p>
          <h5>{{products_data.price.toLocaleString()}} ₽</h5>
      </div>
  </div>
</template>

<script>
export default {
    props: {
        products_data: {
            type: Object,
            default() {
                return {}
            }
        },
    },
    data() {
        return {
            heightStar: '12px',
            heightStars: [
                {
                    starkey: 0,
                    starmean: '5px',
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
                    starkey: 5,
                    starmean: '15px',
                },
            ]
        }
    },
    methods: {

    },
    computed:{
        rating: function (){
            const elrating = this.heightStars.find(el => el.starkey >= this.products_data.rating )
             return elrating.starmean
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
        // margin-right: 30px;
    }

    .card-photo-img {
        height: auto;
        width: 100%;
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