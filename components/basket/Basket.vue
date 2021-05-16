<template>
    <div>
        <div class="basket__shadow"></div>
        <div class="basket__container">
            <div class="basket__header">
                <h2>Корзина</h2>
                <button>
                    <img src="~/assets/images/close.svg" alt="">
                </button>
                </div>
                <div class="basket__empty">
                    <h3>Пока что вы ничего не добавили<br> в корзину.</h3>
                    <button class="basket__button">
                        Перейти к выбору
                    </button>
                </div>

                <form action="">
                    <h4>Товары в корзине</h4>
                    <ul>
                        <BasketProduct />
                        <BasketProduct />
                        <BasketProduct />
                    </ul>
                    <h4>Оформить заказ</h4>
                    <div class="basket__inp">
                        <input type="text" id="name" placeholder="Ваше имя">
                    </div>
                    <div class="basket__inp">
                        <input type="text" id="phone" placeholder="Телефон">
                    </div>
                        <div class="basket__inp">
                            <input type="text" id="address" placeholder="Адрес">
                        </div>
                    <button class="basket__button">Отправить</button>
                    <div class="basket__error">
                        <div class="error__img"></div>
                        <span>!!</span>
                        <p>Все поля обязательные.<br> После удачной отправки формы содержимое<br> корзины очищается</p>
                    </div>
                </form>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    .basket__shadow {
        z-index: 1;
        height: 100%;
        width: 100%;
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
</style>