import { _ as __nuxt_component_0 } from './index-Cz1TveGH.mjs';
import { defineComponent, withAsyncContext, computed, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import { u as useGetSeoData } from './useGetSeoData-BGPL5-04.mjs';
import { _ as _export_sfc, u as useI18n, s as storeToRefs, a as useWindowStore, c as useApi } from './server.mjs';
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
  __name: "contacts",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { locale } = useI18n();
    const { immediateLocale } = storeToRefs(useWindowStore());
    const { data } = ([__temp, __restore] = withAsyncContext(() => useApi(`/${immediateLocale.value}/wp-json/wp/v2/pages`, {
      query: {
        slug: "contacts",
        acf_format: "standard"
      },
      transform(data2) {
        return data2[0];
      }
    })), __temp = await __temp, __restore(), __temp);
    const filterByLanguage = computed(() => {
      const titleKey = locale.value === "ru" ? "title" : "title_en";
      const nameKey = locale.value === "ru" ? "name" : "name_en";
      return data.value.acf.list.map((section) => ({
        title: section[titleKey],
        items: section.items.map((item) => ({
          name: item[nameKey],
          contacts: item.contacts
        }))
      }));
    });
    useGetSeoData(data.value);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Breadcrumbs = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-61f27e85>`);
      _push(ssrRenderComponent(_component_Breadcrumbs, {
        items: [{
          name: _ctx.$t("pages.contacts.breadcrumbs.1"),
          link: "/",
          active: true
        }, {
          name: _ctx.$t("pages.contacts.breadcrumbs.2"),
          link: "/contact",
          active: false
        }]
      }, null, _parent));
      _push(`<div class="contact" data-v-61f27e85><h1 class="text-6xl max-tablet:text-5xl max-mobile:text-3xl uppercase mb-3" data-v-61f27e85>${ssrInterpolate(unref(data).title.rendered)}</h1><div class="flex flex-wrap max-w-[1000px] gap-x-[90px] max-mobile:gap-x-[18px] gap-y-8 max-mobile:gap-y-[40px] justify-start mt-[75px] max-mobile:mt-8" data-v-61f27e85><!--[-->`);
      ssrRenderList(unref(filterByLanguage), (category, index_category) => {
        _push(`<div data-v-61f27e85><h2 class="text-5xl max-tablet:text-2xl max-mobile:text-lg uppercase" data-v-61f27e85>${ssrInterpolate(category.title)}</h2><!--[-->`);
        ssrRenderList(category.items, (category_item, index_category_items) => {
          _push(`<div class="flex flex-col gap-y-3 text-lg max-tablet:text-lg max-mobile:text-sm mt-7 max-mobile:mt-5" data-v-61f27e85><h3 data-v-61f27e85>${ssrInterpolate(category_item.name)}</h3><!--[-->`);
          ssrRenderList(category_item.contacts, (contact, index_contact) => {
            _push(`<a class="underline underline-offset-2"${ssrRenderAttr("href", contact.href)} data-v-61f27e85>${ssrInterpolate(contact.text)}</a>`);
          });
          _push(`<!--]--></div>`);
        });
        _push(`<!--]--></div>`);
      });
      _push(`<!--]--></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contacts.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const contacts = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-61f27e85"]]);

export { contacts as default };
//# sourceMappingURL=contacts-_dtr7CmM.mjs.map
