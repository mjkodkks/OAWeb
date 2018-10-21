import Vuex from 'vuex'

const createStore = () => {
    return new Vuex.Store({
        state: {
            localLang: "th"
        },
        mutations: {
            setNewLocal(state, localLang) {
                state.localLang = localLang;
            }
        },
        getters: {
            localLang: state => state.localLang
        },
        action: {
            setNewLocal: (state, localLang) => {
                state.commit("setNewLocal", localLang)
            }
        }
    })
}

export default createStore