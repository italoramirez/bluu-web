const app = new Vue({
    el: '#app',
    data: {
        saludo: 'Ciclo de vida'
    },
    beforeCreate () {
        console.log('beforeCreate')
    },
    created () {
        console.log('beforeCreate')
    },
    beforeMount () {
        console.log('beforeMount')
    },
    mounted () {
        console.log('mounted')
    },
    beforeUpdate () {
        console.log('beforeUpdate')
    },
    updated () {
        console.log('update');
    },
    beforeDestroy () {
        console.log('beforeDestroy');
    },
    destroyed () {
        console.log('destroyed');
    },
    methods: {
        destruir () {
            this.$destroy()
        }
    } 

})