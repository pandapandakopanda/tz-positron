<template>
  <div
    class='header'
    @click='m'
  >
    <img :src='image'>
    <div class='shopbag'>
      <p id='title'>
        Ваша корзина
      </p>
      <p id='goods'>
        {{ count }} товара
      </p>
      <p id='summ'>
        {{ summ }} P
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {

  },
  data() {
    return {
      image: './assets/shop.svg',
      count: 0,
      summ: 0,
    }
  },
  methods: {
    m() {
      console.log(this.image)
    },
  },
}
</script>

<style lang='scss' scoped>
  .header {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    width: 100%;
    height: 140px;
    .shopbag {
      display: flex;
      flex-direction: column;
      margin-right: 82px;
      margin-bottom: 25px;
       #title {
        font-size: 14px;
        line-height: 150%;
        color: #1F2432;
        }
      #goods, #summ  {
        font-size: 12px;
        line-height: 145%;
        color: #797B86;
        }
      #summ {
        color: #1F2432;
      }
    }
  }
</style>
