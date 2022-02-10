import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'seguimiento/nuevos', component: () => import('pages/Index.vue') }
    ],
  },

  {
    path: '/usuarios',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 'administradores', component: () => import('pages/usuarios/Administradores.vue') },
    ]
  },

  {
    path: '/catalogos',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 'dependencias', component: () => import('pages/catalogos/Dependencias.vue') },
      { path: 'areas', component: () => import('pages/catalogos/Servicios.vue') },
      { path: 'servicios', component: () => import('pages/catalogos/Servicios.vue') },
      { path: 'prioridad', component: () => import('pages/catalogos/Servicios.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue'),
  },
];

export default routes;
