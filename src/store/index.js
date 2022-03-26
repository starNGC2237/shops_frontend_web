import Vue from 'vue'
import Vuex from 'vuex'
import home from './home'
import search from './search'
import cookie from './cookie'
// 需要使用插件一次
Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        home, search, cookie
    }
})
