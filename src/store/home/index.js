import { reqCateGoryList } from '@/api/categorys'

const state = {
    categoryList: []
}

const mutations = {
    CATEGORYLIST(categoryList) {
        state.categoryList = categoryList
    }
}

const actions = {
    async categoryList({ commit }) {
        const result = await reqCateGoryList()
        if (result.code == 200) {
            commit('CATEGORYLIST', result.data)
        }
    }
}

const getters = {}
export default {
    state,
    mutations,
    actions,
    getters
}
