export const state = () => ({
  showBasket: false,
  basketProducts: [],
  isOrdering: false,
})

export const mutations = {
    openBasket(state) {
        state.showBasket = true
    },
    closeBasket(state) {
        state.showBasket = false,
        state.isOrdering = false
    },
    setToProduct(state, product) {
        const basketId = state.basketProducts.length ? state.basketProducts.length + Math.random() : 1
        state.basketProducts.push({...product,_id:basketId})
        //console.log(state.basketProducts)
    },
    removeProduct(state, index) {
        state.basketProducts.splice(index, 1)
        //console.log(state.basketProducts);
    },
    checkoutSuccess(state){
        state.basketProducts = [];
        state.isOrdering = true;
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
    isOrdering: s => s.isOrdering,
    basketProductsCount(state) {
        return state.basketProducts.length;
    },
}