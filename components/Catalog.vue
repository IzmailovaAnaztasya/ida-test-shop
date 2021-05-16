<template>
    <div class="catalog">
        <h2>Каталог</h2>

        <ul>
          <li>Рюкзаки</li>
          <li>Футболки</li>
          <li>Рубашки</li>
        </ul>
    </div>
</template>

<script>
export default {

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

        &:focus {
            color: $black-color;
            text-decoration: underline;
        }
      }
  }
</style>