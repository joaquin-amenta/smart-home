<template>
    <q-page class="q-pa-md">
        <div class="column items-center">
            <div class="col">
                <h4 class="q-py-sm q-px-lg titulo">AYUDA</h4>
            </div>
            <div class="col">
                <p>1. Asegurese de que esta conectado al broker y puerto adecuado, revise la pagina de configuracion</p>
                <p>2. A menos que sea necesario, deje en blanco los espacios de 'Usuario' y 'Contraseña'</p>
                <p>3. Restaure los datos por defecto en la pagina 'Configuracion'</p>
                <p>4. Recargue la pagina</p>
                <p>5. Si no observa datos en la pagina 'Temperatura y Humedad' revise que el sensor esta encendido y conectado al mismo broker que usted</p>
                <p>6. La aplicacion busca la informacion del sensor en los topicos 'casa/sensor/temperatura' y 'casa/sensor/humedad'</p>
                <p>7. Utilice otro navegador (Aplicacion Web)</p>
            </div>
        </div>
    </q-page>
</template>


<style lang="scss" scoped>
.titulo{
    border: 1px solid;
    border-radius: 40px;
}
</style>