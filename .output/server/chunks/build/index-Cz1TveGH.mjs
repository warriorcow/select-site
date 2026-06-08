import { defineComponent, mergeProps, createVNode, resolveDynamicComponent, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderVNode, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc, b as useLocalePath, k as __nuxt_component_3$1 } from './server.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  props: {
    items: {}
  },
  setup(__props) {
    const localePath = useLocalePath();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "breadcrumbs" }, _attrs))} data-v-48c57c96><!--[-->`);
      ssrRenderList(_ctx.items, (item, index) => {
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(item.active ? unref(__nuxt_component_3$1) : "div"), {
          key: index,
          to: unref(localePath)(item.link),
          class: ["breadcrumbs__item", [
            item.active && "breadcrumbs__item--active",
            item.isWhite && "text-primary"
          ]]
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(item.name)}`);
            } else {
              return [
                createTextVNode(toDisplayString(item.name), 1)
              ];
            }
          }),
          _: 2
        }), _parent);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/breadcrumbs/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-48c57c96"]]);

export { __nuxt_component_0 as _ };
//# sourceMappingURL=index-Cz1TveGH.mjs.map
