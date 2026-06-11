import { _ as __nuxt_component_0 } from './index-Cz1TveGH.mjs';
import { _ as _export_sfc, s as storeToRefs, a as useWindowStore, c as useApi, b as useLocalePath, d as __nuxt_component_0$1 } from './server.mjs';
import { _ as __nuxt_component_1$1 } from './Accordion-gwaAJHXe.mjs';
import { defineComponent, withAsyncContext, mergeProps, unref, ref, computed, withCtx, createVNode, createBlock, openBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
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
import 'vue-the-mask';
import 'vue-imask';
import './arrow-Bb7Shf0I.mjs';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  props: {
    params: {}
  },
  setup(__props) {
    const { isMobile, isTablet } = storeToRefs(useWindowStore());
    const localePath = useLocalePath();
    const props = __props;
    const currentImageIndex = ref(0);
    const isVisibleCategories = ref(false);
    ref(null);
    const currentImage = computed(() => {
      var _a, _b;
      return !isMobile.value ? ((_a = props.params.images[currentImageIndex.value]) == null ? void 0 : _a.url) || "" : ((_b = props.params.images[currentImageIndex.value].sizes) == null ? void 0 : _b.large) || "";
    });
    const buttonSize = computed(() => {
      if (isTablet.value) {
        return "5xl";
      }
      if (isMobile.value) {
        return "3xl";
      }
      return "6xl";
    });
    const toggleVisibleCategories = () => isVisibleCategories.value = !isVisibleCategories.value;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiButton = __nuxt_component_0$1;
      const _component_UiAccordion = __nuxt_component_1$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "category-card" }, _attrs))} data-v-6c3af3df><picture class="category-card__cover" data-v-6c3af3df><img class="w-full h-full object-cover"${ssrRenderAttr("src", currentImage.value)} alt="Dynamic Image" data-v-6c3af3df></picture>`);
      if (!isVisibleCategories.value) {
        _push(ssrRenderComponent(_component_UiButton, {
          label: _ctx.params.name,
          "is-uppercase": "",
          "is-underline-hover": "",
          size: buttonSize.value,
          to: !_ctx.params.childrens && unref(localePath)(`/models${_ctx.params.url}`) || null,
          onClick: ($event) => toggleVisibleCategories()
        }, null, _parent));
      } else {
        _push(`<div class="flex flex-col items-center gap-y-6" data-v-6c3af3df><!--[-->`);
        ssrRenderList(_ctx.params.childrens, (item, index2) => {
          _push(ssrRenderComponent(_component_UiAccordion, {
            key: index2,
            label: item.name,
            "has-arrow": item.childrens ? "lg" : false
          }, {
            label: withCtx(({ label, isOpen }, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_UiButton, {
                  class: "ml-[0.7rem] max-tablet:ml-[1.3rem] max-mobile:ml-[1.5rem]",
                  size: buttonSize.value,
                  label,
                  to: unref(localePath)(`/models${item.url}`),
                  "is-underline": isOpen,
                  "is-underline-hover": !isOpen
                }, null, _parent2, _scopeId));
              } else {
                return [
                  createVNode(_component_UiButton, {
                    class: "ml-[0.7rem] max-tablet:ml-[1.3rem] max-mobile:ml-[1.5rem]",
                    size: buttonSize.value,
                    label,
                    to: unref(localePath)(`/models${item.url}`),
                    "is-underline": isOpen,
                    "is-underline-hover": !isOpen
                  }, null, 8, ["size", "label", "to", "is-underline", "is-underline-hover"])
                ];
              }
            }),
            content: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="flex flex-col items-center gap-y-3 mt-2" data-v-6c3af3df${_scopeId}><!--[-->`);
                ssrRenderList(item.childrens, (sub_menu, index_sub) => {
                  _push2(ssrRenderComponent(_component_UiButton, {
                    key: index_sub,
                    label: sub_menu.name,
                    to: unref(localePath)(`/models${sub_menu.url}`),
                    size: "xl",
                    "is-underline-hover": ""
                  }, null, _parent2, _scopeId));
                });
                _push2(`<!--]--></div>`);
              } else {
                return [
                  createVNode("div", { class: "flex flex-col items-center gap-y-3 mt-2" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(item.childrens, (sub_menu, index_sub) => {
                      return openBlock(), createBlock(_component_UiButton, {
                        key: index_sub,
                        label: sub_menu.name,
                        to: unref(localePath)(`/models${sub_menu.url}`),
                        size: "xl",
                        "is-underline-hover": ""
                      }, null, 8, ["label", "to"]);
                    }), 128))
                  ])
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--></div>`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/categoryCard/index.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-6c3af3df"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { immediateLocale } = storeToRefs(useWindowStore());
    const { data: pageData } = ([__temp, __restore] = withAsyncContext(() => useApi(`/${immediateLocale.value}/wp-json/wp/v2/categories?slug=models`)), __temp = await __temp, __restore(), __temp);
    const { data: categoriesData } = ([__temp, __restore] = withAsyncContext(() => useApi(`/${immediateLocale.value}/wp-json/custom/v1/categories`)), __temp = await __temp, __restore(), __temp);
    useGetSeoData(pageData.value[0]);
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_Breadcrumbs = __nuxt_component_0;
      const _component_CategoryCard = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "models" }, _attrs))} data-v-62444a8b>`);
      _push(ssrRenderComponent(_component_Breadcrumbs, {
        items: [{
          name: _ctx.$t("pages.models.breadcrumbs.1"),
          link: "/",
          active: true
        }, {
          name: _ctx.$t("pages.models.breadcrumbs.2"),
          link: "/models",
          active: false
        }]
      }, null, _parent));
      _push(`<h1 class="absolute text-[0px] opacity-0 pointer-events-none select-none" data-v-62444a8b>${ssrInterpolate(_ctx.$t("seo.models.title.h1"))}</h1><h2 class="models__title title-animate uppercase" data-v-62444a8b>${(_a = _ctx.$t("pages.models.title")) != null ? _a : ""}</h2><div class="models__container" data-v-62444a8b><!--[-->`);
      ssrRenderList(unref(categoriesData), (category) => {
        _push(ssrRenderComponent(_component_CategoryCard, {
          key: category.id,
          params: category
        }, null, _parent));
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/models/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-62444a8b"]]);

export { index as default };
//# sourceMappingURL=index-1wgmqHq3.mjs.map
