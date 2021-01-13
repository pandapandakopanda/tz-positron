/* eslint-disable vue/valid-v-for */
<template>
  <ul>
    <ListItem
      v-for='item in data'
      :id='item.id'
      :key='item.id'
      :about='item.about'
      :vendor='item.vendorCode'
    />
  </ul>
</template>

<script>
import data from '../../assets/data'
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
    }
  },
}
</script>

<style>

</style>
