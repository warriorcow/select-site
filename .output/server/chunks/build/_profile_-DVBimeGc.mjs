import { _ as __nuxt_component_0$4 } from './index-Cz1TveGH.mjs';
import { defineComponent, ref, computed, withAsyncContext, nextTick, mergeProps, unref, withCtx, createBlock, createCommentVNode, openBlock, Fragment, renderList, createVNode, toDisplayString, inject, watch, provide, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttr, ssrRenderSlot, ssrRenderClass, ssrRenderStyle } from 'vue/server-renderer';
import forEach from 'lodash/forEach.js';
import { s as storeToRefs, a as useWindowStore, f as defineStore, g as useRoute, h as useRouter, u as useI18n, c as useApi, i as showError, _ as _export_sfc, d as __nuxt_component_0$3, b as useLocalePath, e as useElementVisibility } from './server.mjs';
import omitBy from 'lodash/omitBy.js';
import isEmpty from 'lodash/isEmpty.js';
import gsap from 'gsap';
import __nuxt_component_1$1 from './arrow-Bb7Shf0I.mjs';
import { Swiper, SwiperSlide } from 'swiper/vue';
import __nuxt_component_0$5 from './play-BXqtxUg5.mjs';
import { vueVimeoPlayer } from 'vue-vimeo-player';
import { Navigation } from 'swiper/modules';
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

const findInTree = (tree, predicate, childrenKey = "childrens") => {
  let result = null;
  forEach(tree, (node) => {
    if (predicate(node)) {
      result = node;
      return false;
    }
    if (node[childrenKey]) {
      result = findInTree(node[childrenKey], predicate, childrenKey);
      if (result) return false;
    }
  });
  return result;
};
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "header",
  __ssrInlineRender: true,
  props: {
    params: {}
  },
  async setup(__props) {
    let __temp, __restore;
    const { locale } = useI18n();
    const { isMobile } = useWindowStore();
    const { immediateLocale } = storeToRefs(useWindowStore());
    const localePath = useLocalePath();
    const props = __props;
    const { data } = ([__temp, __restore] = withAsyncContext(() => useApi(`/${immediateLocale.value}/wp-json/custom/v1/categories`)), __temp = await __temp, __restore(), __temp);
    ref(null);
    const breadcrumbsData = computed(() => {
      const { name, url } = findInTree(data.value, (node) => node.id === props.params.acf.main_category.term_id) || { name: "", url: "" };
      return {
        name,
        url: localePath(`/models${url}`)
      };
    });
    const shortName = computed(() => {
      var _a, _b, _c, _d;
      return `${((_b = (_a = props.params) == null ? void 0 : _a.acf.fio[locale.value]) == null ? void 0 : _b.name) || ""} ${((_d = (_c = props.params) == null ? void 0 : _c.acf.fio[locale.value]) == null ? void 0 : _d.last_name[0]) || ""}`;
    });
    const hasVideo = computed(() => {
      var _a;
      return !!((_a = props.params.acf.model_main_video) == null ? void 0 : _a.url);
    });
    const videoUrl = computed(() => {
      if (isMobile && props.params.acf.model_main_video_mobile.url) {
        return props.params.acf.model_main_video_mobile.url;
      }
      return props.params.acf.model_main_video.url;
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a2;
      var _a;
      const _component_Breadcrumbs = __nuxt_component_0$4;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "detail-header" }, _attrs))} data-v-e39370bf>`);
      _push(ssrRenderComponent(_component_Breadcrumbs, {
        class: "mb-auto mr-auto mt-[57px] max-tablet:mt-[34px] z-30",
        items: [{
          name: unref(breadcrumbsData).name,
          link: unref(breadcrumbsData).url,
          active: true
        }, {
          name: unref(shortName),
          link: "",
          active: false,
          isWhite: true
        }]
      }, null, _parent));
      if (unref(hasVideo)) {
        _push(`<video muted${ssrRenderAttr("poster", unref(isMobile) ? _ctx.params.acf.model_main_image_mobile.url : _ctx.params.acf.model_main_image.url)} playsinline loop pip="false" class="absolute top-0 left-0 w-full h-full object-cover select-none pointer-events-none z-20" data-v-e39370bf><source${ssrRenderAttr("src", unref(videoUrl))} type="video/mp4" data-v-e39370bf> Your browser does not support HTML video. </video>`);
      } else {
        _push(`<picture class="detail-header__cover" data-v-e39370bf><source media="(min-width: 768px)"${ssrRenderAttr("srcset", _ctx.params.acf.model_main_image.url)} data-v-e39370bf><img${ssrRenderAttr("src", (_a = _ctx.params.acf.model_main_image_mobile.sizes) == null ? void 0 : _a.large)}${ssrRenderAttr("alt", unref(shortName))} data-v-e39370bf></picture>`);
      }
      _push(`<div class="detail-header__title" data-v-e39370bf>${(_a2 = unref(shortName)) != null ? _a2 : ""}</div><div class="detail-header__actions" data-v-e39370bf>`);
      ssrRenderSlot(_ctx.$slots, "actions", {}, null, _push, _parent);
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/detail/header.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const __nuxt_component_0$2 = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["__scopeId", "data-v-e39370bf"]]);
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "Collapsible",
  __ssrInlineRender: true,
  setup(__props) {
    const isOpen = ref(false);
    function toggle() {
      isOpen.value = !isOpen.value;
    }
    provide("isOpen", isOpen);
    provide("toggle", toggle);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "accordion" }, _attrs))} data-v-8574e919><div class="accordion-item" data-v-8574e919>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/Collapsible.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["__scopeId", "data-v-8574e919"]]);
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "CollapsibleTrigger",
  __ssrInlineRender: true,
  setup(__props) {
    const toggle = inject("toggle");
    if (toggle === void 0) {
      throw new Error("CollapsibleTrigger \u0434\u043E\u043B\u0436\u0435\u043D \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C\u0441\u044F \u0432\u043D\u0443\u0442\u0440\u0438 Collapsible.");
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<label${ssrRenderAttrs(mergeProps({ class: "accordion-trigger" }, _attrs))} data-v-f4db27a5>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</label>`);
    };
  }
});
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/CollapsibleTrigger.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__scopeId", "data-v-f4db27a5"]]);
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "CollapsibleContent",
  __ssrInlineRender: true,
  setup(__props) {
    const isOpen = inject("isOpen");
    if (isOpen === void 0) {
      throw new Error("CollapsibleContent \u0434\u043E\u043B\u0436\u0435\u043D \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C\u0441\u044F \u0432\u043D\u0443\u0442\u0440\u0438 Collapsible.");
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: ["accordion-animation-wrapper", [unref(isOpen) && "open"]]
      }, _attrs))}><div class="accordion-animation"><div class="${ssrRenderClass([[unref(isOpen) && "open"], "accordion-transform-wrapper"])}"><div class="accordion-content">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div></div></section>`);
    };
  }
});
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/CollapsibleContent.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "characteristics",
  __ssrInlineRender: true,
  props: {
    params: {}
  },
  setup(__props) {
    const { isMobile, isTablet } = storeToRefs(useWindowStore());
    const { locale } = useI18n();
    const props = __props;
    const isVisibleCharacteristics = ref(false);
    const buttonSize = computed(() => {
      if (isTablet.value) {
        return "sm";
      }
      if (isMobile.value) {
        return "xs";
      }
      return "lg";
    });
    const characteristicsData = computed(() => {
      const filteredEmptyParams = omitBy(props.params.ru, (value) => isEmpty(value));
      const localeData = props.params[locale.value];
      const characteristics = {
        ...Object.fromEntries(
          Object.entries(filteredEmptyParams).map(([key, value]) => {
            const isShoesParam = ["shoes", "\u043E\u0431\u0443\u0432\u044C", "shoe_size"].some(
              (shoeKeyword) => key.toLowerCase().includes(shoeKeyword)
            );
            if (isShoesParam) {
              return [key, value];
            }
            return [key, `${value} ${locale.value === "ru" ? "\u0441\u043C" : "cm"}`];
          })
        )
      };
      if (localeData.hair) {
        characteristics.hair = localeData.hair;
      }
      if (localeData.eyes) {
        characteristics.eyes = localeData.eyes;
      }
      return characteristics;
    });
    const toggle = () => isVisibleCharacteristics.value = !isVisibleCharacteristics.value;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiCollapsible = __nuxt_component_0$1;
      const _component_UiCollapsibleTrigger = __nuxt_component_1;
      const _component_UiButton = __nuxt_component_0$3;
      const _component_UiCollapsibleContent = _sfc_main$9;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col items-center px-4 pt-[30px] max-tablet:pt-[20px] pb-[40px] max-tablet:pb-0 max-tablet:p-5 mb-[25px] justify-center relative" }, _attrs))}>`);
      if (unref(isTablet) && !unref(isEmpty)(unref(characteristicsData))) {
        _push(ssrRenderComponent(_component_UiCollapsible, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_UiCollapsibleTrigger, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UiButton, {
                      label: _ctx.$t("pages.profile.characteristic.title"),
                      size: unref(buttonSize),
                      "is-uppercase": "",
                      "is-underline": "",
                      class: "mx-auto"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UiButton, {
                        label: _ctx.$t("pages.profile.characteristic.title"),
                        size: unref(buttonSize),
                        "is-uppercase": "",
                        "is-underline": "",
                        class: "mx-auto"
                      }, null, 8, ["label", "size"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UiCollapsibleContent, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="pt-[15px] flex max-tablet:flex-wrap justify-center max-tablet:justify-center gap-x-6 max-tablet:gap-y-4 max px-4 absolute max-tablet:static bottom-0 max-w-[916px] max-tablet:max-w-[700px] w-full max-tablet:mt-4"${_scopeId2}><!--[-->`);
                    ssrRenderList(unref(characteristicsData), (item, key) => {
                      _push3(`<div class="flex gap-x-4 max-tablet:gap-x-3 max-tablet:gap-x-2"${_scopeId2}><div class="text-md max-tablet:text-xs uppercase"${_scopeId2}>${ssrInterpolate(_ctx.$t(`pages.profile.characteristic.${key}`))}</div><div class="text-md max-tablet:text-xs text-accent uppercase text-nowrap"${_scopeId2}>${ssrInterpolate(item)}</div></div>`);
                    });
                    _push3(`<!--]--></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "pt-[15px] flex max-tablet:flex-wrap justify-center max-tablet:justify-center gap-x-6 max-tablet:gap-y-4 max px-4 absolute max-tablet:static bottom-0 max-w-[916px] max-tablet:max-w-[700px] w-full max-tablet:mt-4" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(characteristicsData), (item, key) => {
                          return openBlock(), createBlock("div", {
                            key,
                            class: "flex gap-x-4 max-tablet:gap-x-3 max-tablet:gap-x-2"
                          }, [
                            createVNode("div", {
                              class: "text-md max-tablet:text-xs uppercase",
                              textContent: toDisplayString(_ctx.$t(`pages.profile.characteristic.${key}`))
                            }, null, 8, ["textContent"]),
                            createVNode("div", {
                              class: "text-md max-tablet:text-xs text-accent uppercase text-nowrap",
                              textContent: toDisplayString(item)
                            }, null, 8, ["textContent"])
                          ]);
                        }), 128))
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_UiCollapsibleTrigger, null, {
                  default: withCtx(() => [
                    createVNode(_component_UiButton, {
                      label: _ctx.$t("pages.profile.characteristic.title"),
                      size: unref(buttonSize),
                      "is-uppercase": "",
                      "is-underline": "",
                      class: "mx-auto"
                    }, null, 8, ["label", "size"])
                  ]),
                  _: 1
                }),
                createVNode(_component_UiCollapsibleContent, null, {
                  default: withCtx(() => [
                    createVNode("div", { class: "pt-[15px] flex max-tablet:flex-wrap justify-center max-tablet:justify-center gap-x-6 max-tablet:gap-y-4 max px-4 absolute max-tablet:static bottom-0 max-w-[916px] max-tablet:max-w-[700px] w-full max-tablet:mt-4" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(characteristicsData), (item, key) => {
                        return openBlock(), createBlock("div", {
                          key,
                          class: "flex gap-x-4 max-tablet:gap-x-3 max-tablet:gap-x-2"
                        }, [
                          createVNode("div", {
                            class: "text-md max-tablet:text-xs uppercase",
                            textContent: toDisplayString(_ctx.$t(`pages.profile.characteristic.${key}`))
                          }, null, 8, ["textContent"]),
                          createVNode("div", {
                            class: "text-md max-tablet:text-xs text-accent uppercase text-nowrap",
                            textContent: toDisplayString(item)
                          }, null, 8, ["textContent"])
                        ]);
                      }), 128))
                    ])
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
      } else if (!unref(isEmpty)(unref(characteristicsData))) {
        _push(`<!--[-->`);
        _push(ssrRenderComponent(_component_UiButton, {
          label: _ctx.$t("pages.profile.characteristic.title"),
          size: unref(buttonSize),
          "is-uppercase": "",
          "is-underline": "",
          onClick: toggle
        }, null, _parent));
        if (unref(isVisibleCharacteristics)) {
          _push(`<div class="flex max-tablet:flex-wrap justify-center max-tablet:justify-center gap-x-6 max-tablet:gap-y-4 max px-4 absolute max-tablet:static bottom-0 max-w-[1200px] max-tablet:max-w-[600px] w-full max-tablet:mt-4"><!--[-->`);
          ssrRenderList(unref(characteristicsData), (item, key) => {
            _push(`<div class="flex gap-x-4 max-tablet:gap-x-3 max-tablet:gap-x-2"><div class="text-md max-tablet:text-xs uppercase whitespace-nowrap">${ssrInterpolate(_ctx.$t(`pages.profile.characteristic.${key}`))}</div><div class="text-md max-tablet:text-xs text-accent uppercase text-nowrap">${ssrInterpolate(item)}</div></div>`);
          });
          _push(`<!--]--></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/detail/characteristics.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = {
  props: {
    options: Object
  },
  async mounted() {
    const { Fancybox } = await import('@fancyapps/ui');
    Promise.resolve({});
    this.fancybox = Fancybox;
    this.fancybox.bind(this.$refs.container, "[data-fancybox]", {
      Images: {
        zoom: false
      },
      ...this.options || {}
    });
  },
  async updated() {
    if (this.fancybox) {
      this.fancybox.unbind(this.$refs.container);
      this.fancybox.close();
      this.fancybox.bind(this.$refs.container, "[data-fancybox]", {
        Images: {
          zoom: false
        },
        ...this.options || {}
      });
    }
  },
  unmounted() {
    if (this.fancybox) {
      this.fancybox.destroy();
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps(_ctx.$attrs, { ref: "container" }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/Fancybox.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "PhotoPortfolio",
  __ssrInlineRender: true,
  props: {
    src: {},
    index: {}
  },
  setup(__props) {
    const props = __props;
    const cardRef = ref(null);
    const isBeenShown = ref(false);
    const targetIsVisible = useElementVisibility(cardRef);
    watch(() => targetIsVisible.value, (val) => {
      if (val && !isBeenShown.value) {
        setTimeout(() => {
          isBeenShown.value = true;
        }, props.index * 100);
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref_key: "cardRef",
        ref: cardRef,
        "data-fancybox": "gallery",
        "data-src": _ctx.src,
        class: ["opacity-0 duration-700 transition cursor-pointer", [
          unref(isBeenShown) && "!opacity-100"
        ]]
      }, _attrs))}><img loading="lazy"${ssrRenderAttr("src", _ctx.src)} alt="" class="h-[clamp(11.375rem,4.0536rem+36.6071vw,37rem)] w-full object-cover object-top"></div>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/PhotoPortfolio.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const useProfileStore = defineStore("profile", {
  state: () => ({
    activePortfolioIndex: 0,
    isAnimatedTab: false,
    profileData: null,
    activeTabIndex: null,
    transitionTime: 0.4
  }),
  getters: {
    getShortName: (state) => {
      var _a, _b;
      const { immediateLocale } = useWindowStore();
      return `${(_a = state.profileData) == null ? void 0 : _a.acf.fio[immediateLocale].name} ${(_b = state.profileData) == null ? void 0 : _b.acf.fio[immediateLocale].last_name[0]}`;
    }
  },
  actions: {
    setActivePortfolioIndex(index) {
      setTimeout(() => {
        this.activePortfolioIndex = index;
      }, 0);
    },
    setActiveTabIndex(index) {
      this.activeTabIndex = index;
    }
  }
});
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "category",
  __ssrInlineRender: true,
  props: {
    params: {}
  },
  setup(__props, { expose: __expose }) {
    const { t } = useI18n();
    const props = __props;
    const { activePortfolioIndex } = storeToRefs(useProfileStore());
    const hasOpenTab = ref(false);
    const rootEl = ref(null);
    const portfolioCoverRef = ref(null);
    const moreImagesRef = ref([]);
    const accordionContentRef = ref([]);
    const parentImageTabHeight = ref(0);
    const currentPortfolioData = computed(() => props.params[activePortfolioIndex.value]);
    const showAllImages = ref(false);
    watch(() => currentPortfolioData.value, () => {
      if (hasOpenTab.value) {
        accordionContentRef.value.forEach((item, index) => {
          closeTab(index, () => {
            changePortfolio(() => {
              moreImagesRef.value.forEach((item2, index2) => {
                closeTabMoreImages(index2);
              });
              openTab(activePortfolioIndex.value);
            });
          });
        });
      } else {
        changePortfolio(() => {
          openTab(activePortfolioIndex.value);
        });
      }
    });
    function changePortfolio(onComplete) {
      showAllImages.value = false;
      gsap.to(portfolioCoverRef.value, {
        translateX: `-${100 * activePortfolioIndex.value}dvw`,
        duration: 0.7,
        ease: "expo.out",
        onComplete
      });
    }
    function closeTab(indexItem, onComplete) {
      const element = accordionContentRef.value[indexItem];
      hasOpenTab.value = false;
      gsap.to(element, {
        duration: 0.7,
        ease: "expoScale(0.5,7,none)",
        height: 0,
        onComplete
      });
    }
    function openTab(indexItem, onComplete) {
      const element = accordionContentRef.value[indexItem];
      hasOpenTab.value = true;
      gsap.to(element, {
        duration: 0.7,
        ease: "expoScale(0.5,7,none)",
        height: element.scrollHeight,
        onComplete
      });
    }
    function toggleTab(indexItem) {
      if (!hasOpenTab.value) {
        openTab(indexItem);
      } else {
        accordionContentRef.value.forEach((item, index) => {
          closeTab(index);
        });
      }
    }
    function closeTabMoreImages(index) {
      showAllImages.value = false;
      gsap.to(moreImagesRef.value[index], {
        duration: 0.7,
        ease: "expoScale(0.5,7,none)",
        height: 0,
        onStart: () => {
          gsap.to(accordionContentRef.value[index], {
            duration: 0.7,
            height: parentImageTabHeight.value || accordionContentRef.value[activePortfolioIndex.value].scrollHeight
          });
        }
      });
    }
    function openTabMoreImages() {
      parentImageTabHeight.value = accordionContentRef.value[activePortfolioIndex.value].scrollHeight;
      showAllImages.value = true;
      gsap.to(moreImagesRef.value[activePortfolioIndex.value], {
        duration: 0.7,
        ease: "expoScale(0.5,7,none)",
        height: moreImagesRef.value[activePortfolioIndex.value].scrollHeight,
        onStart: () => {
          gsap.to(accordionContentRef.value[activePortfolioIndex.value], {
            height: "fit-content"
          });
        },
        onComplete: () => {
          gsap.set(accordionContentRef.value[activePortfolioIndex.value], {
            height: accordionContentRef.value[activePortfolioIndex.value].scrollHeight
          });
        }
      });
    }
    function toggleTabMoreImages() {
      if (!showAllImages.value) {
        openTabMoreImages();
      } else {
        closeTabMoreImages(activePortfolioIndex.value);
      }
    }
    __expose({ openTab, rootEl });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiButton = __nuxt_component_0$3;
      const _component_UiFancybox = __nuxt_component_0;
      const _component_UiPhotoPortfolio = _sfc_main$6;
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref_key: "rootEl",
        ref: rootEl
      }, _attrs))} data-v-792e57f4>`);
      if (_ctx.params.filter((portfolio) => !portfolio.hidden).length) {
        _push(`<div class="portfolio flex overflow-hidden" data-v-792e57f4><div class="flex relative" data-v-792e57f4><!--[-->`);
        ssrRenderList(_ctx.params.filter((portfolio) => !portfolio.hidden), (item, index) => {
          _push(`<div data-v-792e57f4><div data-v-792e57f4><div class="portfolio__header w-dvw" data-v-792e57f4><div class="portfolio__cover" data-v-792e57f4>`);
          if (item.cover) {
            _push(`<picture data-v-792e57f4><source media="(min-width: 768px)"${ssrRenderAttr("srcset", item.cover)} data-v-792e57f4><img${ssrRenderAttr("src", item.coverMobile)}${ssrRenderAttr("alt", item.name)} data-v-792e57f4></picture>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div><div class="flex flex-col items-center" data-v-792e57f4><div class="portfolio__title" data-v-792e57f4>${ssrInterpolate(item.name)}</div><div class="portfolio__actions" data-v-792e57f4>`);
          _push(ssrRenderComponent(_component_UiButton, {
            class: "text-lg max-tablet:text-sm -mt-1.5 max-mobile:m-2",
            label: `${unref(t)("pages.profile.actions.view_portfolio")} ${item.name}`,
            color: "primary",
            "is-uppercase": "",
            "is-underline": "",
            onClick: ($event) => toggleTab(index)
          }, null, _parent));
          _push(`</div></div></div><div class="overflow-hidden h-0" data-v-792e57f4>`);
          _push(ssrRenderComponent(_component_UiFancybox, { class: "px-2.5" }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="flex flex-wrap justify-center mx-auto gap-2.5 mt-2.5 max-w-[915px]" data-v-792e57f4${_scopeId}><!--[-->`);
                ssrRenderList(item.items.slice(0, 4), (img, index_photo) => {
                  _push2(ssrRenderComponent(_component_UiPhotoPortfolio, {
                    key: index_photo,
                    src: img,
                    index,
                    class: "w-full max-w-[calc(50%-10px)]"
                  }, null, _parent2, _scopeId));
                });
                _push2(`<!--]--></div><div class="overflow-hidden h-0" data-v-792e57f4${_scopeId}><div class="flex flex-wrap justify-center mx-auto gap-2.5 mt-2.5 max-w-[915px]" data-v-792e57f4${_scopeId}><!--[-->`);
                ssrRenderList(item.items.slice(4), (img, index_nested_photo) => {
                  _push2(ssrRenderComponent(_component_UiPhotoPortfolio, {
                    key: index_nested_photo,
                    src: img,
                    index,
                    class: "w-full max-w-[calc(50%-10px)]"
                  }, null, _parent2, _scopeId));
                });
                _push2(`<!--]--></div></div>`);
              } else {
                return [
                  createVNode("div", { class: "flex flex-wrap justify-center mx-auto gap-2.5 mt-2.5 max-w-[915px]" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(item.items.slice(0, 4), (img, index_photo) => {
                      return openBlock(), createBlock(_component_UiPhotoPortfolio, {
                        key: index_photo,
                        src: img,
                        index,
                        class: "w-full max-w-[calc(50%-10px)]"
                      }, null, 8, ["src", "index"]);
                    }), 128))
                  ]),
                  createVNode("div", {
                    ref_for: true,
                    ref_key: "moreImagesRef",
                    ref: moreImagesRef,
                    class: "overflow-hidden h-0"
                  }, [
                    createVNode("div", { class: "flex flex-wrap justify-center mx-auto gap-2.5 mt-2.5 max-w-[915px]" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(item.items.slice(4), (img, index_nested_photo) => {
                        return openBlock(), createBlock(_component_UiPhotoPortfolio, {
                          key: index_nested_photo,
                          src: img,
                          index,
                          class: "w-full max-w-[calc(50%-10px)]"
                        }, null, 8, ["src", "index"]);
                      }), 128))
                    ])
                  ], 512)
                ];
              }
            }),
            _: 2
          }, _parent));
          if (item.items.length > 4) {
            _push(ssrRenderComponent(_component_UiButton, {
              label: !unref(showAllImages) ? _ctx.$t("pages.profile.actions.show_all") : _ctx.$t("pages.profile.actions.hide"),
              "is-underline": "",
              "is-uppercase": "",
              class: "mx-auto mt-[40px] max-mobile:mt-[15px] mb-[30px] max-mobile:mb-[15px] max-mobile:text-xs",
              onClick: toggleTabMoreImages
            }, null, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(`</div></div></div>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/detail/category.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-792e57f4"]]);
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "tabCard",
  __ssrInlineRender: true,
  props: {
    name: {},
    image: {},
    isActive: { type: Boolean }
  },
  setup(__props) {
    const isHovered = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiButton = __nuxt_component_0$3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-center justify-center relative h-[467px] w-[392px] cursor-pointer max-mobile:mx-auto max-tablet:w-[clamp(11.625rem,8.7841rem+14.2045vw,19.4375rem)] max-tablet:h-[clamp(13.8125rem,10.4034rem+17.0455vw,23.1875rem)]" }, _attrs))}><img class="${ssrRenderClass([[
        _ctx.isActive && "!grayscale"
      ], "absolute top-0 left-0 h-full w-full object-cover grayscale-0 transition duration-500"])}"${ssrRenderAttr("src", _ctx.image)}${ssrRenderAttr("alt", _ctx.name)}>`);
      _push(ssrRenderComponent(_component_UiButton, {
        label: _ctx.name,
        class: "!text-6xl max-mobile:!text-xl",
        color: "primary",
        "is-uppercase": "",
        "is-underline": unref(isHovered) || _ctx.isActive
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/detail/tabCard.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "VideoPlayer",
  __ssrInlineRender: true,
  props: {
    idVideo: {},
    cover: {},
    isPaused: { type: Boolean },
    isVertical: { type: Boolean }
  },
  setup(__props) {
    const { activeTabIndex } = storeToRefs(useProfileStore());
    const props = __props;
    const iframeRef = ref(null);
    const isPlayedVideo = ref(false);
    watch(() => props.isPaused, (value) => {
      if (value) {
        iframeRef.value.pause();
        iframeRef.value.update(props.idVideo);
        isPlayedVideo.value = false;
      }
    });
    function onPlay() {
      iframeRef.value.play();
    }
    function onPause() {
      iframeRef.value.pause();
      isPlayedVideo.value = false;
    }
    watch(() => activeTabIndex.value, () => {
      onPause();
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SvgoPlay = __nuxt_component_0$5;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["video-player", [
          _ctx.isVertical && "video-player--vertical"
        ]]
      }, _attrs))} data-v-135b0ede><div style="${ssrRenderStyle(!unref(isPlayedVideo) ? null : { display: "none" })}" class="video-player__cover" data-v-135b0ede>`);
      if (_ctx.cover) {
        _push(`<img${ssrRenderAttr("src", _ctx.cover)} alt="cover" data-v-135b0ede>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_SvgoPlay, {
        filled: "",
        class: "video-player__icon"
      }, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(unref(vueVimeoPlayer), {
        key: _ctx.idVideo,
        class: "video-player__video",
        ref_key: "iframeRef",
        ref: iframeRef,
        "video-id": _ctx.idVideo,
        onPlay,
        onPause
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/VideoPlayer.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_6 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-135b0ede"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "tabContent",
  __ssrInlineRender: true,
  props: {
    type: {},
    items: {},
    isActive: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const activeVideoSlide = ref(0);
    const showAllImages = ref(false);
    const moreImagesRef = ref(null);
    const isImages = computed(() => props.type === "image");
    const isVideos = computed(() => props.type === "video");
    watch(() => props.isActive, (value) => {
      if (!value) {
        showAllImages.value = false;
        closeTabMoreImages();
      }
    });
    function openTabMoreImages() {
      showAllImages.value = true;
      gsap.to(moreImagesRef.value, {
        duration: 0.7,
        ease: "expoScale(0.5,7,none)",
        height: moreImagesRef.value.scrollHeight
      });
    }
    function closeTabMoreImages() {
      showAllImages.value = false;
      gsap.to(moreImagesRef.value, {
        duration: 0.7,
        ease: "expoScale(0.5,7,none)",
        height: 0
      });
    }
    function toggleTabMoreImages() {
      if (!showAllImages.value) {
        openTabMoreImages();
      } else {
        closeTabMoreImages();
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiFancybox = __nuxt_component_0;
      const _component_UiPhotoPortfolio = _sfc_main$6;
      const _component_UiButton = __nuxt_component_0$3;
      const _component_SvgoArrow = __nuxt_component_1$1;
      const _component_Swiper = Swiper;
      const _component_SwiperSlide = SwiperSlide;
      const _component_UiVideoPlayer = __nuxt_component_6;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-1089a0d7>`);
      if (unref(isImages)) {
        _push(`<div data-v-1089a0d7>`);
        _push(ssrRenderComponent(_component_UiFancybox, { class: "tab-images group" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<!--[-->`);
              ssrRenderList(_ctx.items.slice(0, 4), (image, index) => {
                _push2(ssrRenderComponent(_component_UiPhotoPortfolio, {
                  key: index,
                  src: image,
                  index,
                  class: "tab-images__image"
                }, null, _parent2, _scopeId));
              });
              _push2(`<!--]--><div class="tab-images tab-images--more" data-v-1089a0d7${_scopeId}><!--[-->`);
              ssrRenderList(_ctx.items.slice(4), (image, index) => {
                _push2(ssrRenderComponent(_component_UiPhotoPortfolio, {
                  key: index,
                  src: image,
                  index,
                  class: "tab-images__image"
                }, null, _parent2, _scopeId));
              });
              _push2(`<!--]--></div>`);
            } else {
              return [
                (openBlock(true), createBlock(Fragment, null, renderList(_ctx.items.slice(0, 4), (image, index) => {
                  return openBlock(), createBlock(_component_UiPhotoPortfolio, {
                    key: index,
                    src: image,
                    index,
                    class: "tab-images__image"
                  }, null, 8, ["src", "index"]);
                }), 128)),
                createVNode("div", {
                  ref_key: "moreImagesRef",
                  ref: moreImagesRef,
                  class: "tab-images tab-images--more"
                }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(_ctx.items.slice(4), (image, index) => {
                    return openBlock(), createBlock(_component_UiPhotoPortfolio, {
                      key: index,
                      src: image,
                      index,
                      class: "tab-images__image"
                    }, null, 8, ["src", "index"]);
                  }), 128))
                ], 512)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_UiButton, {
          class: "max-mobile:!text-xs mx-auto",
          label: !unref(showAllImages) ? _ctx.$t("pages.profile.actions.show_all") : _ctx.$t("pages.profile.actions.hide"),
          "is-underline": "",
          "is-uppercase": "",
          onClick: toggleTabMoreImages
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(isVideos) && _ctx.items.length > 0) {
        _push(`<div data-v-1089a0d7><div class="tab-videos" data-v-1089a0d7><div class="tab-videos__arrow tab-videos__arrow--prev" data-v-1089a0d7>`);
        _push(ssrRenderComponent(_component_SvgoArrow, null, null, _parent));
        _push(`</div>`);
        _push(ssrRenderComponent(_component_Swiper, {
          ref: "swiperRef",
          modules: ["SwiperNavigation" in _ctx ? _ctx.SwiperNavigation : unref(Navigation)],
          "slides-per-view": 1,
          "auto-height": "",
          loop: "",
          "space-between": 30,
          navigation: {
            enabled: true,
            nextEl: ".tab-videos__arrow--next",
            prevEl: ".tab-videos__arrow--prev"
          },
          onSlideChangeTransitionEnd: (e) => {
            activeVideoSlide.value = e.realIndex;
          }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<!--[-->`);
              ssrRenderList(_ctx.items, (video, index) => {
                _push2(ssrRenderComponent(_component_SwiperSlide, { key: index }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<div class="tab-videos__video-slide" data-v-1089a0d7${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_UiVideoPlayer, {
                        "is-vertical": video.vertical,
                        "is-paused": unref(activeVideoSlide) !== index,
                        "id-video": video.link,
                        cover: video.image.url
                      }, null, _parent3, _scopeId2));
                      _push3(`</div>`);
                    } else {
                      return [
                        createVNode("div", { class: "tab-videos__video-slide" }, [
                          createVNode(_component_UiVideoPlayer, {
                            "is-vertical": video.vertical,
                            "is-paused": unref(activeVideoSlide) !== index,
                            "id-video": video.link,
                            cover: video.image.url
                          }, null, 8, ["is-vertical", "is-paused", "id-video", "cover"])
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
                (openBlock(true), createBlock(Fragment, null, renderList(_ctx.items, (video, index) => {
                  return openBlock(), createBlock(_component_SwiperSlide, { key: index }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "tab-videos__video-slide" }, [
                        createVNode(_component_UiVideoPlayer, {
                          "is-vertical": video.vertical,
                          "is-paused": unref(activeVideoSlide) !== index,
                          "id-video": video.link,
                          cover: video.image.url
                        }, null, 8, ["is-vertical", "is-paused", "id-video", "cover"])
                      ])
                    ]),
                    _: 2
                  }, 1024);
                }), 128))
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<div class="tab-videos__arrow tab-videos__arrow--next" data-v-1089a0d7>`);
        _push(ssrRenderComponent(_component_SvgoArrow, null, null, _parent));
        _push(`</div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/detail/tabContent.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const TabContent = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-1089a0d7"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "tabs",
  __ssrInlineRender: true,
  props: {
    params: {}
  },
  setup(__props) {
    const props = __props;
    const { isMobile } = storeToRefs(useWindowStore());
    const { activeTabIndex, isAnimatedTab, transitionTime } = storeToRefs(useProfileStore());
    const tabsContentRef = ref([]);
    const contentContainerRef = ref();
    const isActiveTab = (index) => activeTabIndex.value === +index;
    function toggleTab(index) {
      if (isAnimatedTab.value) return;
      if (activeTabIndex.value === index) {
        closeTab();
      } else {
        openTab(index);
      }
    }
    watch(() => activeTabIndex.value, (index) => {
      if (index === null) return;
      setTimeout(() => {
        openTab(index);
        scrollToContent(index);
      }, 100);
    }, {
      immediate: true
    });
    function openTab(index) {
      if (isAnimatedTab.value) return;
      isAnimatedTab.value = true;
      const currentTab = tabsContentRef.value[index];
      const otherTabs = tabsContentRef.value.filter((tab) => tab !== currentTab);
      function hasVisibleTab() {
        return tabsContentRef.value.some((tab) => tab.offsetHeight > 0);
      }
      if (hasVisibleTab()) {
        gsap.to(otherTabs, {
          duration: transitionTime.value,
          height: 0,
          onComplete: () => {
            gsap.to(currentTab, {
              duration: transitionTime.value,
              height: currentTab.scrollHeight,
              onComplete: () => {
                setTimeout(() => {
                  isAnimatedTab.value = false;
                }, 100);
                gsap.to(currentTab, {
                  height: "auto"
                });
              }
            });
          }
        });
      } else {
        gsap.to(currentTab, {
          duration: transitionTime.value,
          height: currentTab.scrollHeight,
          onComplete: () => {
            gsap.to(currentTab, {
              height: "auto",
              onComplete: () => {
                isAnimatedTab.value = false;
              }
            });
          }
        });
      }
      activeTabIndex.value = index;
    }
    function closeTab() {
      if (isAnimatedTab.value) return;
      isAnimatedTab.value = true;
      const currentTab = tabsContentRef.value[activeTabIndex.value];
      gsap.to(currentTab, {
        duration: transitionTime.value,
        height: 0,
        onComplete: () => {
          activeTabIndex.value = null;
          isAnimatedTab.value = false;
        }
      });
    }
    function scrollToContent(tabIndex) {
      nextTick(() => {
        const contentElement = tabsContentRef.value[tabIndex];
        if (!contentElement) return;
        const scrollDelay = transitionTime.value * 1050;
        setTimeout(() => {
          contentElement.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest"
          });
        }, scrollDelay);
      });
    }
    function onTabClick(index) {
      toggleTab(index);
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "tabs",
        ref_key: "contentContainerRef",
        ref: contentContainerRef
      }, _attrs))} data-v-c8be215f><div class="flex w-full max-mobile:flex-col justify-center gap-x-[15px] mb-[35px] max-mobile:mb-0 max-mobile:gap-y-[20px]" data-v-c8be215f><!--[-->`);
      ssrRenderList(props.params, (item, index) => {
        _push(`<div data-v-c8be215f>`);
        _push(ssrRenderComponent(_sfc_main$4, {
          name: item.name,
          image: item.cover,
          "is-active": isActiveTab(index.toString()),
          class: [
            unref(isAnimatedTab) && "pointer-events-none"
          ],
          onClick: ($event) => onTabClick(index)
        }, null, _parent));
        if (unref(isMobile)) {
          _push(`<div class="h-0 overflow-hidden" data-v-c8be215f>`);
          _push(ssrRenderComponent(TabContent, {
            "is-active": isActiveTab(index.toString()),
            type: item.type,
            items: item.items,
            class: "tab-scroll-area max-mobile:pt-[30px] max-mobile:mb-[15px]"
          }, null, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div>`);
      if (!unref(isMobile)) {
        _push(`<div data-v-c8be215f><!--[-->`);
        ssrRenderList(props.params, (item, index) => {
          _push(`<div class="h-0 overflow-hidden" data-v-c8be215f>`);
          _push(ssrRenderComponent(TabContent, {
            class: "tab-scroll-area",
            "is-active": isActiveTab(index.toString()),
            type: item.type,
            items: item.items
          }, null, _parent));
          _push(`</div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/detail/tabs.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-c8be215f"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[profile]",
  __ssrInlineRender: true,
  async setup(__props) {
    var _a;
    let __temp, __restore;
    const { isMobile, isTablet, immediateLocale } = storeToRefs(useWindowStore());
    const { setActivePortfolioIndex, setActiveTabIndex } = useProfileStore();
    const { isAnimatedTab, transitionTime, activePortfolioIndex } = storeToRefs(useProfileStore());
    const route = useRoute();
    const router = useRouter();
    const { t } = useI18n();
    const slug = ref(route.params.profile);
    const detailCategoryRef = ref(null);
    const detailTabsRef = ref(null);
    const profileComponentRef = ref();
    const isVisibleTab = ref(false);
    const buttonSize = computed(() => {
      if (isTablet.value) {
        return "sm";
      }
      if (isMobile.value) {
        return "xs";
      }
      return "lg";
    });
    const { data: profileData } = ([__temp, __restore] = withAsyncContext(() => useApi(`/${immediateLocale.value}/wp-json/wp/v2/posts`, {
      query: {
        slug,
        acf_format: "standard"
      },
      transform(data) {
        return data[0];
      },
      onResponse({ response }) {
        if (response._data.length === 0) {
          nextTick(() => {
            throw showError({
              statusCode: 404,
              fatal: true
            });
          });
        }
      }
    })), __temp = await __temp, __restore(), __temp);
    useGetSeoData(profileData.value, [{
      property: "og:image",
      content: ((_a = profileData.value) == null ? void 0 : _a.acf.model_main_image.url) || "/badge.png"
    }]);
    const portfolios = computed(() => {
      const createPortfolio = (name, key, index) => {
        var _a2, _b, _c, _d;
        return {
          index,
          name: t(`pages.profile.actions.${name}`),
          cover: ((_a2 = profileData.value.acf[`${key}_image`]) == null ? void 0 : _a2.url) || "",
          key,
          coverMobile: ((_b = profileData.value.acf[`${key}_image_mobile`].sizes) == null ? void 0 : _b.large) || "",
          items: !isMobile.value ? ((_c = profileData.value.acf[key]) == null ? void 0 : _c.map((image) => image.url)) || [] : ((_d = profileData.value.acf[key]) == null ? void 0 : _d.map((image) => {
            var _a3;
            return (_a3 = image.sizes) == null ? void 0 : _a3.large;
          })) || [],
          hidden: profileData.value.acf.switch_tabs.includes(key)
        };
      };
      const keys = [
        { name: "portfolio", key: "portfolio" },
        { name: "covers", key: "covers" },
        { name: "shows", key: "shows" }
      ];
      return keys.filter(({ key }) => profileData.value.acf[key]).map(({ name, key }, index) => createPortfolio(name, key, index)).filter((portfolio) => !portfolio.hidden);
    });
    const tabs = computed(() => {
      const createItem = (name, type, key) => {
        var _a2, _b, _c;
        return {
          name: t(`pages.profile.actions.${name}`),
          cover: ((_a2 = profileData.value.acf[`${key}_image`].sizes) == null ? void 0 : _a2.large) || "",
          type,
          key,
          items: !isMobile.value ? ((_b = profileData.value.acf[name]) == null ? void 0 : _b.map((item) => type === "image" ? item.url : item)) || [] : ((_c = profileData.value.acf[name]) == null ? void 0 : _c.map((item) => {
            var _a3;
            return type === "image" ? (_a3 = item.sizes) == null ? void 0 : _a3.large : item;
          })) || [],
          hidden: profileData.value.acf.switch_tabs.includes(key)
        };
      };
      const keys = [
        { name: "digitals", type: "image", key: "digitals" },
        { name: "videos", type: "video", key: "videos" }
      ];
      return keys.filter(({ name }) => profileData.value.acf[name]).map(({ name, type, key }) => createItem(name, type, key)).filter((tab) => !tab.hidden);
    });
    function clickPortfolioButton(index) {
      var _a2, _b;
      if (index == activePortfolioIndex.value) {
        (_a2 = detailCategoryRef.value) == null ? void 0 : _a2.openTab(index);
        (_b = detailCategoryRef.value) == null ? void 0 : _b.rootEl.scrollIntoView({ block: "start", behavior: "smooth" });
      } else {
        setActivePortfolioIndex(index);
        setTimeout(() => {
          var _a3;
          (_a3 = detailCategoryRef.value) == null ? void 0 : _a3.rootEl.scrollIntoView({ block: "start", behavior: "smooth" });
        }, 700);
      }
    }
    function clickTabButton(index) {
      transitionTime.value = 0;
      if (isAnimatedTab.value) return;
      setActiveTabIndex(index);
      setTimeout(() => {
        (void 0).querySelectorAll(".tab-scroll-area")[index].scrollIntoView({ block: "start", behavior: "smooth" });
        transitionTime.value = 0.4;
      }, 200);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_DetailHeader = __nuxt_component_0$2;
      const _component_UiButton = __nuxt_component_0$3;
      const _component_DetailCharacteristics = _sfc_main$8;
      const _component_DetailCategory = __nuxt_component_3;
      const _component_DetailTabs = __nuxt_component_4;
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref_key: "profileComponentRef",
        ref: profileComponentRef,
        class: "detail"
      }, _attrs))}>`);
      if (unref(profileData)) {
        _push(`<!--[-->`);
        _push(ssrRenderComponent(_component_DetailHeader, { params: unref(profileData) }, {
          actions: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<!--[-->`);
              ssrRenderList(unref(portfolios), (item, index) => {
                _push2(ssrRenderComponent(_component_UiButton, {
                  key: item.index,
                  label: _ctx.$t(`pages.profile.actions.${item.key}`),
                  size: unref(buttonSize),
                  color: "primary",
                  "is-uppercase": "",
                  "is-underline-hover": "",
                  onClick: ($event) => clickPortfolioButton(index)
                }, null, _parent2, _scopeId));
              });
              _push2(`<!--]--><!--[-->`);
              ssrRenderList(unref(tabs), (item, index) => {
                _push2(ssrRenderComponent(_component_UiButton, {
                  key: index,
                  label: _ctx.$t(`pages.profile.actions.${item.key}`),
                  size: unref(buttonSize),
                  color: "primary",
                  "is-uppercase": "",
                  "is-underline-hover": "",
                  onClick: ($event) => clickTabButton(index)
                }, null, _parent2, _scopeId));
              });
              _push2(`<!--]-->`);
              if (unref(profileData).acf.instagram && !unref(profileData).acf.switch_tabs.includes("instagram")) {
                _push2(ssrRenderComponent(_component_UiButton, {
                  label: _ctx.$t("pages.profile.actions.instagram"),
                  to: unref(profileData).acf.instagram,
                  target: "_blank",
                  size: unref(buttonSize),
                  color: "primary",
                  "is-uppercase": "",
                  "is-underline-hover": ""
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              if (unref(profileData).acf.www && !unref(profileData).acf.switch_tabs.includes("site")) {
                _push2(ssrRenderComponent(_component_UiButton, {
                  label: "models.com",
                  to: unref(profileData).acf.www,
                  target: "_blank",
                  size: unref(buttonSize),
                  color: "primary",
                  "is-uppercase": "",
                  "is-underline-hover": ""
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [
                (openBlock(true), createBlock(Fragment, null, renderList(unref(portfolios), (item, index) => {
                  return openBlock(), createBlock(_component_UiButton, {
                    key: item.index,
                    label: _ctx.$t(`pages.profile.actions.${item.key}`),
                    size: unref(buttonSize),
                    color: "primary",
                    "is-uppercase": "",
                    "is-underline-hover": "",
                    onClick: ($event) => clickPortfolioButton(index)
                  }, null, 8, ["label", "size", "onClick"]);
                }), 128)),
                (openBlock(true), createBlock(Fragment, null, renderList(unref(tabs), (item, index) => {
                  return openBlock(), createBlock(_component_UiButton, {
                    key: index,
                    label: _ctx.$t(`pages.profile.actions.${item.key}`),
                    size: unref(buttonSize),
                    color: "primary",
                    "is-uppercase": "",
                    "is-underline-hover": "",
                    onClick: ($event) => clickTabButton(index)
                  }, null, 8, ["label", "size", "onClick"]);
                }), 128)),
                unref(profileData).acf.instagram && !unref(profileData).acf.switch_tabs.includes("instagram") ? (openBlock(), createBlock(_component_UiButton, {
                  key: 0,
                  label: _ctx.$t("pages.profile.actions.instagram"),
                  to: unref(profileData).acf.instagram,
                  target: "_blank",
                  size: unref(buttonSize),
                  color: "primary",
                  "is-uppercase": "",
                  "is-underline-hover": ""
                }, null, 8, ["label", "to", "size"])) : createCommentVNode("", true),
                unref(profileData).acf.www && !unref(profileData).acf.switch_tabs.includes("site") ? (openBlock(), createBlock(_component_UiButton, {
                  key: 1,
                  label: "models.com",
                  to: unref(profileData).acf.www,
                  target: "_blank",
                  size: unref(buttonSize),
                  color: "primary",
                  "is-uppercase": "",
                  "is-underline-hover": ""
                }, null, 8, ["to", "size"])) : createCommentVNode("", true)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_DetailCharacteristics, {
          params: unref(profileData).acf.params
        }, null, _parent));
        _push(ssrRenderComponent(_component_DetailCategory, {
          ref_key: "detailCategoryRef",
          ref: detailCategoryRef,
          params: unref(portfolios)
        }, null, _parent));
        if (unref(tabs).length && unref(isVisibleTab)) {
          _push(ssrRenderComponent(_component_DetailTabs, {
            ref_key: "detailTabsRef",
            ref: detailTabsRef,
            params: unref(tabs)
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="flex justify-center p-[30px] max-mobile:p-[40px] max-mobile:px-2.5">`);
        _push(ssrRenderComponent(_component_UiButton, {
          class: "text-2xl max-tablet:text-lg max-mobile:text-sm",
          label: _ctx.$t("pages.profile.actions.see_other_models"),
          "is-uppercase": "",
          "is-underline": "",
          onClick: ($event) => unref(router).options.history.state.back ? unref(router).go(-1) : unref(router).push(unref(profileData).acf.back_link)
        }, null, _parent));
        _push(`</div><!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/[profile].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_profile_-DVBimeGc.mjs.map
