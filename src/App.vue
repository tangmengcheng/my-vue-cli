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
    <div>
        <router-view></router-view>
    </div>
    </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';
export default {
    computed: {
        ...mapGetters(['getCounter'])
    },
    methods: {
        ...mapActions(['add'])
    }
}
</script>
<style lang="scss" scoped>

</style>
