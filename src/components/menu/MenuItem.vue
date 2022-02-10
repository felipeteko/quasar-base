<template>
  <template v-if="children.length === 0">
    <q-item clickable v-ripple :to="to" exact :inset-level="level">
      <q-item-section avatar v-if="icon">
        <q-icon :name="icon"></q-icon>
      </q-item-section>
      <q-item-section> {{name}} </q-item-section>
    </q-item>
  </template>
  <template v-else>
    <template v-if="children.length > 0">
      <q-expansion-item
        expand-separator
        :icon="icon"
        :label="name"
        :header-inset-level="level"
        :model-value="validateOpen(to)"
        :class="{'active': validateOpen(to)}"
      >
        <MenuItem
          v-for="child in children"
          :key="child.name"
          v-bind="child"
        >
        </MenuItem>
      </q-expansion-item>
    </template>
    <template v-else>
      <q-item clickable v-ripple :to="to" exact :inset-level="level">
        <q-item-section avatar v-if="icon">
          <q-icon :name="icon"></q-icon>
        </q-item-section>
        <q-item-section> {{name}} </q-item-section>
      </q-item>
    </template>
  </template>
</template>

<script lang="ts">
import { IMenuItem } from 'components/models';
import {defineComponent, PropType} from 'vue';
import { useRoute } from 'vue-router'

export default defineComponent({
  name: 'MenuItem',
  props: {
    name: {
      type: String,
      required: true
    },
    to: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      default: ''
    },
    level: {
      type: Number,
      default: 0
    },
    children: {
      type: Array as PropType<Array<IMenuItem>>,
      default: () => []
    }
  },
  setup(){
    const route = useRoute();

    function validateOpen(to: string){
      return route.path.includes(to);
    }

    return {validateOpen}
  }
})
</script>

<style lang="scss">
  .q-expansion-item.active {
    .q-item__label {
      color: var(--q-primary);
    }
    .q-item__section--avatar {
      color: var(--q-primary);
    }
  }
</style>
