<script setup lang="ts">
import ToggleTheme from "@/components/ToggleTheme.vue";
import ConnectButton from "@/components/wallet-connect/ConnectButton.vue";
</script>

<template>
  <div class="flex flex-col h-dvh">
    <div class="py-4 px-2 border-red-100 flex ">
      <div class="flex-auto">
        <ConnectButton />
      </div>
      <div class="flex-none">
        <ToggleTheme class="" />
      </div>
    </div>
    <RouterView class="grow" />
  </div>
</template>

<style scoped>

</style>
