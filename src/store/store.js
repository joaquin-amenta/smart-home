import Vue from 'vue'


const state = {
    luz: {
        estado: 'Apagada'
    },
    luz_reg: {
        intensidad: 0
    },
    sensor: {
        temperatura: 0,
        humedad: 0
    }
}
const mutations = {
    /// Modifican las variables locales del state
    actualizarLuz(state,payload) {
        Vue.set(state.luz, payload.claveLuz, payload.detalleLuz)
    },
    actualizarLuz_reg(state,payload) {
        Vue.set(state.luz_reg, payload.claveLuz_reg, payload.detalleLuz_reg)
    },
    actualizarSensor(state,payload) {
        Vue.set(state.sensor, payload.claveSensor, payload.detalleSensor)
    }
}
const actions = {
    subscribirse(){
        /// Funcion para subscribirse a los topicos
    },
    publicar(){
        /// Funcion para publicar un mensaje en un topico
    },
    escuchar(){
        /// Funcion para recibir el mensaje del broker
    },
    switchLuz(){
        /// Funcion que se ejecuta al encender/apagar luz
    },
    cambiarIntensidadLuz_reg(){
        /// Funcion que se ejecuta al cambiar el slide de la luz_reg
    }
}
const getters = {

}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}
