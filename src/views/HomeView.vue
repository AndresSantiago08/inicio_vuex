<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    
    <Contador/>

    <Potencia/>

    <SumaRestaUnitaria/>

    <SumaRestaAleatoria/>
    
  </div>
</template>

<script>
import Contador from "../components/MostrarContador.vue";
import Potencia from "../components/potencia.vue";
import SumaRestaUnitaria from "../components/SumaRestaUnitaria.vue";
import SumaRestaAleatoria from "../components/SumaRestaAleatoria.vue";

export default {
  name: 'HomeView',
  components: {
    Contador,
    Potencia,
    SumaRestaUnitaria,
    SumaRestaAleatoria,
  }
}
</script>

<style>
  div{
    margin-bottom: 10px;
  }

  .contador{
    font-size: 60px;
  }

  .botones button{
    width: 100px;
    font-size: 30px;
    margin: 10px;
  }
</style>