<template>
  <q-form
    @submit="onSubmit"
    ref="form"
  >
    <div class="row q-col-gutter-x-lg q-my-sm">
      <div class="col-12 col-md-6">
        <q-item-label class="text-bold q-mb-sm">Nombre de la dependencia:</q-item-label>
        <q-input
          v-model="nombre"
          outlined
          dense
          lazy-rules
          placeholder="Ingresa el nombre de la dependencia"
          :rules="[ val => val && val.length > 0 || 'El nombre de la dependencia es requerido']"
        />
      </div>
      <div class="col-12 col-md-6">
        <q-item-label class="text-bold q-mb-sm">Titular de la dependencia:</q-item-label>

      </div>
    </div>

    <div class="column items-end">
      <div class="col">
        <q-btn label="Crear dependencia" type="submit" color="primary"/>
      </div>
    </div>
  </q-form>
</template>

<script>
import { defineComponent, reactive, toRefs, ref } from 'vue';
import { useQuasar, QSpinnerOrbit } from 'quasar';
import { api } from 'boot/axios';

export default defineComponent({
  name: 'FormDependencias',
  setup(){
    const $q = useQuasar();
    const form = ref(null);

    const state = reactive({
      nombre: null
    });

    function resetForm(){
      state.nombre = null;
      form.value.resetValidation();
    }

    async function onSubmit(){
      try {
        $q.loading.show({
          message: 'Enviando información...',
          spinner: QSpinnerOrbit
        });
        const response = await api.post('/posts', state);
        $q.loading.hide();
        if(response.data){
          resetForm();
          $q.notify({
            color: 'green-4',
            textColor: 'white',
            icon: 'o_library_add_check',
            message: 'La dependencia se ha guardado con éxito'
          });
        }
      } catch (e) {
        $q.notify({
          color: 'red',
          textColor: 'white',
          icon: 'error',
          message: e
        });
      }

    }

    return {
      form,
      ...toRefs(state),

      onSubmit
    }
  }
})
</script>
