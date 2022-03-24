<template>
    <h2>Resta y suma aleatoria</h2>
    <div class="botones">
      <button @click="$store.dispatch('menosAleatorio')">-</button>
      <button @click="$store.dispatch('masAleatorio')">+</button>
    </div>
</template>

<script>
export default {
    name: "SumaRestaAleatoria"
}
</script>