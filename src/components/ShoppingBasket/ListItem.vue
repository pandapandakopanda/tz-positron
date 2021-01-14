<template>
  <div class='item_wrapper'>
    <img
      :src='image'
      alt='image'
    >
    <div
      class='item_data'
    >
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
    <Counter />
  </div>
</template>

<script>
import Counter from './Counter.vue'

export default {
  name: 'ListItem',
  components: {
    Counter,
  },
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
    image: {
      type: Image,
      default: '',
    },
  },
  methods: {
  },

}
</script>

<style lang='scss' scoped>
  .item_wrapper {
    display: flex;
    max-width: 800px;
    max-height: 145px;
    margin-top: 30px;
    border-bottom: 1px solid #C4C4C4;
    img {
      width: 100px;
      height: 100px;
    }
  }
  .item_data {
    display:flex;
    flex-direction: column;
    cursor: pointer;
    .about {
      margin-left: 30px;
      p {
        margin-bottom: 23px;
      }
      #title{
        font-weight: 600;
        font-size: 16px;
        line-height: 23px;
        color: #1F2432;
      }
      #about {
        font-size: 12px;
        line-height: 18px;
        color: #2C3242;
      }
      #vendor_code {
        font-size: 14px;
        line-height: 21px;
        color: #797B86;
      }
    }
  }

</style>
