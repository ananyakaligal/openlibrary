import Vue from 'vue'
import MergeUI from './MergeUI.vue'

Vue.config.productionTip = false

new Vue({
    render: h => h(MergeUI),
}).$mount('#app')
