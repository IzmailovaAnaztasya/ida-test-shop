import createPersistedState from "vuex-persistedstate";

export default ({ store, req }) => {
  createPersistedState({
    key: "yourkey",
    paths: ["basket"]
  })(store);
};