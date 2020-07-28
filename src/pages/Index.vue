<template>
  <q-page class="flex flex-center">
    <div class="column items-center">
      <div class="col">
        <q-btn
          size="22px"
          class="q-px-xl q-py-xl"
          color="deep-orange"
          label="Click Me"
          round
          @click="aumentar"
        />
      </div>
      <div class="col">
        <h3>Clickeaste el boton {{cantidad}} veces</h3>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      cantidad: 0
    }
  },
  methods: {
    aumentar() {
      this.cantidad ++
    }
  }
}
</script>
