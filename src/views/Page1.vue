<template>
    <div>Page1</div>
</template>
<script>
export default {
    name: 'Page1',
    props: {
        love: {
            type: Number,
            default: 0
        }
    },
    inheritAttrs: false, // 将父传给子的属性不显示在节点上，默认为true显示
    mounted() {
        console.log(this.love)
        console.log(this.$attrs)
        // console.log(this.$listeners)
        this.$listeners.change()
    }
}
</script>
<style lang="scss" scoped>

</style>