<template>
  <q-form
    @submit="onSubmit"
    ref="form"
  >
    <div class="row q-col-gutter-x-lg q-col-gutter-y-sm q-my-sm">
      <div class="col-12 col-md-6">
        <q-item-label class="text-bold q-mb-sm">Nombre:</q-item-label>
        <q-input
          v-model="name"
          outlined
          dense
          lazy-rules
          placeholder="Ingresa el nombre"
          :rules="[ val => val && val.length > 0 || 'El nombre es requerido']"
        />
      </div>
      <div class="col-12 col-md-6">
        <q-item-label class="text-bold q-mb-sm">Apellido(s):</q-item-label>
        <q-input
          v-model="lastname"
          outlined
          dense
          lazy-rules
          placeholder="Ingresa los apellidos"
          :rules="[ val => val && val.length > 0 || 'Los apellidos son requeridos']"
        />
      </div>
      <div class="col-12 col-md-6">
        <q-item-label class="text-bold q-mb-sm">Usuario:</q-item-label>
        <q-input
          v-model="username"
          outlined
          dense
          lazy-rules
          placeholder="Ingresa el usuario"
          :rules="[ val => val && val.length > 0 || 'El usuario es requerido']"
        />
      </div>
      <div class="col-12 col-md-6">
        <q-item-label class="text-bold q-mb-sm">Correo Electrónico:</q-item-label>
        <q-input
          v-model="email"
          outlined
          dense
          lazy-rules
          type="email"
          placeholder="Ingresa el correo electrónico"
          :rules="[ val => val && val.length > 0 || 'El correo electrónico es requerido']"
        />
      </div>
      <div class="col-12 col-md-6">
        <q-item-label class="text-bold q-mb-sm">Contraseña:</q-item-label>
        <q-input
          v-model="password"
          outlined
          dense
          lazy-rules
          placeholder="Ingresa la contraseña"
          type="password"
          :rules="[ val => val && val.length > 0 || 'La contraseña es requerida']"
        />
      </div>
      <div class="col-12 col-md-6">
        <q-item-label class="text-bold q-mb-sm">Confirmar Contraseña:</q-item-label>
        <q-input
          v-model="password_c"
          outlined
          dense
          lazy-rules
          placeholder="Confirma la contraseña"
          type="password"
          :rules="[
            val => val && val.length > 0 || 'La contraseña es requerida',
            val => val === password || 'Las contraseñas no son iguales'
          ]"
        />
      </div>
    </div>

    <div class="column items-end">
      <div class="col">
        <q-btn label="Crear usuario" type="submit" color="primary"/>
      </div>
    </div>
  </q-form>
</template>

<script>
import { defineComponent, reactive, toRefs, ref } from 'vue';
import { useQuasar, QSpinnerOrbit } from 'quasar';
import { api } from 'boot/axios';

export default defineComponent({
  name: 'FormAdministradores',
  setup(){
    const $q = useQuasar();
    const form = ref(null);

    const state = reactive({
      name: null,
      lastname: null,
      username: null,
      email: null,
      password: null,
      password_c: null
    });

    function resetForm(){
      state.name = null;
      state.lastname = null;
      state.username = null;
      state.email = null;
      state.password = null;
      state.password_c = null;
      state.password_c = null;
      form.value.resetValidation();
    }

    async function onSubmit(){
      try {
        $q.loading.show({
          message: 'Enviando información...',
          spinner: QSpinnerOrbit
        });
        const response = await api.post('/users/new', state);
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
        $q.loading.hide();
        $q.notify({
          color: 'red',
          textColor: 'white',
          icon: 'error',
          message: e.message
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

<style scoped>

</style>
