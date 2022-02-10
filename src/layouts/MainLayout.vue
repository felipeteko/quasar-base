<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="bg-white text-black">
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="menuToggle"
        />
        <q-toolbar-title>

        </q-toolbar-title>
        <q-btn-dropdown
          scretch
          flat
          label="Felipe Moreno"
        >
          <div class="row q-pa-md">
            <div class="column col-12 items-center">
              <q-avatar size="72px">
                <img src="https://cdn.quasar.dev/img/boy-avatar.png">
              </q-avatar>

              <div class="text-subtitle1 q-mt-md q-mb-xs">Felipe Moreno</div>

              <q-btn
                color="primary"
                label="Cerrar Sesión"
                push
                size="sm"
                v-close-popup
              />
            </div>
          </div>
        </q-btn-dropdown>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="menuOpen"
      show-if-above
      bordered
      class="q-mt-lg"
    >
      <div class="q-px-lg">
        <q-img src="images/logo.svg" fit="contain"></q-img>
      </div>
      <Menu></Menu>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">

import { defineComponent, ref } from 'vue';
import Menu from 'components/menu/Menu.vue';

export default defineComponent({
  name: 'MainLayout',

  components: {
    Menu
  },

  setup () {
    const menuOpen = ref(false);

    function menuToggle(){
      menuOpen.value = !menuOpen.value;
    }

    return {
      menuOpen,
      menuToggle
    }
  }
})
</script>

<style scoped>
</style>
