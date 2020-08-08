<template>
    <q-page class="q-pa-md">
        <div class="column items-center">
            <div class="col">
                <h3 class="q-py-sm q-px-xl titulo">Temperatura y Humedad</h3>
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
import { mapActions, mapState } from 'vuex'

export default {
    computed: {
        ...mapState('store', ['sensor'])
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