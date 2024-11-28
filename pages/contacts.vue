<script setup lang="ts">
  import { useGetSeoData } from '~/composables/useGetSeoData';

  const { locale } = useI18n();
  const { immediateLocale } = storeToRefs(useWindowStore());

  const { data } = await useApi(`/${immediateLocale.value}/wp-json/wp/v2/pages`, {
    query: {
      slug: 'contacts',
      acf_format: 'standard'
    },
    transform(data) {
      return data[0];
    },
  });

  const filterByLanguage = computed(() => {
    const titleKey = locale.value === 'ru' ? 'title' : 'title_en';
    const nameKey = locale.value === 'ru' ? 'name' : 'name_en';

    return data.value.acf.list.map(section => ({
      title: section[titleKey],
      items: section.items.map(item => ({
        name: item[nameKey],
        contacts: item.contacts,
      })),
    }));
  });

  useGetSeoData(data.value);
</script>

<template>
  <div>
    <Breadcrumbs
      :items="[{
        name: $t('pages.contacts.breadcrumbs.1'),
        link: '/',
        active: true
      },{
        name: $t('pages.contacts.breadcrumbs.2'),
        link: '/contact',
        active: false
      }]"
    />
    <div class="contact">
      <h1
        class="text-6xl max-tablet:text-5xl max-mobile:text-3xl uppercase mb-3"
        v-text="data.title.rendered"
      />

      <div class="flex flex-wrap max-w-[1000px] gap-x-[90px] max-mobile:gap-x-[18px] gap-y-8 max-mobile:gap-y-[40px] justify-start mt-[75px] max-mobile:mt-8">
        <div
          v-for="(category, index_category) in filterByLanguage"
          :key="index_category"
        >
          <h2
            class="text-5xl max-tablet:text-2xl max-mobile:text-lg uppercase"
            v-text="category.title"
          />
          <div
            v-for="(category_item, index_category_items) in category.items"
            :key="index_category_items"
            class="flex flex-col gap-y-3 text-lg max-tablet:text-lg max-mobile:text-sm mt-7 max-mobile:mt-5"
          >
            <h3 v-text="category_item.name" />
            <a
              v-for="(contact, index_contact) in category_item.contacts"
              :key="index_contact"
              class="underline underline-offset-2"
              :href="contact.href"
              v-text="contact.text"
            />
          </div>
        </div>
      </div>
    </div>
  </div>


</template>

<style scoped lang="scss">
.contact {
  @apply mt-[35px] mb-16;

  a {
    @apply underline;
  }

  p {
    @apply text-lg mb-4;
  }
}
</style>