import { b as useLocalePath, s as storeToRefs, a as useWindowStore, c as useApi, k as __nuxt_component_3$1 } from './server.mjs';
import { _ as __nuxt_component_1 } from './Logo-CmTsrdvF.mjs';
import { defineComponent, withAsyncContext, ref, computed, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderAttr, ssrRenderClass } from 'vue/server-renderer';
import { u as useGetSeoData } from './useGetSeoData-BGPL5-04.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const localePath = useLocalePath();
    const { canplaythroughMainVideo } = storeToRefs(useWindowStore());
    const { isMobile } = useWindowStore();
    const { data } = ([__temp, __restore] = withAsyncContext(() => useApi("/wp-json/wp/v2/pages", {
      query: {
        slug: "main",
        acf_format: "standard"
      },
      transform(data2) {
        return data2[0];
      }
    })), __temp = await __temp, __restore(), __temp);
    ref(null);
    const hasVideo = computed(() => {
      var _a;
      return !!((_a = data.value.acf.video) == null ? void 0 : _a.url);
    });
    const videoUrl = computed(() => {
      var _a, _b, _c;
      if (isMobile && ((_a = data.value.acf.video_mobile) == null ? void 0 : _a.url)) {
        return (_b = data.value.acf.video_mobile) == null ? void 0 : _b.url;
      }
      return (_c = data.value.acf.video) == null ? void 0 : _c.url;
    });
    useGetSeoData(data.value);
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d;
      const _component_NuxtLink = __nuxt_component_3$1;
      const _component_UiLogo = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full h-full flex justify-center items-center relative overflow-hidden" }, _attrs))}><h1 class="absolute text-[0px] opacity-0 pointer-events-none select-none">${ssrInterpolate(_ctx.$t("seo.main.h1"))}</h1>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "absolute inset-0 flex items-center justify-center w-full z-30",
        to: unref(localePath)("/models")
      }, null, _parent));
      if (unref(hasVideo)) {
        _push(`<video muted playsinline${ssrRenderAttr("poster", unref(isMobile) ? (_a = unref(data).acf.image_mobile) == null ? void 0 : _a.url : (_b = unref(data).acf.image) == null ? void 0 : _b.url)} loop preload="none" pip="false" class="${ssrRenderClass([[unref(canplaythroughMainVideo) && "z-20"], "absolute w-full h-full object-cover select-none pointer-events-none"])}"><source class="pointer-events-none select-none"${ssrRenderAttr("src", unref(videoUrl))} type="video/mp4"></video>`);
      } else {
        _push(`<picture class="absolute w-full h-full object-cover"><source media="(min-width: 768px)"${ssrRenderAttr("srcset", (_c = unref(data).acf.image) == null ? void 0 : _c.url)}><img class="w-full h-full object-cover"${ssrRenderAttr("src", (_d = unref(data).acf.image_mobile) == null ? void 0 : _d.url)} alt="Flowers"></picture>`);
      }
      _push(ssrRenderComponent(_component_UiLogo, {
        "animation-out": "",
        class: "!max-w-[590px] !h-[105px] px-5 fill-primary z-20"
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-je34oioc.mjs.map
