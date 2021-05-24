<template>
    <transition name="basketProduct">
    <div class="product__container">
        <div class="product__photo">
            <img :src="`https://front-test.idalite.com${basket_data.photo}`" alt="">
        </div>
        <div class="product__info">
            <p>{{basket_data.name}}</p>
            <h5>{{basket_data.price.toLocaleString()}} ₽</h5>
            <div class="basket__star">
                <div class="stars__background" v-bind:style="{height:rating}"></div>
                <div class="stars__main">
                    <img src="~/assets/images/star.svg" alt="">
                    <span>{{basket_data.rating}}</span>
                </div>
            </div>
        </div>
        <div class="product__delete">
            <img src="~/assets/images/deletebasket.svg" alt="" @click="deleteProduct">
        </div>
    </div>
    </transition>
</template>

<script>
export default {
    props: {
        basket_data: {
            type: Object,
            default() {
                return {
                    // name: 'Рюкзак Louis Vuitton Discovery',
                    // price: 150000,
                    // rating: 4.5,
                }
            }
        },
    },
    data() {
        return {
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
        deleteProduct() {
            this.$emit('deleteProduct')
        }
    },
    computed:{
        rating: function (){
            const elrating = this.heightStars.find(el => el.starkey >= this.basket_data.rating )
            return elrating.starmean
        }
    }
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
        margin: 15px 34px 15px 15px;
        height: 90px;
        width: 71px;
        padding: 0;

        img {
            width: 100px;
            height: auto;
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
        
        img {
            cursor: pointer;
        }
    }

    span {
        margin: 0;
        font-weight: bold;
        font-size: 10px;
        line-height: 13px;
        color: $ellow-color;
        vertical-align: 7px;
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

    /* Animations */

    .basketProduct-leave-active {
        transition: all 0.5s;
    }
    .basketProduct-leave-to {
        transform: translateX(50px);
        opacity: 0;
    }
</style>