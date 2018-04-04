import firebase from 'firebase'

const state = {
    isFrench: false
}

const getters = {
    isFrench: state => state.isFrench,
}

const mutations = {
    SET_FRENCH (state, payload) {
        return state.isFrench = payload
    },
}

const actions = {
    setFrench ({ commit }, payload) {
        commit('SET_FRENCH', payload)
    },
}

export default {
    state,
    getters,
    mutations,
    actions
}
