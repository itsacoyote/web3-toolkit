<script setup lang="ts">
import { useStorage } from "@vueuse/core";
import { useRouter } from "vue-router";

const router = useRouter();

function connect() {
  router.push("/login");
}
</script>
<template>
  <button
    type="button"
    class="dark:bg-dgray-200 dark:text-dgray-999 py-3 px-5 rounded-xl dark:hover:bg-dgray-300 bg-lgray-200 hover:bg-lgray-300 text-lgray-999"
    @click="connect"
  >
    Connect wallet
  </button>
</template>
