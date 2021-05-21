<template>
  <div class="sort-form">
      <div class="dropdown">
          <p>Сортировать по: <button class="dropdown__button" @click="isVisibleList">{{btnLabel}}</button></p>
          <ul class="dropdown__ul" :class="{visible: visibleList === true}">
              <li class="dropdown__li" 
              v-for="sort in sorts" 
              :key="sort.value" 
              :value="sort.value"
              @click="isBtnLabel(sort)"
              >
              {{sort.label}}
              </li>
          </ul>
          <input type="text" :value="useValue">
      </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  data() {
    return {
        visibleList: false,
        btnLabel: 'цене',
        useValue: '',
        sorts: [
            {
            label: 'По цене',
            labelBtn: 'цене',
            value: 'price',
            },
            {
            label: 'По популярности',
            labelBtn: 'популярности',
            value: 'rating',
            },
      ]
    }
  },
  methods: {
      ...mapMutations("product", ["sortProdPrice", "sortProdRating"]),
      isVisibleList() {
          if (this.visibleList === false) {
              this.visibleList = true
          } else {
              this.visibleList = false
          }
      },
      isBtnLabel(sort) {
          this.btnLabel = sort.labelBtn
          this.visibleList = false
          //console.log('hello', sort.value);
          this.useValue = sort.value
          if (this.useValue === 'price') {
            return this.sortProdPrice()
          }
          if (this.useValue === 'rating') {
            return this.sortProdRating()
          }
      }
  }
}
</script>

<style lang="scss" scoped>
    .dropdown {
        position: relative;
        margin-right: 20px;

        p {
          margin: 0;
          color: $black-color;
          font-size: 16px;
          line-height: 21px;
        }

        input {
            display: none;
        }
    }

    .dropdown__button {
        position: relative;
        padding: 0;
        background: transparent;
        border: 1px solid #fff;
        font-size: 16px;
        color: $grey-color;
        cursor: pointer;

        margin-bottom: 6px;

        &::after {
            content: "";
            position: absolute;
            top: 50%;
            margin-left: 4px;

            pointer-events: none;

            width: 0;
            height: 0;
            border-width: 2.5px 2.5px 0 2.5px;
            border-color: $grey-color transparent transparent transparent;
            border-style: solid;
        }
    }

    .dropdown__ul {
        z-index: 1;
        position: absolute;
        left: 0;
        display: none;

        margin: 0;
        padding: 12px 0;
        list-style-type: none;
        width: 100%;
        overflow: hidden;

        background: #fff;
        box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.05);
        border-radius: 8px;
    }

    .dropdown__li {
        padding: 4px 12px;
        color: $grey-light-color;
        cursor: pointer;

        &:hover {
            color: $black-color;
            background: $grey-extra-light-color;
        }
    }

    .visible {
        display: block;
    }

</style>