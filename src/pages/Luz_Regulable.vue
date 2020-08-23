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
import { mapActions, mapState } from 'vuex'

export default {
    data(){
        return{
            intensidad: null
        }
    },
    methods: {
        ...mapActions('store', ['cambiarIntensidadLuz_reg']),
        cambiarIntensidad(intensidad){
            let aux = intensidad.toString()
            this.cambiarIntensidadLuz_reg(aux)
        }
    },
    computed: {
        ...mapState('store', ['luz_reg']),
        intensidadLuz_reg() {
            return this.luz_reg.intensidad
        }
    },
    watch: {
        intensidadLuz_reg(){
            this.intensidad = parseInt(this.luz_reg.intensidad)
        }
    },
    mounted() {
        this.intensidad = parseInt(this.luz_reg.intensidad)
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