# Smart-Home

Es un proyecto multiplataforma de IoT el cual se conecta a un broker MQTT para recibir valores de temperatura y humedad, controlar un led y un dimmer, conectados a una placa NodeMCU 8266.

## Getting Started

Instrucciones para la correcta descarga e instalación del proyecto en una máquina local para propósitos de desarrollo y testeo.

### Prerequisitos

Para comprobar si Node.js y npm están instalados y actualizados, puede verificarse su versión.

```
npm -v
```

Debe contarse con el framework quasar.

Para el desarrollo mobile se requiere android studio, JDK, la version 4.10.3 de gradle y la version de android-28 en el SDK.

### Instalación

Para instalar todos los paquetes necesarios y sus dependencias, utilizar npm. En caso de que esto falle, eliminar el paquete package-lock.json y ejecutar este comando nuevamente.

```
npm i
```

Para comprobar que la aplicación está corriendo correctamente, ejecutar el siguiente comando:

```
quasar dev
```

Como resultado se abrira en una pestaña de navegador la direccion localhost:8000 con la aplicacion. 

### Desarollo mobile

Para desarrollo mobile
```
npm install -g cordova

quasar mode add cordova

```

Ingresar a la carpeta src-cordova
```
cd src-cordova
```

Dentro de esta carpeta ejecutar los siguientes comandos
```
cordova platform add android

cordova requirements 
```
Este ultimo comando muestra si se cumplen los requisitos

En caso de que todo este bien, el siguiente comando abrira android studio donde se podra testear la app con el AVD
```
quasar dev -m cordova -T android --ide
```


## Deployment

Para deployment web 

```
quasar build
```

Para deployment mobile se puede utilizar android studio abriendolo con el siguiente comando
```
quasar build -m android --ide
```

## Hardware

La aplicacion recibe los datos de temperatura y humedad de un sensor DHT 11 conectado a una placa NodeMCU.
El codigo y el funcionamiento se puede encontrar en el [proyecto en el cual esta basado este.](https://github.com/EzequielSalagoity/Trabajo_Final_POO-Smart-Home)

## Built With

* [Quasar](https://quasar.dev/) - Framework para desarrollo multiplataforma
* [Vue.js](https://vuejs.org/v2/guide/) - Framework de JavaScript progresivo
* [mqtt.js](https://www.npmjs.com/package/mqtt) - Paquete de node para la conexion al broker mqtt

## Versioning

Se utiliza [GitHub](http://github.com/) para control de versiones. 

## Autores

* **Joaquin Amenta** - *Initial work* - [joaquin-amenta](https://github.com/joaquin-amenta)
* **Ezequiel Salagoity** *First Approach and Hardware Programming* - [EzequielSalagoity](https://github.com/EzequielSalagoity)



## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

