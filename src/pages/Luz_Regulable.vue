<template>
    <q-page class="q-pa-md">
        <div class="column items-center">
            <div class="col">
                <h4 class="q-py-sm q-px-lg titulo">LUZ REGULABLE</h4>
            </div>
            <div class="col q-ma-md">
                <q-icon name="img:desk-lamp.svg" size="200px"/>
            </div>
            <div class="col"><h6 class="q-mb-md q-px-lg q-py-xs bordeado">Intensidad</h6></div>
            <div class="col"><h5><strong>{{intensidad}}</strong></h5></div>
        </div>
            <q-slider class="myslider" v-model="intensidad" @change="cambiarIntensidad(intensidad)" :min="0" :max="100"/>
    </q-page>
</template>

<script>
import { mapActions, mapState, mapMutations } from 'vuex'
import { QSpinnerGears } from 'quasar'

export default {
    data(){
        return{
            intensidad: null,
            timer: null
        }
    },
    methods: {
        ...mapActions('store', ['cambiarIntensidadLuz_reg']),
        ...mapMutations('store', ['actualizarMensaje']),
        cambiarIntensidad(intensidad){
            let aux = intensidad.toString()
            this.cambiarIntensidadLuz_reg(aux)
            this.actualizarMensaje(false)
        }
    },
    computed: {
        ...mapState('store', ['luz_reg', 'mensaje']),
        intensidadLuz_reg() {
            return this.luz_reg.intensidad
        },
        mensajeRecibido() {
            return this.mensaje.recibido
        }
    },
    watch: {
        intensidadLuz_reg(){
            this.intensidad = parseInt(this.luz_reg.intensidad)
        },
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
        this.intensidad = parseInt(this.luz_reg.intensidad)
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