<template>
  <q-page class="column q-px-md q-py-lg bg-grey">
    <q-breadcrumbs class="text-grey-7" active-color="text-grey-7">
      <q-breadcrumbs-el label="Catálogos" />
      <q-breadcrumbs-el label="Dependencias" />
    </q-breadcrumbs>
    <h1>Dependencias</h1>
    <q-card flat bordered>
      <q-card-section>
        <h2>Registrar nueva dependencia</h2>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <FormDependencias></FormDependencias>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import FormDependencias from 'components/catalogos/dependencias/FormDependencias.vue';

export default defineComponent({
  name: 'PageServicios',
  components: {FormDependencias},
  setup() {
    return {}
  }
});
</script>

<style>

</style>
