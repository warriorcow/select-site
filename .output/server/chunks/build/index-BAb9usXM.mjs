import { _ as _export_sfc, s as storeToRefs, p as useMenuStore, q as useCallbackModalStore, b as useLocalePath, d as __nuxt_component_0$2, k as __nuxt_component_3$1, m as useScroll, o as useSwitchLocalePath, u as useI18n, a as useWindowStore, r as __nuxt_component_0$2$1, t as __nuxt_component_1$2 } from './server.mjs';
import { _ as __nuxt_component_1$1 } from './Logo-CmTsrdvF.mjs';
import { defineComponent, watch, withCtx, unref, createVNode, createBlock, openBlock, Fragment, renderList, createTextVNode, createCommentVNode, ref, computed, mergeProps, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrRenderAttrs, ssrRenderClass, ssrRenderTeleport, ssrRenderSlot } from 'vue/server-renderer';
import { _ as __nuxt_component_1 } from './Accordion-gwaAJHXe.mjs';
import __nuxt_component_4 from './instagram-icon-BiVQMRIv.mjs';

const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  props: {
    theme: { default: "dark" },
    isSticky: { type: Boolean },
    haveBg: { type: Boolean },
    withLogo: { type: Boolean, default: false }
  },
  setup(__props) {
    const { y: windowScrollY } = useScroll(void 0);
    const switchLocalePath = useSwitchLocalePath();
    const { locale } = useI18n();
    const localePath = useLocalePath();
    const props = __props;
    const { toggleMenu } = useMenuStore();
    const { isTablet, isMobile } = storeToRefs(useWindowStore());
    const { immediateSwitch } = useWindowStore();
    const { openCallbackModal } = useCallbackModalStore();
    const headerRef = ref(null);
    const isDarkPrevent = ref(false);
    const isDark = computed(() => {
      return props.theme === "dark" || isDarkPrevent.value;
    });
    const buttonSize = computed(() => {
      if (isTablet.value) {
        return "sm";
      }
      if (isMobile.value) {
        return "xs";
      }
      return "lg";
    });
    watch(() => windowScrollY.value, (val) => {
      if (val > 50 && headerRef.value) {
        isDarkPrevent.value = true;
        headerRef.value.classList.add("bg-primary");
      } else if (headerRef.value) {
        isDarkPrevent.value = false;
        headerRef.value.classList.remove("bg-primary");
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_3$1;
      const _component_UiLogo = __nuxt_component_1$1;
      const _component_UiButton = __nuxt_component_0$2;
      _push(`<header${ssrRenderAttrs(mergeProps({
        ref_key: "headerRef",
        ref: headerRef,
        class: [
          "header",
          [
            _ctx.haveBg && "header--bg",
            _ctx.isSticky && "header--sticky"
          ]
        ]
      }, _attrs))} data-v-3d9f9729>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        style: _ctx.withLogo ? null : { display: "none" },
        class: "header__logo",
        to: unref(localePath)("/")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiLogo, {
              class: ["header__logo-icon", [
                !unref(isDark) && "fill-primary"
              ]]
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UiLogo, {
                class: ["header__logo-icon", [
                  !unref(isDark) && "fill-primary"
                ]]
              }, null, 8, ["class"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UiButton, {
        "is-uppercase": "",
        "is-underline-hover": "",
        color: unref(isDark) ? "secondary" : "primary",
        label: _ctx.$t("header.becomeAModel"),
        size: unref(buttonSize),
        onClick: unref(openCallbackModal)
      }, null, _parent));
      _push(`<div class="header__lang" data-v-3d9f9729>`);
      _push(ssrRenderComponent(_component_UiButton, {
        "is-uppercase": "",
        "is-underline": unref(locale) === "en",
        "is-underline-hover": unref(locale) !== "en",
        color: unref(isDark) ? "secondary" : "primary",
        size: unref(buttonSize),
        label: "en",
        to: unref(switchLocalePath)("en"),
        onClick: (e) => unref(immediateSwitch)(e, "en")
      }, null, _parent));
      _push(ssrRenderComponent(_component_UiButton, {
        "is-uppercase": "",
        "is-underline": unref(locale) === "ru",
        "is-underline-hover": unref(locale) !== "ru",
        color: unref(isDark) ? "secondary" : "primary",
        size: unref(buttonSize),
        label: "ru",
        to: unref(switchLocalePath)("ru"),
        onClick: (e) => unref(immediateSwitch)(e, "ru")
      }, null, _parent));
      _push(`</div><button class="${ssrRenderClass([[
        unref(isDark) ? "border-secondary" : "border-primary"
      ], "header__hamburger"])}" data-v-3d9f9729><!--[-->`);
      ssrRenderList(3, (item) => {
        _push(`<span class="${ssrRenderClass([[
          unref(isDark) ? "border-b-secondary" : "border-b-primary"
        ], "header__hamburger-label"])}" data-v-3d9f9729></span>`);
      });
      _push(`<!--]--></button></header>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/header/index.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-3d9f9729"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Sidedrawer",
  __ssrInlineRender: true,
  setup(__props) {
    const { isMenuOpen } = storeToRefs(useMenuStore());
    const { toggleMenu } = useMenuStore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SvgoCross = __nuxt_component_0$2$1;
      const _component_UiOverlay = __nuxt_component_1$2;
      ssrRenderTeleport(_push, (_push2) => {
        if (unref(isMenuOpen)) {
          _push2(`<div class="sidedrawer" data-v-92fa3cee><button class="sidedrawer__close" data-v-92fa3cee>`);
          _push2(ssrRenderComponent(_component_SvgoCross, { class: "sidedrawer__close-icon" }, null, _parent));
          _push2(`</button><div class="sidedrawer__content" data-v-92fa3cee>`);
          ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent);
          _push2(`</div></div>`);
        } else {
          _push2(`<!---->`);
        }
        _push2(ssrRenderComponent(_component_UiOverlay, {
          "is-visible": unref(isMenuOpen),
          onClick: unref(toggleMenu)
        }, null, _parent));
      }, "body", false, _parent);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/Sidedrawer.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-92fa3cee"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { menu, isMenuOpen } = storeToRefs(useMenuStore());
    const { closeMenu } = useMenuStore();
    const { openCallbackModal } = useCallbackModalStore();
    const localePath = useLocalePath();
    watch(() => isMenuOpen.value, (value) => {
      (void 0).body.style.overflow = value ? "hidden" : null;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiSidedrawer = __nuxt_component_0;
      const _component_UiAccordion = __nuxt_component_1;
      const _component_UiButton = __nuxt_component_0$2;
      const _component_NuxtLink = __nuxt_component_3$1;
      const _component_SvgoInstagramIcon = __nuxt_component_4;
      _push(ssrRenderComponent(_component_UiSidedrawer, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(menu), (item, index) => {
              _push2(`<!--[-->`);
              if (!!item.children.length) {
                _push2(ssrRenderComponent(_component_UiAccordion, {
                  label: item.title.rendered,
                  nested: item.children
                }, {
                  content: withCtx((slotScope, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<div class="flex flex-col items-start gap-y-6 pt-3.5"${_scopeId2}><!--[-->`);
                      ssrRenderList(slotScope.nested, (nest, nest_index) => {
                        _push3(ssrRenderComponent(_component_UiAccordion, {
                          key: nest_index,
                          label: nest.title.rendered,
                          nested: nest.children,
                          "has-arrow": nest.children.length ? "lg" : false
                        }, {
                          label: withCtx(({ label }, _push4, _parent4, _scopeId3) => {
                            if (_push4) {
                              _push4(ssrRenderComponent(_component_UiButton, {
                                size: "xl",
                                to: unref(localePath)(`/models${nest.url}`),
                                label,
                                onClick: unref(closeMenu)
                              }, null, _parent4, _scopeId3));
                            } else {
                              return [
                                createVNode(_component_UiButton, {
                                  size: "xl",
                                  to: unref(localePath)(`/models${nest.url}`),
                                  label,
                                  onClick: unref(closeMenu)
                                }, null, 8, ["to", "label", "onClick"])
                              ];
                            }
                          }),
                          content: withCtx((slotScopeLevel, _push4, _parent4, _scopeId3) => {
                            if (_push4) {
                              _push4(`<div class="flex flex-col gap-y-3 pt-3.5"${_scopeId3}><!--[-->`);
                              ssrRenderList(slotScopeLevel.nested, (button, button_index) => {
                                _push4(ssrRenderComponent(_component_UiButton, {
                                  key: button_index,
                                  to: unref(localePath)(`/models${button.url}`),
                                  class: "hover:!text-accent transition-colors",
                                  size: "md",
                                  label: button.title.rendered,
                                  onClick: unref(closeMenu)
                                }, null, _parent4, _scopeId3));
                              });
                              _push4(`<!--]--></div>`);
                            } else {
                              return [
                                createVNode("div", { class: "flex flex-col gap-y-3 pt-3.5" }, [
                                  (openBlock(true), createBlock(Fragment, null, renderList(slotScopeLevel.nested, (button, button_index) => {
                                    return openBlock(), createBlock(_component_UiButton, {
                                      key: button_index,
                                      to: unref(localePath)(`/models${button.url}`),
                                      class: "hover:!text-accent transition-colors",
                                      size: "md",
                                      label: button.title.rendered,
                                      onClick: unref(closeMenu)
                                    }, null, 8, ["to", "label", "onClick"]);
                                  }), 128))
                                ])
                              ];
                            }
                          }),
                          _: 2
                        }, _parent3, _scopeId2));
                      });
                      _push3(`<!--]--></div>`);
                    } else {
                      return [
                        createVNode("div", { class: "flex flex-col items-start gap-y-6 pt-3.5" }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(slotScope.nested, (nest, nest_index) => {
                            return openBlock(), createBlock(_component_UiAccordion, {
                              key: nest_index,
                              label: nest.title.rendered,
                              nested: nest.children,
                              "has-arrow": nest.children.length ? "lg" : false
                            }, {
                              label: withCtx(({ label }) => [
                                createVNode(_component_UiButton, {
                                  size: "xl",
                                  to: unref(localePath)(`/models${nest.url}`),
                                  label,
                                  onClick: unref(closeMenu)
                                }, null, 8, ["to", "label", "onClick"])
                              ]),
                              content: withCtx((slotScopeLevel) => [
                                createVNode("div", { class: "flex flex-col gap-y-3 pt-3.5" }, [
                                  (openBlock(true), createBlock(Fragment, null, renderList(slotScopeLevel.nested, (button, button_index) => {
                                    return openBlock(), createBlock(_component_UiButton, {
                                      key: button_index,
                                      to: unref(localePath)(`/models${button.url}`),
                                      class: "hover:!text-accent transition-colors",
                                      size: "md",
                                      label: button.title.rendered,
                                      onClick: unref(closeMenu)
                                    }, null, 8, ["to", "label", "onClick"]);
                                  }), 128))
                                ])
                              ]),
                              _: 2
                            }, 1032, ["label", "nested", "has-arrow"]);
                          }), 128))
                        ])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              if (item.children.length === 0 && item.url) {
                _push2(ssrRenderComponent(_component_UiButton, {
                  to: unref(localePath)(`${item.url}`),
                  "is-uppercase": "",
                  "is-underline-hover": "",
                  size: "5xl",
                  label: item.title.rendered,
                  onClick: ($event) => unref(closeMenu)()
                }, null, _parent2, _scopeId));
              } else if (item.children.length === 0) {
                _push2(ssrRenderComponent(_component_UiButton, {
                  "is-uppercase": "",
                  "is-underline-hover": "",
                  size: "5xl",
                  label: item.title.rendered,
                  onClick: ($event) => (unref(closeMenu)(), unref(openCallbackModal)())
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(`<!--]-->`);
            });
            _push2(`<!--]--><div class="mt-auto pt-5"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              class: "flex items-center gap-x-2 text-lg",
              to: "https://www.instagram.com/selectmgmt"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_SvgoInstagramIcon, { class: "!w-6 !h-6 block !mb-0" }, null, _parent3, _scopeId2));
                  _push3(` @selectmgmt `);
                } else {
                  return [
                    createVNode(_component_SvgoInstagramIcon, { class: "!w-6 !h-6 block !mb-0" }),
                    createTextVNode(" @selectmgmt ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(unref(menu), (item, index) => {
                return openBlock(), createBlock(Fragment, { key: index }, [
                  !!item.children.length ? (openBlock(), createBlock(_component_UiAccordion, {
                    key: 0,
                    label: item.title.rendered,
                    nested: item.children
                  }, {
                    content: withCtx((slotScope) => [
                      createVNode("div", { class: "flex flex-col items-start gap-y-6 pt-3.5" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(slotScope.nested, (nest, nest_index) => {
                          return openBlock(), createBlock(_component_UiAccordion, {
                            key: nest_index,
                            label: nest.title.rendered,
                            nested: nest.children,
                            "has-arrow": nest.children.length ? "lg" : false
                          }, {
                            label: withCtx(({ label }) => [
                              createVNode(_component_UiButton, {
                                size: "xl",
                                to: unref(localePath)(`/models${nest.url}`),
                                label,
                                onClick: unref(closeMenu)
                              }, null, 8, ["to", "label", "onClick"])
                            ]),
                            content: withCtx((slotScopeLevel) => [
                              createVNode("div", { class: "flex flex-col gap-y-3 pt-3.5" }, [
                                (openBlock(true), createBlock(Fragment, null, renderList(slotScopeLevel.nested, (button, button_index) => {
                                  return openBlock(), createBlock(_component_UiButton, {
                                    key: button_index,
                                    to: unref(localePath)(`/models${button.url}`),
                                    class: "hover:!text-accent transition-colors",
                                    size: "md",
                                    label: button.title.rendered,
                                    onClick: unref(closeMenu)
                                  }, null, 8, ["to", "label", "onClick"]);
                                }), 128))
                              ])
                            ]),
                            _: 2
                          }, 1032, ["label", "nested", "has-arrow"]);
                        }), 128))
                      ])
                    ]),
                    _: 2
                  }, 1032, ["label", "nested"])) : createCommentVNode("", true),
                  item.children.length === 0 && item.url ? (openBlock(), createBlock(_component_UiButton, {
                    key: 1,
                    to: unref(localePath)(`${item.url}`),
                    "is-uppercase": "",
                    "is-underline-hover": "",
                    size: "5xl",
                    label: item.title.rendered,
                    onClick: ($event) => unref(closeMenu)()
                  }, null, 8, ["to", "label", "onClick"])) : item.children.length === 0 ? (openBlock(), createBlock(_component_UiButton, {
                    key: 2,
                    "is-uppercase": "",
                    "is-underline-hover": "",
                    size: "5xl",
                    label: item.title.rendered,
                    onClick: ($event) => (unref(closeMenu)(), unref(openCallbackModal)())
                  }, null, 8, ["label", "onClick"])) : createCommentVNode("", true)
                ], 64);
              }), 128)),
              createVNode("div", { class: "mt-auto pt-5" }, [
                createVNode(_component_NuxtLink, {
                  class: "flex items-center gap-x-2 text-lg",
                  to: "https://www.instagram.com/selectmgmt"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_SvgoInstagramIcon, { class: "!w-6 !h-6 block !mb-0" }),
                    createTextVNode(" @selectmgmt ")
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sidemenu/index.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const localePath = useLocalePath();
    const { isTablet, isMobile } = storeToRefs(useWindowStore());
    const buttonSize = computed(() => {
      if (isTablet.value) {
        return "sm";
      }
      if (isMobile.value) {
        return "xs";
      }
      return "md";
    });
    const copyrightAutoText = computed(() => {
      const currentDate = /* @__PURE__ */ new Date();
      const currentYear = currentDate.getFullYear();
      return `\xA9${currentYear} select management`;
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_UiButton = __nuxt_component_0$2;
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "footer" }, _attrs))} data-v-032f1bcc><div class="footer__copyright" data-v-032f1bcc>${(_a = unref(copyrightAutoText)) != null ? _a : ""}</div>`);
      _push(ssrRenderComponent(_component_UiButton, {
        label: _ctx.$t("footer.policyText"),
        color: "accent",
        size: unref(buttonSize),
        to: unref(localePath)("/policy"),
        "is-underline-hover": ""
      }, null, _parent));
      _push(`</footer>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/footer/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-032f1bcc"]]);

export { __nuxt_component_0$1 as _, _sfc_main$1 as a, __nuxt_component_2 as b };
//# sourceMappingURL=index-BAb9usXM.mjs.map
