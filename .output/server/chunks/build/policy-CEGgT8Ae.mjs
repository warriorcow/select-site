import { _ as __nuxt_component_0 } from './index-Cz1TveGH.mjs';
import { defineComponent, withAsyncContext, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { u as useGetSeoData } from './useGetSeoData-BGPL5-04.mjs';
import { s as storeToRefs, a as useWindowStore, u as useI18n, c as useApi } from './server.mjs';
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
import 'vue-the-mask';
import 'vue-imask';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "policy",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { immediateLocale } = storeToRefs(useWindowStore());
    const { t } = useI18n();
    const { data } = ([__temp, __restore] = withAsyncContext(() => useApi(`/${immediateLocale.value}/wp-json/wp/v2/pages`, {
      query: {
        slug: "policy",
        acf_format: "standard"
      },
      transform(data2) {
        return data2[0];
      }
    })), __temp = await __temp, __restore(), __temp);
    useGetSeoData(data.value);
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      const _component_Breadcrumbs = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_Breadcrumbs, {
        items: [{
          name: unref(t)("pages.policy.breadcrumbs.1"),
          link: "/",
          active: true
        }, {
          name: unref(t)("pages.policy.breadcrumbs.2"),
          link: "/policy",
          active: false
        }]
      }, null, _parent));
      _push(`<div class="policy"><h1>${(_a = unref(data).title.rendered) != null ? _a : ""}</h1><div>${(_b = unref(data).content.rendered) != null ? _b : ""}</div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/policy.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=policy-CEGgT8Ae.mjs.map
