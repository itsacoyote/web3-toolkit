<script setup lang="ts">
import { useStorage } from "@vueuse/core";

import { useProviderDetails } from "@/composables/useProviderDetails";
import { useWalletSessionStore } from "@/stores/wallet-session";
import type { EIP1193ProviderRpcError, EIP6963ProviderDetail } from "@/types/eip6963";

const providerDetails = useProviderDetails();
const walletSession = useWalletSessionStore();
const selectedProvider = useStorage("selectedProvider", "");

async function connectToProvider(providerDetail: EIP6963ProviderDetail) {
  try {
    const connection = await providerDetail.provider.request({ method: "eth_requestAccounts" });
    if ((connection as string[]).length > 0) {
      // if there is more than one account, we should list them to select which one?
      selectedProvider.value = providerDetail.info.rdns;
      walletSession.setSession(providerDetail.provider, connection as string[]);
    }
  }
  catch (error) {
    if ((error as EIP1193ProviderRpcError).code === 4001) {
      // user rejected the request
      console.log("Failed to connect:", error);
    }
    if ((error as EIP1193ProviderRpcError).code === -32002) {
      console.log("METAMASK ERROR");
    }
  }
}

</script>

<template>
  <button
    v-for="providerDetail in providerDetails"
    :key="providerDetail.info.uuid"
    type="button"
    class="flex py-3 px-4 hover:bg-lgray-200 cursor-pointer rounded-2xl my-2 group dark:hover:bg-dgray-200 dark:text-dgray-999 w-full"
    @click="connectToProvider(providerDetail)"
  >
    <img
      :src="providerDetail.info.icon"
      :alt="providerDetail.info.name"
      width="26"
      height="26"
      class="mr-4 opacity-70 group-hover:opacity-100"
    />
    <div>{{ providerDetail.info.name }}</div>
  </button>
</template>

<style scoped>

</style>
