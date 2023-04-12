export const state = () => ({
    products: []
})

export const mutations = {
    ADD_PRODUCT(state, product) {
      state.products = [{id:product, name: product, title: product, content: product,price: product}, ...state.products];
    },
    REMOVE_TASK(state,product) {
        state.products.splice(state.products.indexOd(product),1)
    }
}
