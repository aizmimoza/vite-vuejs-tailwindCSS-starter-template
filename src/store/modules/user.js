export default {
    state: () => ({
        name: 'John Doe',
    }),

    getters: {

    },

    mutations: {
        SET_NAME( state, payload ) {
            state.name = payload;
        }
    },

    actions: {
        save( {commit}, name ) {
            // call mutation and passe data
            commit('SET_NAME', name)
        }
    }
}