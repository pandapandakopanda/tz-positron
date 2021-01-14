<template>
  <div class='app-wrapper'>
    <Header />
    <Nav />
    <ShoppingBasket />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Nav from './components/Nav.vue'
import ShoppingBasket from './components/ShoppingBasket/ShoppingBasket.vue'

export default {
  name: 'App',
  components: {
    Header,
    Nav,
    ShoppingBasket,
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

  }
  .app-wrapper {
    padding-left: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
