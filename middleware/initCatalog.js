export default function({store, redirect}) {
    if (!store.getters.getterProductsList) {
        redirect('/catalog/1')
    }
}