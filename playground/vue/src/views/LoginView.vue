<script setup lang="ts">
import ProvidersList from "@/components/ProvidersList.vue";

</script>

<template>
  <div class="flex flex-col justify-center items-center">
    <div class="px-3 py-2 bg-lgray-100 border border-lgray-500 rounded-2xl dark:border-dgray-500 dark:bg-dgray-100">
      <p class="font-semibold text-center text-lgray-999 dark:text-dgray-999">
        Connect a wallet
      </p>
      <ProvidersList />
    </div>
  </div>
</template>
