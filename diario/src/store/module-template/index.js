
import state from './state'
import * as from './actions'
import * as from './getters'
import * as from './mutations'


const myCustomModule = {
    namespaced: true,
    actions,
    getters,
    mutations,
    state
}

export default myCustomModule
