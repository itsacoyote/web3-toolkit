<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { useColorMode, useCycleList } from "@vueuse/core";
import { watchEffect } from "vue";
const mode = useColorMode();

const { state, next } = useCycleList(["dark", "light"] as const, { initialValue: mode });

watchEffect(() => mode.value = state.value);
</script>

<template>
  <button
    type="button"
    class="p-2 rounded-full bg-lgray-100 text-lpurple-900 dark:bg-dgray-100 dark:text-dpurple-900 dark:hover:bg-dgray-200 hover:bg-gray-200"
    @click="next()"
  >
    <Icon
      v-if="state === 'light'"
      icon="uil:sun"
    />
    <Icon
      v-if="state === 'dark'"
      icon="uil:moon"
    />
  </button>
</template>
