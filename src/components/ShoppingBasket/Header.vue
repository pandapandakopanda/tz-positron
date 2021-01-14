<template>
  <div class='basket-header'>
    <p class='header-title'>
      Ваша корзина
    </p>
    <div class='header-basket-data'>
      <p class='header-basket-count'>
        {{ n }} товара
      </p>
      <p class='header-clear-basket'>
        Очистить корзину
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style lang='scss' scope>
  .basket-header {
    width: 100%;
    display: flex;
    height: 55px;
  }
  .header-title {
    display: flex;
    width: 290px;
    font-weight: bold;
    font-size: 44px;
    line-height: 53px;
    color: #1F2432;
  }
  .header-basket-data {
    display: flex;
    width: 100%;
    justify-content: space-between;
    p{
      color: #797B86;
    }
    .header-basket-count {
      font-size: 18px;
      line-height: 26px;
    }
    .header-clear-basket {
      font-size: 14px;
      line-height: 21px;
      text-decoration-line: underline;

    }
  }
</style>
