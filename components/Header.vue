<template>
    <header class="header">
        <div class="header__logo">
            <h1>TestList</h1>
        </div>
        <div class="header__basket">
            <div class="basket">
                 <img src="~/assets/images/vector.svg" alt="">
            </div>
            <div class="products">
                <span>3</span>
            </div>
        </div>
    </header>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    .header {
        width: 100%;
        height: 66px;
        margin: 0 auto;
        background: #fff;
        display: flex;
        justify-content: space-between;
        border-bottom-left-radius: 8px;
        border-bottom-right-radius: 8px;

        box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.05);
    }

    .header__logo {
        padding: 18px 0 20px 88px;

        h1 {
            font-style: bold;
            line-height: 28px;
            line-height: 100%;
            color: $grey-color;
        }
    }

    .header__basket {
        padding: 17px 104px 17px 0;
    }

    .products {
        height: 12px;
        width: 12px;
        border-radius: 50%;
        background-color: $grey-light-color;
        text-align: center;

        position: relative;
        left: 18px;
        margin-top: -35px;

        span {
            font-size: 8px;
            line-height: 10px;
            line-height: 100%;
            color: #fff;
            font-style: bold;
            vertical-align: 5px;
        }
    }
</style>