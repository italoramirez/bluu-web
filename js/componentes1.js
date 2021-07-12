Vue.component('contador', {
    template://html 
    `  
          <div>
              <h3>{{ numero }}</h3>
              <button @click="numero++">+</button>
          </div>
    `,
    data() {
      return {
        numero: 0,
      }
    }
});
  

Vue.component('saludo', {
   template: //html
    `
        <div>
            <h1>{{ saludo }}</h1>
            <h3>fdgfgf</h3>
        </div>
    `,
   data(){
       return {

           saludo: 'hola desde vue'
       }
   }
});
const app = new Vue({
    el: '#app',
})