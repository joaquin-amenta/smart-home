<template>
    <q-page class="q-pa-md">
        <div class="q-gutter-y-md column items-center">
            <div class="q-mt-md">
                <h4 class="q-py-sm q-px-lg titulo">CONFIGURACION</h4>
            </div>
            <div class="q-ma-md">
                <q-icon name="img:settings.svg" size="200px"/>
            </div>

            <div class="row">
                <div class="col q-ma-md casilla">
                    <q-select outlined v-model="protocolo" :options="listaProtocolos" label="Protocolo: " 
                    :rules="[val => !!val || 'Campo obligatorio']"/>
                </div>
            </div>
            <div class="row">
                <div class="col q-ma-md casilla">
                    <q-input outlined v-model="broker" placeholder="Direcion IP" label="Broker:" type="text"
                    :rules="[val => !!val || 'Campo obligatorio']" />
                </div>
                <div class="col q-ma-md casilla">
                    <q-input outlined v-model="puerto" placeholder="xxxx" label="Puerto:" type="number"
                    :rules="[val => !!val || 'Campo obligatorio']"/>
                </div>
            </div>
            <div class="row">
                <div class="col q-ma-md casilla">
                    <q-input outlined v-model="usuario" placeholder="Nombre" label="Usuario:" type="text"/>
                </div>
                <div class="col q-ma-md casilla">
                    <q-input outlined v-model="contraseña" placeholder="xxxxxx" label="Contraseña:" type="password"/>
                </div>
            </div>

            <div class="row justify-around">
                <div class="col-xs-6 col-md-4 q-ma-md">
                    <q-btn @click="guardarCambios" label="Guardar" type="submit" color="primary" size="20px"/>
                </div>
                <div class="col-xs-7 col-md-4 q-ma-md">
                    <q-btn @click="restaurarValores" label="Restaurar" type="submit" color="red" size="20px"/>
                </div>
            </div>

            <div class="info-actual">
                Protocolo: {{this.$q.localStorage.getItem('protocolKey')}}
                <br>
                Broker: {{this.$q.localStorage.getItem('brokerKey')}}
                <br>
                Puerto: {{this.$q.localStorage.getItem('portKey')}}
            </div>
                
                
            
        </div>
    </q-page>
</template>

<script>
import { LocalStorage, SessionStorage } from 'quasar'
import { mapActions } from 'vuex'


export default {
    data() {
        return {
            broker: '',
            puerto: '',
            usuario: '',
            contraseña: '',
            protocolo: '',
            listaProtocolos: ['mqtt', 'ws', 'wss']
        }
    },
    methods: {
        ...mapActions('store', ['subscribirse']),
        guardarCambios(){
            if(!this.broker || !this.puerto || !this.protocolo){
                this.$q.notify({
                    type: 'negative',
                    message: 'Campo obligatorio incompleto',
                    position: 'top'
                })
            }else{
                try{
                    LocalStorage.set('brokerKey', this.broker);
                    LocalStorage.set('portKey', this.puerto);
                    LocalStorage.set('userKey', this.usuario);
                    LocalStorage.set('passKey', this.contraseña);
                    LocalStorage.set('protocolKey', this.protocolo);
                    // this.subscribirse();
                } catch (e) {
                    console.log(e);
                }
                this.$q.notify({
                    message: 'Cambios guardados',
                    color: 'green-4',
                    textColor: 'white',
                    icon: 'cloud_done',
                    position: 'top'
                })
                this.$q.notify({
                    message: 'Es necesario recargar la pagina para que hagan efecto los cambios',
                    type: 'warning',
                    position: 'top',
                    actions: [
                    { label: 'Recargar', color: 'white', handler: () => { location.reload() } }
                    ]
                })
            }
        },
        inicializar(){
            if(LocalStorage.has('brokerKey')){this.broker = LocalStorage.getItem('brokerKey')}
            if(LocalStorage.has('portKey')){this.puerto = LocalStorage.getItem('portKey')}
            if(LocalStorage.getItem('userKey') != 'null'){this.usuario = LocalStorage.getItem('userKey')}
            if(LocalStorage.getItem('passKey') != 'null'){this.contraseña = LocalStorage.getItem('passKey')}
            if(LocalStorage.has('protocolKey')){this.protocolo = LocalStorage.getItem('protocolKey')}
        },
        restaurarValores(){
            this.$q.dialog({
                    title: 'DESEA RESTAURAR LA CONFIGURACION POR DEFECTO',
                    message: 'ESTA ACCION NO SE PUEDE DESHACER',
                    cancel: true,
                    persistent: true
                }).onOk(() => {
                    LocalStorage.remove('brokerKey')
                    LocalStorage.remove('portKey')
                    LocalStorage.remove('userKey')
                    LocalStorage.remove('passKey')
                    LocalStorage.remove('protocolKey')
                    const dialog = this.$q.dialog({
                    title: 'Se restauraron los valores'
                    }).onOk(() => {
                        // console.log('OK')
                    }).onCancel(() => {
                        // console.log('Cancel')
                    }).onDismiss(() => {
                        clearTimeout(timer)
                        location.reload()
                        // console.log('I am triggered on both OK and Cancel')
                    })
                    const timer = setTimeout(() => {
                        dialog.hide()
                    }, 2000)
                }).onOk(() => {
                    // console.log('>>>> second OK catcher')
                }).onCancel(() => {
                    // console.log('>>>> Cancel')
                }).onDismiss(() => {
                    // console.log('I am triggered on both OK and Cancel')
                })

            
        }
    },
    mounted() {
        this.inicializar();
    }
}
</script>




<style lang="scss" scoped>
.titulo{
    border: 1px solid;
    border-radius: 40px;
}
.info-actual{
    color: grey;
}
.casilla{
    max-width: 255px;
    min-width: 132px;
    align-self: center;
}
</style>