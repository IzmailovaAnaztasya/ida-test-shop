export const state = () => ({
    categories: [],
    activeCategory: 1
  })
  
  export const mutations = {
    setCategories(state, categories) {
      state.categories = categories
    },
    setActiveCategories(state) {
      state.categories = categories
    }
  }
  
  export const actions = {
    async nuxtServerInit({commit}) {
      const categories = await this.$axios.$get('https://front-test.idalite.com/api/product-category')  
        commit('setCategories', categories)
    },
  }
  
  export const getters = {
    categories: s => s.categories
  }
