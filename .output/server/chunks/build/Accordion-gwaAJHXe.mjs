import { _ as _export_sfc, d as __nuxt_component_0 } from './server.mjs';
import __nuxt_component_1$1 from './arrow-Bb7Shf0I.mjs';
import { defineComponent, useSlots, ref, inject, watch, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderSlot, ssrRenderComponent } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Accordion",
  __ssrInlineRender: true,
  props: {
    id: {},
    label: {},
    nested: {},
    hasArrow: { type: [String, Boolean] },
    isAbsolute: { type: Boolean }
  },
  emits: ["toggle"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const props = __props;
    const slots = useSlots();
    const isOpen = ref(false);
    ref(null);
    const hasLabel = slots.label !== void 0;
    const activeAccordion = inject("activeAccordion", null);
    const setActiveAccordion = inject("setActiveAccordion", null);
    if (activeAccordion && setActiveAccordion) {
      watch(activeAccordion, (newVal) => {
        isOpen.value = newVal === props.id;
      });
    }
    const toggle = () => {
      if (activeAccordion && setActiveAccordion) {
        if (isOpen.value) {
          setActiveAccordion(null);
        } else {
          setActiveAccordion(props.id);
        }
      } else {
        isOpen.value = !isOpen.value;
      }
      emit("toggle", isOpen.value);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiButton = __nuxt_component_0;
      const _component_SvgoArrow = __nuxt_component_1$1;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["accordion", [
          _ctx.isAbsolute && "accordion--absolute"
        ]]
      }, _attrs))} data-v-4302372a><div class="${ssrRenderClass([[
        _ctx.hasArrow && "accordion--arrow"
      ], "flex w-full relative"])}" data-v-4302372a>`);
      if (hasLabel) {
        ssrRenderSlot(_ctx.$slots, "label", {
          label: _ctx.label,
          isOpen: isOpen.value
        }, null, _push, _parent);
      } else {
        _push(ssrRenderComponent(_component_UiButton, {
          size: "5xl",
          label: _ctx.label,
          "is-uppercase": "",
          "is-underline-hover": !isOpen.value,
          "is-underline": isOpen.value,
          onClick: toggle
        }, null, _parent));
      }
      if (_ctx.hasArrow) {
        _push(`<div class="${ssrRenderClass([[isOpen.value && "-scale-y-100"], "flex justify-start items-center px-2.5 cursor-pointer transition origin-center absolute right-0 h-full"])}" data-v-4302372a>`);
        if (_ctx.hasArrow === "lg") {
          _push(ssrRenderComponent(_component_SvgoArrow, { class: "!w-3 !h-2 !m-0" }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        if (_ctx.hasArrow === "sm") {
          _push(ssrRenderComponent(_component_SvgoArrow, { class: "!w-2 !h-2 !m-0" }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (isOpen.value) {
        _push(`<div class="accordion__wrapper" data-v-4302372a><div class="accordion__content" data-v-4302372a>`);
        ssrRenderSlot(_ctx.$slots, "content", { nested: _ctx.nested }, null, _push, _parent);
        _push(`</div></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/Accordion.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-4302372a"]]);

export { __nuxt_component_1 as _ };
//# sourceMappingURL=Accordion-gwaAJHXe.mjs.map
