import { defineStore } from "pinia";
import { ref } from "vue";

import type { EIP1193Provider } from "@/types/eip6963";

export const useWalletSessionStore = defineStore("wallet-session", () => {
  const connected = ref<boolean>(false);
  const provider = ref<null | EIP1193Provider>(null);
  const network = ref(null);
  const accounts = ref<string[]>([]);

  function setSession(_provider: EIP1193Provider, _accounts: string[]) {
    connected.value = true;
    provider.value = _provider;
    accounts.value = _accounts;
  }

  return { connected, provider, network, accounts, setSession };
});
