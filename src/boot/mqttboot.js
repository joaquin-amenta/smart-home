import { LocalStorage } from 'quasar'
let mqtt = require('mqtt')


let client = null
let direccion = null
if(LocalStorage.has('brokerKey')){
  /// Si existe guardado localmente una configuracion intento conectarme
  try{
    let broker = LocalStorage.getItem('brokerKey');
    let puerto = LocalStorage.getItem('portKey');
    let protocolo = LocalStorage.getItem('protocolKey');
    if(LocalStorage.getItem('userKey') != '' && LocalStorage.getItem('passKey') != '' ){
      let usuario = LocalStorage.getItem('userKey');
      let pass = LocalStorage.getItem('passKey');
      direccion = protocolo + '://' + broker + ':' + puerto;
      const options = { clientId: 'test', keepalive: 60, clean: true, username: usuario, password: pass};
      client = mqtt.connect(direccion, options);
    }else{
      direccion = protocolo + '://' + broker + ':' + puerto;
      client = mqtt.connect(direccion);
    }
  }
  /// En caso de que ocurra un error lo muestro e intento utilizar la conexion por defecto
  catch(err){
    console.log(err.message)
    client = mqtt.connect('ws://test.mosquitto.org:8080');
  }
    
}else {
  /// Conexion por defecto
    client = mqtt.connect('ws://test.mosquitto.org:8080');
    console.log('Connected ' + client.connected);
}

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
export { client }