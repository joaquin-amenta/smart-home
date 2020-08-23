<template>
  <q-page class="q-pa-md q-gutter-xl">
    <div class="column items-center">
      
      <div class="column inline justify-center">
        <div class="row">
          <q-icon class="col self-center" name="img:wifi.svg" size="180px" />
        </div>

        <div class="text-center">
            <h3>Smart Home</h3>
        </div>

        <div class="row justify-around">
          <div class="q-pa-md">
            <div class="col">
              <q-btn to="/luz" round>
                <q-avatar size="100px">
                  <img src="light-bulb.svg">
                </q-avatar>
              </q-btn>
            </div>
            <div class="col text-center q-pa-md">Luz</div>
          </div>

          <div class="q-pa-md">
            <div class="col">
              <q-btn to="/temperatura_humedad" round>
                <q-avatar size="100px">
                  <img src="temperature-control.svg">
                </q-avatar>
              </q-btn>
            </div>
            <div class="col text-center q-pt-md">Temperatura y <br>Humedad</div>  
          </div>

          <div class="q-pa-md">
            <div class="col">
              <q-btn to="/luz_regulable" round>
                <q-avatar size="100px">
                  <img src="lamp.svg">
                </q-avatar>
              </q-btn>
            </div>
            <div class="col text-center q-pa-md">Luz Regulable</div> 
          </div>
        </div>

      </div>


    </div>
  </q-page>
</template>

<script>
export default {

}
</script>
