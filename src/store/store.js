import Vue from 'vue'
import { client } from 'boot/mqttboot'

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
        try {
            client.on('connect', function () {
                client.subscribe('casa/luz/estado');
                client.subscribe('casa/luz_reg/intensidad');
                client.subscribe('casa/sensor/temperatura');
                client.subscribe('casa/sensor/humedad');
              })
            }
        catch(err){
                console.log(err.message);
            }
    },
    publicar(state, payload){
        /// Funcion para publicar un mensaje en un topico
        try{
            client.publish(payload.ruta, payload.mensaje, { retain: true })
        }
        catch(err){
            console.log(err.message);
        }
    },
    escuchar({ commit }){
        /// Funcion para recibir el mensaje del broker
        let topicos = {
            'casa/luz/estado': function(message){
                let detalleLuz = message.toString()
                let claveLuz = 'estado'
                commit('actualizarLuz', {
                    detalleLuz,
                    claveLuz
                })
            },
            'casa/luz_reg/intensidad': function(message){
                let detalleLuz_reg = message.toString()
                let claveLuz_reg = 'intensidad'
                commit('actualizarLuz_reg', {
                    detalleLuz_reg,
                    claveLuz_reg
                })
            },
            'casa/sensor/temperatura': function(message){
                let detalleSensor = message.toString()
                let claveSensor = 'temperatura'
                commit('actualizarSensor', {
                    detalleSensor,
                    claveSensor
                })
            },
            'casa/sensor/humedad': function(message){
                let detalleSensor = message.toString()
                let claveSensor = 'humedad'
                commit('actualizarSensor', {
                    detalleSensor,
                    claveSensor
                })
            }
        }

        client.on('message', function(topic, message){
            topicos[topic](message)
        })
    },
    switchLuz({dispatch}, payload){
        /// Funcion que se ejecuta al encender/apagar luz
        ///actualizo broker
        dispatch('publicar', {
            ruta: 'casa/luz/estado',
            mensaje: payload
        })
    },
    cambiarIntensidadLuz_reg({dispatch}, payload){
        /// Funcion que se ejecuta al cambiar el slide de la luz_reg
        ///actualizo broker
        dispatch('publicar', {
            ruta: 'casa/luz_reg/intensidad',
            mensaje: payload
        })
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
