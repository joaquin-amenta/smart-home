
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/configuracion', component: () => import('pages/Configuracion.vue') },
      { path: '/ayuda', component: () => import('pages/Ayuda.vue') },
      { path: '/luz', component: () => import('pages/Luz.vue') },
      { path: '/luz_regulable', component: () => import('pages/Luz_Regulable.vue') },
      { path: '/temperatura_humedad', component: () => import('pages/Temperatura_Humedad.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
