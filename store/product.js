export const state = () => ({
    productsList: [],
    productsCategory: [],
})

export const mutations = {
    setCategory(state, category) {
        state.productsCategory = category
        //console.log(state.productsCategory);
    },

    setProducts(state, products) {
        state.productsList = products
        // console.log(state.productsList[100]);
    },
    
    setAllProducts(state, products) {
        state.productsList = products
        // console.log(state.productsList[100]);
    },

    sortProdPrice(state) {
        state.productsList.sort((a, b) => a.price - b.price)
    },
    sortProdRating(state) {
        state.productsList.sort((a, b) => b.rating - a.rating)
    },
}

export const actions = {
    async getProductsCategory({commit}) {
        const category = await this.$axios.$get('https://front-test.idalite.com/api/product-category')
        commit('setCategory', category)
    },

    // category = важно
    async getProductsList({commit}, category) {
        const products = await this.$axios.$get('https://front-test.idalite.com/api/product?category=' + category)
        commit('setProducts', products)
    },

    async getAllProductsList({commit}) {
        const products = await this.$axios.$get('https://front-test.idalite.com/api/product')
        commit('setAllProducts', products)
    },
}

export const getters = {
    getterProductsCategory(state) {
        return state.productsCategory
    },

    getterProductsList(state) {
        return state.productsList
    },
    
    allProducts(state) {
        return state.productsList
    },
}

