<template>
    <div class="products">
      <div class="sort">
        <DropdownSort />
      </div>
      <div class="slots__container">
      <div class="slots">
        <ProductSlot />
        <ProductSlot />
        <ProductSlot />
        <ProductSlot />
      </div>
      </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  .products {
    position: relative;
    margin-top: 10px;
    width: 100%;
    max-width: 100%;
  }

  .sort {
    position: absolute;
    right: 0%;
  }

  .slots__container {
    padding: 0 auto;
  }

  .slots {
    display: flex;
    flex-wrap: wrap;
    margin-top: 55px;
  }
</style>
