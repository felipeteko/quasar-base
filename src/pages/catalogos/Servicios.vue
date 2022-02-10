<template>
  <q-page class="column q-px-md q-py-lg bg-grey">
    <q-breadcrumbs class="text-grey-7" active-color="text-grey-7">
      <q-breadcrumbs-el label="Catálogos" />
      <q-breadcrumbs-el label="Servicios" />
    </q-breadcrumbs>
    <h1>Servicios</h1>
    <q-card flat bordered>
      <q-card-section>
        <h2>Registrar nuevo servicio</h2>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <FormServicios></FormServicios>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import FormServicios from 'components/catalogos/servicios/FormServicios.vue';

export default defineComponent({
  name: 'PageServicios',
  components: {FormServicios},
  setup() {
    return {}
  }
});
</script>

<style>

</style>
