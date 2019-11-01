<template>
    <div>Page4</div>
</template>
<script>
export default {
    name: 'Page4',
    inject: ['tmc', 'tmcMethod'],
    mounted() {
        console.log(`孙子组件：${this.tmc}`)
        console.log('孙子组件调父组件的方法')
        this.tmcMethod()
    }
}
</script>
<style lang="scss" scoped>

</style>