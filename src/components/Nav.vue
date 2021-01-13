<template>
  <div class='nav'>
    <p>Главная</p>
    {{ space() }}
    <p>Корзина</p>
  </div>
</template>

<script>
export default {
  name: 'Nav',
  methods: {
    space() {
      return '____'
    },
  },
}
</script>

<style lang='scss' scope>
  .nav {
    display: flex;
    width: 100%;
    flex-direction: row;
    height: 20px;
    flex-wrap: nowrap;
    padding-left: 80px;
    p{
      font-family: Lato;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 150%;
      color: #33374E;
    }
  }
</style>
