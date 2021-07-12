const app = new Vue({
    el: '#app',
    data: {
        titulo: 'Computed',
        contador: 0
    },
    methods: {
        contar() {
            this.contador++;
        },
        // contarMenos() {
        //     this.contador--;
        // }
    }, 
    computed: {
        cargarProgress () {
            return {
                'bg-danger': this.contador <= 10, 
                'bg-warning': this.contador > 10 && this.contador <= 30, 
                'bg-info': this.contador > 30 && this.contador <= 60, 
                'bg-success': this.contador > 60  
            }
        }
    }
})