<template>
    <h2>Resta y suma unitaria</h2>
    <div class="botones">
      <button @click="$store.commit('menosUnidad')">-</button>
      <button @click="$store.commit('masUnidad')">+</button>
    </div>
</template>

<script>
export default {
    name: "SumaRestaUnitaria"
}
</script>