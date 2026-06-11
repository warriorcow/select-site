import { h, createElementBlock, openBlock, createElementVNode } from 'vue';
import { N as NuxtIcon } from './server.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import 'vue/server-renderer';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'vue-the-mask';
import 'vue-imask';

const _hoisted_1 = {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 8 5"
};
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1, _cache[0] || (_cache[0] = [
    createElementVNode("path", {
      fill: "currentColor",
      d: "M3.646 4.354a.5.5 0 0 0 .708 0l3.182-3.182a.5.5 0 1 0-.708-.708L4 3.293 1.172.464a.5.5 0 1 0-.708.708l3.182 3.182ZM3.5 3v1h1V3h-1Z"
    }, null, -1)
  ]));
}
const __nuxt_component_1 = { render() {
  return h(NuxtIcon, { icon: { render }, name: "arrow" });
} };

export { __nuxt_component_1 as default, render };
//# sourceMappingURL=arrow-Bb7Shf0I.mjs.map
