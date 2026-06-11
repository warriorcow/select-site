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
  viewBox: "0 0 49 49"
};
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1, _cache[0] || (_cache[0] = [
    createElementVNode("circle", {
      cx: "24.5",
      cy: "24.5",
      r: "24.5",
      fill: "#EAEAEA"
    }, null, -1),
    createElementVNode("path", {
      fill: "#000",
      d: "m32.91 24.5-12.615 7.284V17.216L32.91 24.5Z"
    }, null, -1)
  ]));
}
const __nuxt_component_0 = { render() {
  return h(NuxtIcon, { icon: { render }, name: "play" });
} };

export { __nuxt_component_0 as default, render };
//# sourceMappingURL=play-BXqtxUg5.mjs.map
