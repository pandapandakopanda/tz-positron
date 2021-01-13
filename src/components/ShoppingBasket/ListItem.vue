<template>
  <div class='item_wrapper'>
    <img>
    <div class='about'>
      <p id='title'>
        Вытяжное устройство {{ id }}
      </p>
      <p id='about'>
        {{ about }}
      </p>
      <p id='vendor_code'>
        Артикул: {{ vendor }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListItem',
  props: {
    id: {
      type: String,
      default: '',
    },
    about: {
      type: String,
      default: '',
    },
    vendor: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang='scss' scoped>
  .item_wrapper {
    display:flex;
    margin-top: 30px;
    flex-direction: column;
    max-width: 800px;
    max-height: 145px;
    cursor: pointer;
    border-bottom: 1px solid #C4C4C4;
    .about {
      margin-left: 30px;
      p {
        margin-bottom: 7px;
        font-style: normal;
        font-family: Lato;
      }
      #title{
        font-weight: 600;
        font-size: 16px;
        line-height: 23px;
        color: #1F2432;
      }
      #about {
        font-weight: normal;
        font-size: 12px;
        line-height: 18px;
        color: #2C3242;
      }
      #vendor_code {
        font-family: Lato;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 21px;
        color: #797B86;
      }
    }
  }

</style>
