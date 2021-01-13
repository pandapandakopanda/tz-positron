/* eslint-disable no-plusplus */
import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      shopcounter: 0,
    }
  },
  mutations() {
    return {
      increase(state) {
        console.log('work')
        return state.shopcounter++
      },
    }
  },
})

export default store
