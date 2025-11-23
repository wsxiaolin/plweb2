let wasmInstance: any = null;

/**
 * To load the WebAssembly instance only once and reuse it
 * @returns WebAssembly instance.
 */
export async function getWasmInstance() {
  if (!wasmInstance) {
    const pltxt2htm = (await import("./vendor/pltxt2htm.js")).default;
    wasmInstance = await pltxt2htm();
  }
  return wasmInstance;
}
