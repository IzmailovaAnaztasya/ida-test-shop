<template>
  <div>
    <form action="" @submit.prevent="checkBasketForm">
            <h4>Оформить заказ</h4>
        <div class="basket__inp">
            <input type="text" id="name" placeholder="Ваше имя" v-model.trim="form.name">
        </div>
        <div class="basket__inp">
            <input type="tel" id="phone" placeholder="Телефон" v-model.trim="form.phone">
        </div>
        <div class="basket__inp">
            <input type="text" id="address" placeholder="Адрес" v-model.trim="form.adress">
         </div>
        <button class="basket__button" type="submit">Отправить</button>
        <div class="basket__error" v-if="$v.form.name.$error || $v.form.phone.$error || $v.form.adress.$error">
            <span>!!</span>
            <p>Все поля обязательные.<br> После удачной отправки формы содержимое<br> корзины очищается</p>
        </div>
        <div class="basket__error" v-if="isOrdering">
            <p>Заявка успешно отправлена</p>
        </div>
    </form>
  </div>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, alpha, minLength, numeric, maxLength} from 'vuelidate/lib/validators'
import {  mapGetters, mapMutations } from "vuex";

export default {
    mixins: [validationMixin],
    validations: {
        form: {
            name: {required, minLength: minLength(3), alpha: true},
            phone: {required, minLength: minLength(11), numeric, maxLength: maxLength(11)},
            adress: {required, minLength: minLength(20)}
        }
    },
    data() {
        return {
            form: {
                name: '',
                phone: '',
                adress: '',
            }
        };
    },
    methods: {
        ...mapMutations("basket", ["checkoutSuccess"]),
        checkBasketForm() {
            this.$v.form.$touch()
            if (!this.$v.form.$error) {
                console.log('OK is Valid');
                this.checkoutSuccess()
            }
        }
    },
    computed: {
        ...mapGetters("basket", ["isOrdering"])
    },
}
</script>

<style lang="scss" scoped>
    .basket__inp {
        margin-top: 16px;

        input {
            width: 100%;
            height: 50px;
            padding-left: 14px;
            border: 1px solid $grey-extra-light-color;
            border-radius: 8px;
            background-color: $grey-extra-light-color;

            font-style: normal;
            font-weight: normal;
            font-size: 16px;
            line-height: 21px;
            color: $grey-light-color;

            &:focus {
                color: $black-color;
                outline: 1px solid $grey-extra-light-color;
            }
        }
    }

    .basket__error {
        display: flex;
        margin-top: 32px;
        position: relative;

        p {
            margin: 0;
           color: $black-color;
           font-style: normal;
            font-weight: normal;
            font-size: 16px;
            line-height: 21px; 
        }

        span {
            color: #EB5757;
            font-style: normal;
            font-weight: bold;
            font-size: 32px;
            line-height: 41px;
            margin-right: 8px;
            margin-top: -5px;
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