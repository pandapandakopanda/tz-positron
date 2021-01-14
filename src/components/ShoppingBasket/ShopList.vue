/* eslint-disable vue/valid-v-for */
<template>
  <ul>
    <ListItem
      v-for='item in data'
      :id='item.id'
      :key='item.id'
      :about='item.about'
      :vendor='item.vendorCode'
      :image='goods[item.id]'
    />
  </ul>
</template>

<script>
import data from '../../assets/data'
import goods from '../../assets/goods/goods'
import ListItem from './ListItem.vue'

export default {
  name: 'ShopList',
  components: {
    ListItem,
  },
  data() {
    return {
      data,
      ListItem,
      goods,
    }
  },
}
</script>

<style>
  ul{
    list-style: none;
    max-width: 800px;
    margin: 0;
    padding: 0;
  }
</style>
