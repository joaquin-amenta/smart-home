<template>
    <q-page class="q-pa-md">
        <div class="column items-center">
            <div class="col">
                <h3 class="q-py-sm q-px-xl titulo">LUZ</h3>
            </div>
            <div class="col">
                <q-icon name="img:ceiling-lamp.svg" size="200px"/>
            </div>
            <div class="col"><h5 class="q-mb-md q-px-lg q-py-xs bordeado">Estado</h5></div>
            <div class="col">
                <h6 class="q-mt-md" style="color: orange"><strong>{{ estado }}</strong></h6>
                
            </div>
            <div class="col q-ma-md">
                <q-btn-toggle
                    v-model="estado"
                    class="my-custom-toggle"
                    no-caps
                    @input="cambiarEstado"
                    rounded
                    unelevated
                    toggle-color="primary"
                    color="white"
                    text-color="primary"
                    :options="[
                    {label: 'On', value: 'Encendida'},
                    {label: 'Off', value: 'Apagada'}
                    ]"
                 />
            </div>
            
        </div>
    </q-page>
</template>

<script>
// import { mapActions, mapState } from 'vuex'

export default {
  data () {
    return {
        estado: 'Apagada' //estado del led o de la luz
    }
  },
  methods: {
    // ...mapActions('store', ['switchLuz']),
    cambiarEstado(){ 
        //al tocar el btn-toggle cambia entre encendido y apagado
        // this.switchLuz(this.estado)


    }
  }
// ,
//   computed: {
//       ...mapState('store', ['luz']),
//       estadoLuz() {
//           return this.luz.estado
//       }
//   },
//   watch: {
//       estadoLuz(){
//           this.estado = this.luz.estado
//       }
//   },
//   mounted() {
//       this.estado = this.luz.estado
//   }
}



</script>

<style lang="scss" scoped>
.bordeado{
    border: 1px solid;
    border-radius: 20px;

}
.my-custom-toggle{
  border: 1px solid #027be3;
}

.titulo{
    border: 1px solid;
    border-radius: 40px;
}
</style>