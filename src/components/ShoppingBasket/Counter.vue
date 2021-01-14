<template>
  <div class='counter'>
    <div class='button button-l'>
      -
    </div>
    <div class='value'>
      0
    </div>
    <div class='button button-r'>
      +
    </div>
  </div>
</template>

<script>
export default {
  name: 'Counter',
}
</script>

<style lang='scss' scope>
  .counter {
    display: flex;
    justify-content: space-between;
    width: 102px;
    margin-left: 80px;
    margin-top: 30px;
  }
  .button {
    cursor: pointer;
    user-select: none;
  }
  .button, .value {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 34px;
    background-color: #EEF1F4;
    font-size: 14px;
    line-height:21px;
    text-align: center;
    color: #1F2432;
  }
  .button, .value {
    width: 32px;
    &-l{
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
    }
    &-r{
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
    }
  }
</style>
