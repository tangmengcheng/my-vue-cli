<template>
    <div>Page2
        <h1><Page4/></h1>
    </div>
</template>
<script>
import Page4 from './Page4'
export default {
    name: 'Page2',
    inject: ['tmc', 'tmcMethod'], // 形式为数组或者对象
    mounted() {
        console.log(this.tmc)
        this.tmcMethod()
    },
    methods: {
        page2() {
            console.log('父组件通过ref来访问子组件中的方法')
        }
    },
    components: {
        Page4
    }
}
</script>
<style lang="scss" scoped>

</style>