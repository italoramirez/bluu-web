const app = new Vue({
    el: '#app',
    data: {
        titulo: '',
        frutas: ['papaya', 'banano', 'pera'],
        frut: '',
        melones: [
            {
                nombre: 'pera',
                cantidad: 10
            },
            {
                nombre: 'manzana',
                cantidad: 1
            },
            {
                nombre: 'uva',
                cantidad: 0
            }
        ],
        nuevaFruta: '',
        nuevaCantidad: '',
        total: 0
    }, 
    methods: {
        agregarFruta () {
            console.log('click')
            // this.frutas.push(this.frut);
            this.melones.push({
                nombre: this.nuevaFruta, 
                cantidad: this.nuevaCantidad
            })
            this.nuevaFruta = '';
            this.cantidad = ''
            this.limpiarCampos();
        },
        limpiarCampos () {
            this.frut = '';
        }
    },
    computed: {
        sumarFrutas () {
            this.total = 0;
            for( melon of this.melones) {
                this.total += melon.cantidad;
            } 
            return this.total;
        }
    }
})