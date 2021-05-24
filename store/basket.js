export const state = () => ({
  showBasket: false,
  basketProducts: [],
})

export const mutations = {
    openBasket(state) {
        state.showBasket = true
    },
    closeBasket(state) {
        state.showBasket = false
    },
    setToProduct(state, product) {
        const basketId = state.basketProducts.length ? state.basketProducts.length + Math.random() : 1
        state.basketProducts.push({...product,_id:basketId})
        console.log(state.basketProducts)
    },
    removeProduct(state, index) {
        state.basketProducts.splice(index, 1)
        console.log(state.basketProducts);
    }
}

export const actions = {
    addToProduct({commit}, product) {
        commit('setToProduct', product)        
    },
    deleteToProduct({commit}, index) {
        commit('removeProduct', index)
    },
}

export const getters = {
    isOpenBasket(state) {
        return state.showBasket
    },
    basketProducts: s => s.basketProducts,
    basketProductsCount(state) {
        return state.basketProducts.length;
    },
}