import { getWasmInstance } from "./wasmLoader";

let deallocate: ((ptr: number) => void) | null = null;

export async function getDeallocator() {
  if (!deallocate) {
    const wasmInstance = await getWasmInstance();
    deallocate = wasmInstance.cwrap("deallocate", null, ["number"]);
  }
  return deallocate;
}
