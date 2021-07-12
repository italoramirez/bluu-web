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

// const app = new Vue({
//     el: '#app'
// })
