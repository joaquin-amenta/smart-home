<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          Menu
        </q-toolbar-title>

        <q-btn 
            v-if="$route.fullPath.includes('/configuracion') || 
                  $route.fullPath.includes('/luz') || 
                  $route.fullPath.includes('/luz_regulable') || 
                  $route.fullPath.includes('/temperatura_humedad') ||
                  $route.fullPath.includes('/ayuda')"
            to="/"
            icon="arrow_back" 
            flat
            dense
            label="Atras" />
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label header class="text-grey-8">
          Smart-Home
        </q-item-label>

        <q-item clickable exact to="/">
          <q-item-section avatar>
            <q-icon name="home" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Inicio</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable exact to="/luz">
          <q-item-section avatar>
            <q-icon name="brightness_5" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Luz</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable exact to="/luz_regulable">
          <q-item-section avatar>
            <q-icon name="model_training" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Luz Regulable</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable exact to="/temperatura_humedad">
          <q-item-section avatar>
            <q-icon name="eco" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Temperatura y Humedad</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable exact to="/configuracion">
          <q-item-section avatar>
            <q-icon name="settings" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Configuracion</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable exact to="/ayuda">
          <q-item-section avatar>
            <q-icon name="help" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Ayuda</q-item-label>
          </q-item-section>
        </q-item>
        

      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

export default {
  name: 'MainLayout',
  data () {
    return {
      leftDrawerOpen: false
    }
  }
}
</script>
