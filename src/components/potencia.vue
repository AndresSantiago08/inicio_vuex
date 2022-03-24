<template>
    <div>
      {{$store.state.contador}} <sup>2</sup> = {{ $store.getters.potencia }}
    </div>
</template>

<script>
export default {
    name: "Potencia"
}
</script>