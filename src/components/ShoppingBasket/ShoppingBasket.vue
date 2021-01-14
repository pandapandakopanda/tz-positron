<template>
  <div class='basket-wrapper'>
    <div class='basket'>
      <Header />
      <ShopList />
    </div>
    <Total />
  </div>
</template>

<script>
import ShopList from './ShopList.vue'
import Header from './Header.vue'
import Total from './Total.vue'

export default {
  name: 'ShoppingBasket',
  components: {
    ShopList, Header, Total,
  },
}
</script>

<style>
.basket-wrapper {
  width: 100%;
  display: flex;
  margin-top: 65px;
}
  .basket{
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
  }
</style>
