<template>
  <q-list bordered class="q-mt-xl rounded-borders">
    <MenuItem
      v-for="item in menu"
      :key="item.name"
      v-bind="item"
    >
    </MenuItem>
  </q-list>
</template>

<script lang="ts">
import { IMenuItem } from 'components/models';
import { defineComponent } from 'vue';
import MenuItem from './MenuItem.vue';

export default defineComponent({
  components: {
    MenuItem,
  },
  setup() {
    const menu: Array<IMenuItem> = [
      {
        name: 'Inicio',
        icon: 'o_home',
        to: '/',
        level: 0,
        children: []
      },
      {
        name: 'Usuarios',
        icon: 'o_people',
        to: '/usuarios',
        level: 0,
        children: [
          {
            name: 'Administradores',
            to: '/usuarios/administradores',
            level: 1,
            children: []
          }
        ]
      },
      {
        name: 'Catálogos',
        icon: 'list',
        to: '/catalogos',
        level: 0,
        children: [
            {
                name: 'Dependencias',
                to: '/catalogos/dependencias',
                level: 1,
                children: []
            },
            {
                name: 'Áreas',
                to: '/catalogos/areas',
                level: 1,
                children: []
            },
            {
                name: 'Servicios',
                to: '/catalogos/servicios',
                level: 1,
                children: []
            },
            {
                name: 'Prioridad',
                to: '/catalogos/prioridad',
                level: 1,
                children: []
            }
        ]
      },
      {
        name: 'Seguimiento',
        icon: 'o_arrow_circle_right',
        to: '/seguimiento',
        level: 0,
        children: [
            {
                name: 'Nuevos',
                to: '/seguimiento/nuevos',
                level: 1,
                children: []
            },
            {
                name: 'En proceso',
                to: '/seguimiento/en-proceso',
                level: 1,
                children: []
            },
            {
                name: 'Terminados',
                to: '/seguimiento/terminados',
                level: 1,
                children: []
            }
        ]
      },
      {
        name: 'Mapeo',
        icon: 'o_person_pin_circle',
        to: '/mapeo',
        level: 0,
        children: []
      },
      {
        name: 'Indicadores',
        icon: 'insights',
        to: '/indicadores',
        level: 0,
        children: []
      }
    ];

    return { menu };
  },
});
</script>

<style></style>
