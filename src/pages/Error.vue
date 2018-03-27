<template>
    <div>
        <h1>404</h1>
        <p>{{countText}}</p>
        <button @click="addCount">点击增加</button>
    </div>
</template>
<script>
    import { mapGetters, mapActions } from 'vuex'
    export default{
        computed: {
            ...mapGetters(['countText'])
        },
        methods: {
            ...mapActions(['addCount'])
        }
    }
</script>