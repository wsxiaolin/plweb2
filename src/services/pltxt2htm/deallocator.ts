import { getWasmInstance } from "./wasmLoader";

let deallocate: ((ptr: number) => void) | null = null;

export async function getDeallocator() {
  const wasmInstance = await getWasmInstance();
  if (!deallocate) {
    deallocate = wasmInstance.cwrap("deallocate", null, ["number"]);
  }
  return deallocate;
}
