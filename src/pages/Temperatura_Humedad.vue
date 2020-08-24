<template>
    <q-page class="q-pa-md">
        <div class="column items-center">
            <div class="col">
                <h4 class="q-py-sm q-px-lg titulo text-center">TEMPERATURA Y HUMEDAD</h4>
            </div>
            <div class="col q-ma-md">
                <q-icon name="img:thermometer.svg" size="200px"/>
            </div>
            <div class="col"><h6>Temperatura = {{sensor.temperatura}}°C</h6></div>
            <div class="col"><h6>Humedad = {{sensor.humedad}}%</h6></div>
        </div>
    </q-page>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import { QSpinnerGears } from 'quasar'

export default {
    data(){
        return{
            timer: null
        }
    },
    methods: {
        ...mapMutations('store', ['actualizarMensaje'])
    },
    computed: {
        ...mapState('store', ['sensor', 'mensaje']),
        mensajeRecibido() {
            return this.mensaje.recibido
        }
    },
    watch:{
        mensajeRecibido(){
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
                            progress: true,
                            timeout: 6000,
                            actions: [{
                                label: 'Configuracion', color: 'white', handler: () => {this.$router.push('/configuracion')}
                            }]
                        })
                    }
                }, 30000)
            }
        }
    },
    mounted() {
        this.actualizarMensaje(false);
    }
}
</script>

<style lang="scss" scoped>
.myslider{
    max-width: 500px;
    margin:0 auto;
    color:darkgoldenrod;
}
.bordeado{
    border: 1px solid;
    border-radius: 20px;

}
.titulo{
    border: 1px solid;
    border-radius: 40px;
}
</style>