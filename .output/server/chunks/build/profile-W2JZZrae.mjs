import { _ as __nuxt_component_0$1, a as _sfc_main$1, b as __nuxt_component_2 } from './index-BAb9usXM.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSuspense, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import './Logo-CmTsrdvF.mjs';
import './Accordion-gwaAJHXe.mjs';
import './arrow-Bb7Shf0I.mjs';
import './instagram-icon-BiVQMRIv.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@vuelidate/core';
import 'vue-the-mask';
import 'vue-imask';
import '@vuelidate/validators';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Header = __nuxt_component_0$1;
  const _component_Sidemenu = _sfc_main$1;
  const _component_Footer = __nuxt_component_2;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col min-h-dvh justify-start" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_Header, {
    "with-logo": "",
    theme: "light"
  }, null, _parent));
  _push(ssrRenderComponent(_component_Sidemenu, null, null, _parent));
  _push(`<main class="flex flex-col h-full">`);
  ssrRenderSuspense(_push, {
    default: () => {
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
    },
    _: 3
  });
  _push(`</main>`);
  _push(ssrRenderComponent(_component_Footer, { class: "mt-auto" }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/profile.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const profile = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { profile as default };
//# sourceMappingURL=profile-W2JZZrae.mjs.map
