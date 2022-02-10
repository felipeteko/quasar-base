<template>
  <q-page class="column q-px-md q-py-lg bg-grey">
    <q-breadcrumbs class="text-grey-7" active-color="text-grey-7">
      <q-breadcrumbs-el label="Usuarios" />
      <q-breadcrumbs-el label="Administradores" />
    </q-breadcrumbs>
    <h1>Administradores</h1>
    <q-card flat bordered>
      <q-card-section>
        <h2>Registrar nuevo administrador</h2>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <FormAdministradores></FormAdministradores>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import FormAdministradores from 'components/usuarios/administradores/FormAdministradores.vue';

export default defineComponent({
  name: 'PageServicios',
  components: {FormAdministradores},
  setup() {
    return {}
  }
});
</script>

<style>

</style>
