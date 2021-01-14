<template>
  <div class='total-wrapper'>
    <h1>Итого</h1>
    <div class='total-info'>
      <p class='goods-costs'>
        Сумма заказа {{}} P
      </p>
      <p class='goods-count'>
        Количество {{}} шт
      </p>
      <p class='goods-service'>
        Установка {{ isTrue }}
      </p>
    </div>
    <div class='total-cost' />
    <div class='buttons-block'>
      <div class='button' />
      <div class='button' />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Total',
  data() {
    return {
      isTrue: (true) ? 'Есть' : 'Нет',
    }
  },
}
</script>

<style lang='scss' scope>
  .total-wrapper {
    margin-top: 35px;
    display: flex;
    flex-direction: column;
    width: 425px;
    background-color: #F6F8FA;
    h1{
      font-weight: 600;
      font-size: 24px;
      line-height: 29px;
      color: #1F2432;
    }
  }
</style>
