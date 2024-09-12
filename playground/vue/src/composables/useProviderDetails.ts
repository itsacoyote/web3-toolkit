import { ref } from "vue";

import type { EIP6963AnnounceProviderEvent, EIP6963ProviderDetail } from "@/types/eip6963";

declare global {
  interface WindowEventMap {
    "eip6963:announceProvider": CustomEvent;
  }
}

export function useProviderDetails() {
  const providers = ref<EIP6963ProviderDetail[]>([]);

  window.addEventListener("eip6963:announceProvider", (event: EIP6963AnnounceProviderEvent) => {
    providers.value = [...providers.value, event.detail];
  });

  window.dispatchEvent(new Event("eip6963:requestProvider"));

  // console.log("providers", providers);
  return providers;
}
