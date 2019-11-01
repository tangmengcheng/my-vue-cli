<template>
    <div>Page3</div>
</template>
<script>
export default {
    name: 'Page3',
    data() {
        return {
            msg: '我是Page3中的属性'
        }
    },
    mounted() {
        console.log(this.$parent)
    }
}
</script>
<style lang="scss" scoped>

</style>