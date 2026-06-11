import { _ as __nuxt_component_0$1 } from './index-Cz1TveGH.mjs';
import { _ as _export_sfc, b as useLocalePath, u as useI18n, g as useRoute, s as storeToRefs, a as useWindowStore, c as useApi, n as navigateTo, j as useHead, d as __nuxt_component_0$2, l as __nuxt_component_5$1, e as useElementVisibility, k as __nuxt_component_3$1 } from './server.mjs';
import { defineComponent, ref, withAsyncContext, computed, watchEffect, mergeProps, unref, withCtx, createVNode, createBlock, openBlock, Fragment, renderList, withDirectives, vShow, provide, watch, createCommentVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderStyle, ssrRenderSlot, ssrRenderClass, ssrRenderAttr } from 'vue/server-renderer';
import { _ as __nuxt_component_1 } from './Accordion-gwaAJHXe.mjs';
import pull from 'lodash/pull.js';
import pick from 'lodash/pick.js';
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

const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "AccordionGroup",
  __ssrInlineRender: true,
  setup(__props) {
    const activeAccordion = ref(null);
    const setActiveAccordion = (id) => {
      activeAccordion.value = id;
    };
    provide("activeAccordion", activeAccordion);
    provide("setActiveAccordion", setActiveAccordion);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "accordion-group" }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/AccordionGroup.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  props: {
    params: {},
    index: {}
  },
  setup(__props) {
    const { isMobile, isTablet } = storeToRefs(useWindowStore());
    const props = __props;
    const { locale } = useI18n();
    const localePath = useLocalePath();
    const isHovered = ref(false);
    const cardRef = ref(null);
    const isBeenShown = ref(false);
    computed(() => `${props.params.title.rendered} ${props.params.title.rendered}`);
    const profileLink = computed(() => `/${props.params.slug}`);
    const targetIsVisible = useElementVisibility(cardRef);
    const nameButtonSize = computed(() => {
      if (isTablet.value) {
        return "5xl";
      }
      if (isMobile.value) {
        return "xl";
      }
      return "6xl";
    });
    watch(() => targetIsVisible.value, (val) => {
      if (val && !isBeenShown.value) {
        setTimeout(() => {
          isBeenShown.value = true;
        }, props.index % 2 === 0 ? 100 : 200);
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_3$1;
      const _component_UiButton = __nuxt_component_0$2;
      _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
        ref_key: "cardRef",
        ref: cardRef,
        to: unref(localePath)(unref(profileLink)),
        class: "card",
        onMouseenter: ($event) => isHovered.value = true,
        onMouseleave: ($event) => isHovered.value = false
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b, _c, _d;
          if (_push2) {
            _push2(`<div class="${ssrRenderClass([[
              unref(isBeenShown) && "!opacity-100 !translate-y-0"
            ], "card__content"])}" data-v-2f8f6d28${_scopeId}><div class="overflow-hidden relative h-[403px] max-mobile:h-[232px] max-tablet:h-[327px]" data-v-2f8f6d28${_scopeId}>`);
            if (_ctx.params.acf.preview_image) {
              _push2(`<!--[--><img class="card__cover"${ssrRenderAttr("src", (_a = _ctx.params.acf.preview_image[0]) == null ? void 0 : _a.sizes.large)} data-v-2f8f6d28${_scopeId}>`);
              if (_ctx.params.acf.preview_image[1]) {
                _push2(`<img class="${ssrRenderClass([[
                  "opacity-0 absolute top-0 left-0 ",
                  unref(isHovered) && "opacity-100 !scale-110"
                ], "card__cover"])}"${ssrRenderAttr("src", (_b = _ctx.params.acf.preview_image[1]) == null ? void 0 : _b.sizes.large)} data-v-2f8f6d28${_scopeId}>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<!--]-->`);
            } else {
              _push2(`<div class="w-full h-full bg-accent" data-v-2f8f6d28${_scopeId}></div>`);
            }
            _push2(`</div><div class="card__footer" data-v-2f8f6d28${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UiButton, {
              label: _ctx.params.acf.fio[unref(locale)].name,
              size: unref(nameButtonSize),
              "is-underline-hover": !unref(isHovered),
              "is-underline": unref(isHovered),
              "is-uppercase": ""
            }, null, _parent2, _scopeId));
            _push2(`<div class="card__lastname" data-v-2f8f6d28${_scopeId}>${ssrInterpolate(_ctx.params.acf.fio[unref(locale)].last_name)}</div></div></div>`);
          } else {
            return [
              createVNode("div", {
                class: ["card__content", [
                  unref(isBeenShown) && "!opacity-100 !translate-y-0"
                ]]
              }, [
                createVNode("div", { class: "overflow-hidden relative h-[403px] max-mobile:h-[232px] max-tablet:h-[327px]" }, [
                  _ctx.params.acf.preview_image ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                    createVNode("img", {
                      class: "card__cover",
                      src: (_c = _ctx.params.acf.preview_image[0]) == null ? void 0 : _c.sizes.large
                    }, null, 8, ["src"]),
                    _ctx.params.acf.preview_image[1] ? (openBlock(), createBlock("img", {
                      key: 0,
                      class: ["card__cover", [
                        "opacity-0 absolute top-0 left-0 ",
                        unref(isHovered) && "opacity-100 !scale-110"
                      ]],
                      src: (_d = _ctx.params.acf.preview_image[1]) == null ? void 0 : _d.sizes.large
                    }, null, 10, ["src"])) : createCommentVNode("", true)
                  ], 64)) : (openBlock(), createBlock("div", {
                    key: 1,
                    class: "w-full h-full bg-accent"
                  }))
                ]),
                createVNode("div", { class: "card__footer" }, [
                  createVNode(_component_UiButton, {
                    label: _ctx.params.acf.fio[unref(locale)].name,
                    size: unref(nameButtonSize),
                    "is-underline-hover": !unref(isHovered),
                    "is-underline": unref(isHovered),
                    "is-uppercase": ""
                  }, null, 8, ["label", "size", "is-underline-hover", "is-underline"]),
                  createVNode("div", {
                    class: "card__lastname",
                    textContent: toDisplayString(_ctx.params.acf.fio[unref(locale)].last_name)
                  }, null, 8, ["textContent"])
                ])
              ], 2)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/card/index.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-2f8f6d28"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  props: {
    models: { default: () => [] }
  },
  setup(__props) {
    const props = __props;
    const { isMobile, isTablet, isDesktop } = storeToRefs(useWindowStore());
    const filteredItems = computed(() => {
      var _a;
      if (!pattern.value) return [];
      const result = [];
      let i = 0;
      while (i < ((_a = props.models) == null ? void 0 : _a.length)) {
        let size = pattern.value[result.length % pattern.value.length];
        const remaining = props.models.length - i;
        if (size === 4 && remaining === 3 && i !== 0) {
          size = 2;
        }
        result.push(props.models.slice(i, i + size));
        i += size;
        if (size === 2 && remaining === 3) {
          result.push(props.models.slice(i, i + 1));
          i += 1;
        }
      }
      return result;
    });
    const pattern = computed(() => {
      if (isDesktop.value) {
        return [4, 3];
      }
      if (isTablet.value) {
        return [3, 2];
      }
      if (isMobile.value) {
        return [2, 1];
      }
      return [4, 3];
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Card = __nuxt_component_0;
      if (_ctx.models) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "catalog" }, _attrs))} data-v-87ba5476><div class="catalog__container" data-v-87ba5476><!--[-->`);
        ssrRenderList(unref(filteredItems), (row, index_row) => {
          _push(`<div class="catalog__row" data-v-87ba5476><!--[-->`);
          ssrRenderList(row, (item, index_item) => {
            _push(ssrRenderComponent(_component_Card, {
              key: index_item,
              params: item,
              index: index_item
            }, null, _parent));
          });
          _push(`<!--]--></div>`);
        });
        _push(`<!--]-->`);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/catalog/index.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-87ba5476"]]);
function findBySlug(data, targetSlug) {
  if ((data == null ? void 0 : data.slug) === targetSlug) {
    return data;
  }
  if (data.childrens) {
    for (const key in data.childrens) {
      const result = findBySlug(data.childrens[key], targetSlug);
      if (result) {
        return result;
      }
    }
  }
  return null;
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    var _a;
    let __temp, __restore;
    const localePath = useLocalePath();
    const { t, locale } = useI18n();
    const route = useRoute();
    const { isMobile, isTablet, immediateLocale } = storeToRefs(useWindowStore());
    const totalPages = ref(null);
    const offsetPage = ref(0);
    const observer = ref();
    const loadTrigger = ref(null);
    const isLoading = ref(false);
    const arrayModels = ref([]);
    ref(0);
    ref();
    const { data: categories } = ([__temp, __restore] = withAsyncContext(() => useApi(`/${immediateLocale.value}/wp-json/custom/v1/categories`)), __temp = await __temp, __restore(), __temp);
    const PER_PAGE_COUNT = isMobile.value ? 3 : isTablet.value ? 5 : 7;
    const createdSlug = pull(Object.values(pick(route.params, ["catalog", "category"])), "").join("-");
    const title = `${categories.value[route.params.catalog].name} ${route.params.category ? findBySlug(categories.value[route.params.catalog], createdSlug).name : ""}`;
    const catalogCategorySlug = pull(Object.values(route.params), "").join("-");
    const categoryId = findBySlug(categories.value[route.params.catalog], catalogCategorySlug).id;
    const category = findBySlug(categories.value[route.params.catalog], catalogCategorySlug);
    const getBreadcrumbs = computed(() => {
      return [
        {
          name: t("pages.catalog.breadcrumbs.1"),
          link: "/",
          active: true
        },
        {
          name: categories.value[route.params.catalog].name,
          link: "",
          active: false
        }
      ];
    });
    const buttonSize = computed(() => {
      if (isTablet.value) {
        return "md";
      }
      if (isMobile.value) {
        return "xs";
      }
      return "xl";
    });
    const subButtonSize = computed(() => {
      if (isTablet.value) {
        return "sm";
      }
      if (isMobile.value) {
        return "xs";
      }
      return "md";
    });
    const currentCategory = computed(() => {
      return route.params.category;
    });
    const menu = computed(() => {
      return findBySlug(categories.value[route.params.catalog], createdSlug);
    });
    if (category == null ? void 0 : category.childrens) {
      const firstChildUrl = (_a = Object.values(category.childrens)[0]) == null ? void 0 : _a.url;
      if (firstChildUrl) {
        const basePath = immediateLocale.value === "en" ? "" : `/${immediateLocale.value}`;
        navigateTo(`${basePath}/models${firstChildUrl}`);
      }
    }
    const hasType = computed(() => {
      return !!route.params.type;
    });
    const allModelsLoaded = computed(() => {
      return Number(totalPages.value) <= arrayModels.value.length;
    });
    const getSEO = computed(() => {
      if (hasType.value) {
        const createdSlug2 = pull(Object.values(pick(route.params, ["catalog", "category", "type"])), "").join("-");
        const data = findBySlug(categories.value[route.params.catalog], createdSlug2);
        if (locale.value === "ru") {
          return {
            title: data.seo_title,
            description: data.seo_description
          };
        } else {
          return {
            title: data.seo_title_en,
            description: data.seo_description_en
          };
        }
      } else {
        const createdSlug2 = pull(Object.values(pick(route.params, ["catalog", "category"])), "").join("-");
        const data = findBySlug(categories.value[route.params.catalog], createdSlug2);
        if (locale.value === "ru") {
          return {
            title: data.seo_title,
            description: data.seo_description
          };
        } else {
          return {
            title: data.seo_title_en,
            description: data.seo_description_en
          };
        }
      }
    });
    watchEffect(() => {
      useHead({
        title: getSEO.value.title,
        meta: [
          {
            property: "og:title",
            content: getSEO.value.title
          },
          {
            property: "og:description",
            content: getSEO.value.description
          },
          {
            name: "description",
            content: getSEO.value.description
          }
        ]
      });
    });
    async function fetchModels() {
      if (isLoading.value) return;
      if (observer.value && loadTrigger.value && allModelsLoaded.value) {
        observer.value.unobserve(loadTrigger.value);
        return;
      }
      isLoading.value = true;
      const { data: models } = await useApi(`/${immediateLocale.value}/wp-json/custom/v1/posts`, {
        query: {
          categories: categoryId,
          acf_format: "standard",
          per_page: PER_PAGE_COUNT,
          offset: offsetPage.value
        },
        onResponse({ response }) {
          if (!totalPages.value) {
            totalPages.value = response == null ? void 0 : response.headers.get("X-WP-Total");
          }
        }
      });
      arrayModels.value.push(...models.value);
      offsetPage.value += PER_PAGE_COUNT;
      isLoading.value = false;
    }
    [__temp, __restore] = withAsyncContext(() => fetchModels()), await __temp, __restore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Breadcrumbs = __nuxt_component_0$1;
      const _component_UiButton = __nuxt_component_0$2;
      const _component_UiAccordionGroup = _sfc_main$3;
      const _component_UiAccordion = __nuxt_component_1;
      const _component_Catalog = __nuxt_component_4;
      const _component_UiSpinner = __nuxt_component_5$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-full w-full overflow-hidden" }, _attrs))} data-v-f5392f7a><div class="grid grid-cols-[1fr_auto_1fr]" data-v-f5392f7a>`);
      _push(ssrRenderComponent(_component_Breadcrumbs, { items: unref(getBreadcrumbs) }, null, _parent));
      if (!unref(isMobile) && !unref(isTablet)) {
        _push(`<h1 class="text-center text-6xl max-tablet:text-5xl max-mobile:text-3xl uppercase title-animate" data-v-f5392f7a>${ssrInterpolate(title)}</h1>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (unref(isMobile) || unref(isTablet)) {
        _push(`<h1 class="mt-[30px] text-center text-6xl max-tablet:text-5xl max-mobile:text-3xl uppercase title-animate" data-v-f5392f7a>${ssrInterpolate(title)}</h1>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(currentCategory)) {
        _push(`<div class="flex justify-center gap-x-5 mt-[15px] mb-[25px]" data-v-f5392f7a><!--[-->`);
        ssrRenderList(unref(menu).childrens, (sub_menu, index_sub) => {
          _push(ssrRenderComponent(_component_UiButton, {
            key: index_sub,
            label: sub_menu.name,
            size: unref(subButtonSize),
            "is-select-color": unref(localePath)(`/models${sub_menu.url}`) === unref(localePath)(unref(route).path),
            "is-select-color-hover": unref(localePath)(`/models${sub_menu.url}`) !== unref(localePath)(unref(route).path),
            to: unref(localePath)(`/models${sub_menu.url}`)
          }, null, _parent));
        });
        _push(`<!--]--></div>`);
      } else {
        _push(ssrRenderComponent(_component_UiAccordionGroup, { class: "flex justify-center gap-x-[40px] mt-6 max-mobile:mt-[15px] min-h-[100px] max-mobile:min-h-fit max-mobile:mb-6" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<!--[-->`);
              ssrRenderList(unref(menu).childrens, (menu_item, index2) => {
                _push2(ssrRenderComponent(_component_UiAccordion, {
                  id: index2,
                  key: index2,
                  "is-absolute": !unref(isMobile),
                  "has-arrow": menu_item.childrens ? !unref(isMobile) ? "lg" : "sm" : false,
                  label: menu_item.name
                }, {
                  label: withCtx(({ label, isOpen }, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_component_UiButton, {
                        size: unref(buttonSize),
                        "is-uppercase": "",
                        label,
                        "is-underline": isOpen,
                        "is-underline-hover": !isOpen,
                        to: unref(localePath)(`/models${menu_item.url}`)
                      }, null, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(_component_UiButton, {
                          size: unref(buttonSize),
                          "is-uppercase": "",
                          label,
                          "is-underline": isOpen,
                          "is-underline-hover": !isOpen,
                          to: unref(localePath)(`/models${menu_item.url}`)
                        }, null, 8, ["size", "label", "is-underline", "is-underline-hover", "to"])
                      ];
                    }
                  }),
                  content: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<div class="flex flex-col items-start gap-y-1 mt-2" data-v-f5392f7a${_scopeId2}><!--[-->`);
                      ssrRenderList(menu_item.childrens, (sub_menu, index_sub) => {
                        _push3(ssrRenderComponent(_component_UiButton, {
                          key: index_sub,
                          label: sub_menu.name,
                          size: unref(subButtonSize),
                          to: unref(localePath)(`/models${sub_menu.url}`)
                        }, null, _parent3, _scopeId2));
                      });
                      _push3(`<!--]--></div>`);
                    } else {
                      return [
                        createVNode("div", { class: "flex flex-col items-start gap-y-1 mt-2" }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(menu_item.childrens, (sub_menu, index_sub) => {
                            return openBlock(), createBlock(_component_UiButton, {
                              key: index_sub,
                              label: sub_menu.name,
                              size: unref(subButtonSize),
                              to: unref(localePath)(`/models${sub_menu.url}`)
                            }, null, 8, ["label", "size", "to"]);
                          }), 128))
                        ])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]-->`);
            } else {
              return [
                (openBlock(true), createBlock(Fragment, null, renderList(unref(menu).childrens, (menu_item, index2) => {
                  return openBlock(), createBlock(_component_UiAccordion, {
                    id: index2,
                    key: index2,
                    "is-absolute": !unref(isMobile),
                    "has-arrow": menu_item.childrens ? !unref(isMobile) ? "lg" : "sm" : false,
                    label: menu_item.name
                  }, {
                    label: withCtx(({ label, isOpen }) => [
                      createVNode(_component_UiButton, {
                        size: unref(buttonSize),
                        "is-uppercase": "",
                        label,
                        "is-underline": isOpen,
                        "is-underline-hover": !isOpen,
                        to: unref(localePath)(`/models${menu_item.url}`)
                      }, null, 8, ["size", "label", "is-underline", "is-underline-hover", "to"])
                    ]),
                    content: withCtx(() => [
                      createVNode("div", { class: "flex flex-col items-start gap-y-1 mt-2" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(menu_item.childrens, (sub_menu, index_sub) => {
                          return openBlock(), createBlock(_component_UiButton, {
                            key: index_sub,
                            label: sub_menu.name,
                            size: unref(subButtonSize),
                            to: unref(localePath)(`/models${sub_menu.url}`)
                          }, null, 8, ["label", "size", "to"]);
                        }), 128))
                      ])
                    ]),
                    _: 2
                  }, 1032, ["id", "is-absolute", "has-arrow", "label"]);
                }), 128))
              ];
            }
          }),
          _: 1
        }, _parent));
      }
      _push(`<div class="h-full w-full flex flex-col justify-center" data-v-f5392f7a>`);
      _push(ssrRenderComponent(_component_Catalog, { models: unref(arrayModels) }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div style="${ssrRenderStyle(!unref(allModelsLoaded) ? null : { display: "none" })}" class="flex justify-center items-center mt-8 h-[300px]" data-v-f5392f7a${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UiSpinner, null, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              withDirectives(createVNode("div", {
                ref_key: "loadTrigger",
                ref: loadTrigger,
                class: "flex justify-center items-center mt-8 h-[300px]"
              }, [
                createVNode(_component_UiSpinner)
              ], 512), [
                [vShow, !unref(allModelsLoaded)]
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/models/[catalog]/[[category]]/[[type]]/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f5392f7a"]]);

export { index as default };
//# sourceMappingURL=index-BH09dLuq.mjs.map
