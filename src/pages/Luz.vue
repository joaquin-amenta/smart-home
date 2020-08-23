<template>
    <q-page class="q-pa-md">
        <div class="column items-center">
            <div class="col">
                <h4 class="q-py-sm q-px-lg titulo">LUZ</h4>
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
import { mapActions, mapState, mapMutations } from 'vuex';
import { QSpinnerGears } from 'quasar'

export default {
  data () {
    return {
        estado: 'Apagada', //estado del led o de la luz
        timer: null
    }
  },
  methods: {
    ...mapActions('store', ['switchLuz']),
    ...mapMutations('store', ['actualizarMensaje']),
    cambiarEstado(){ 
        /// al tocar el btn-toggle cambia entre encendido y apagado
        this.switchLuz(this.estado);
        this.actualizarMensaje(false);
    }
  },
  computed: {
      ...mapState('store', ['luz', 'mensaje']),
      estadoLuz() {
          return this.luz.estado
      },
      mensajeRecibido() {
          return this.mensaje.recibido
      }
  },
  watch: {
      estadoLuz(){
          this.estado = this.luz.estado
      },
      mensajeRecibido() {
          if(this.mensaje.recibido){
            this.$q.loading.hide()
            clearTimeout(this.timer)
            }else{
                this.$q.loading.show({
                    spinner: QSpinnerGears,
                    message: 'Recibiendo/Actualizando datos'
                })
                this.timer = setTimeout(() =>{
                    if(this.$q.loading.isActive){
                        this.$q.loading.hide()
                        this.$q.notify({
                            message: 'No se recibio respuesta del broker.',
                            caption: 'Asegure su conexion a internet o revise la configuracion.',
                            type: 'negative',
                            position: 'center',
                            multiLine: true,
                            actions: [{
                                label: 'Configuracion', color: 'white', handler: () => { window.location.href = '/#/configuracion';}
                            }]
                        })
                    }
                }, 30000)
            }
      }
  },
  mounted() {
      this.estado = this.luz.estado
      this.actualizarMensaje(false);
  }
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