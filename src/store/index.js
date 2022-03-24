import { createStore } from 'vuex'

export default createStore({
  state: {
    contador: 0
  },
  getters: {
    potencia(state){
      return state.contador * state.contador;    
    }
  },
  mutations: {
    menosUnidad(state){
      state.contador--;
    },
    masUnidad(state){
      state.contador++;
    },
    menosAleatorio(state, aleatorio){
      state.contador -= aleatorio;
    },
    masAleatorio(state, aleatorio){
      state.contador += aleatorio;
    }
  },
  actions: {
    async menosAleatorio({ commit }){
      const res = await fetch("https://www.random.org/integers/?num=1&min=1&max=9&col=1&base=10&format=plain&rnd=new");
      const results = await res.json();
      console.log("-" + results);
      commit("menosAleatorio", results)
    },
    async masAleatorio({ commit }){
      const res = await fetch("https://www.random.org/integers/?num=1&min=1&max=9&col=1&base=10&format=plain&rnd=new");
      const results = await res.json();
      console.log(results);
      commit("masAleatorio", results)
    }
  },
  modules: {
  }
})
