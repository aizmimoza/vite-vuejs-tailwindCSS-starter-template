import { createStore } from "vuex";
import user from './modules/user'

const store = createStore({
    modules: {
        user,
    },

    getters: {},

    mutations: {},

    actions: {},
})

export default store;