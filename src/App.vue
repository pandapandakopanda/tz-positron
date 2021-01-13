<template>
  <div class='wrapper'>
    <Header />
    <Nav />
    <ShopList />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Nav from './components/Nav.vue'
import ShopList from './components/ShoppingBasket/ShopList.vue'

export default {
  name: 'App',
  components: {
    Header,
    Nav,
    ShopList,
  },
  data() {
    return {

    }
  },
}
</script>

<style lang='scss'>
  @import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');
  html,body,p {
    font-family: 'Lato', sans-serif;
    margin: 0;
    padding: 0;
  }
  #app {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .wrapper{
    width: 100%;
    max-width: 1440px;
  }
</style>
