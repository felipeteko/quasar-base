<template>
  <q-form
    @submit="onSubmit"
  >
    <div class="row q-col-gutter-x-lg q-mb-sm">
      <div class="col-12 col-md-6">
        <q-input
          v-model="nombre"
          label="Nombre del servicio"
          outlined
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'El nombre del servicio es requerido']"
        />
      </div>
    </div>

    <div>
      <q-btn label="Submit" type="submit" color="primary"/>
    </div>
  </q-form>
</template>

<script>
import {defineComponent, reactive, toRefs} from 'vue';
import { useQuasar } from 'quasar';
export default defineComponent({
  name: 'FormServicios',
  setup(){
    const $q = useQuasar();

    const state = reactive({
      nombre: null,
      prioridad: null,
      area: null,
      tiempo_de_respuesta: null
    });

    return {
      ...toRefs(state),

      onSubmit () {
        $q.notify({
          color: 'green-4',
          textColor: 'white',
          icon: 'cloud_done',
          message: 'Submitted'
        });
      }

    }
  }
})
</script>

<style scoped>

</style>
