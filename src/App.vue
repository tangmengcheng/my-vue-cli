<template>
    <div>
        <div>
        你好123213
    </div>
    <div>
        <router-link to="/Home">go Home</router-link>
        <router-link to="/About">go About</router-link>
    </div>
    <div>
        <p>{{ getCounter }}</p>
        <button @click="add">add</button>
    </div>
    <Page1 :tmc="123" :sfm="456" :love="789" @change="change1"/>
    <Page2 ref="page2" />
    <Page3 />
    <div>
        <router-view></router-view>
    </div>
    </div>
</template>
<script>
// import Page1 from './views/Page1'
// import Page2 from './views/Page2'
// import Page3 from './views/Page3'
import { mapActions, mapGetters } from 'vuex';
const path = require('path')
const files = require.context('./views', false, /\.vue$/)
const modules = {}
files.keys().forEach(key => {
    const name = path.basename(key, '.vue')
    modules[name] = files(key).default || files(key)
})
export default {
    computed: {
        ...mapGetters(['getCounter'])
    },
    provide: { // 注意：provide和inject绑定并不是可响应式的；如果你传入了一个可监听的对象，那么其对象的属性还是可响应的,对象是因为是引用类型
        tmc: '汤梦成',
        tmcMethod: () => {
            console.log('提供给子孙组件调用的')
        }
    },
    mounted() {
        console.log(this.$children) // this.$children $parent不是响应式的 只能拿到一级父组件和子组件
        console.log(this.$refs.page2.page2())
    },
    methods: {
        ...mapActions(['add']),
        change1() {
            console.log('this.$listeners测试')
        }
    },
    components: modules
    // components: {
    //     Page1,
    //     Page2,
    //     Page3
    // }
}
</script>
<style lang="scss" scoped>

</style>
