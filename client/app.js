import Vue from 'vue'
import App from '@/App.vue'
import 'view-design/dist/styles/iview.css'
import { Button, Input, Tag, Modal, Page, Dropdown, DropdownMenu, DropdownItem, Spin, Message, Icon } from 'view-design'
import { createRouter } from '@/router'
import { createStore } from '@/store'
import { sync } from 'vuex-router-sync'

Vue.component('Button', Button)
Vue.component('Input', Input)
Vue.component('Tag', Tag)
Vue.component('Modal', Modal)
Vue.component('Page', Page)
Vue.component('Dropdown', Dropdown)
Vue.component('DropdownMenu', DropdownMenu)
Vue.component('DropdownItem', DropdownItem)
Vue.component('Spin', Spin)
Vue.component('Icon', Icon)

Vue.prototype.$Message = Message

// 解决 [vue-router] failed to resolve async component default: referenceerror: window is not defined 问题
if (typeof window === 'undefined') {
    global.window = {}
}

export function createApp() {
    const router = createRouter()
    const store = createStore()

    // 将 router 挂载到 store 中，可以通过 store.state.route 访问
    sync(store, router)

    const app = new Vue({
        router,
        store,
        render: h => h(App)
    })

    return { app, router, store }
}
