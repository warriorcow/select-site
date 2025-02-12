<script setup lang="ts">
  import type { ButtonSizesKeys } from '~/components/ui/Button.vue';
  import { useWindowStore } from '~/stores/window';
  import omitBy from 'lodash/omitBy';
  import isEmpty from 'lodash/isEmpty';
  import type { Params } from '~/models/profile';
  const { isMobile, isTablet } = storeToRefs(useWindowStore());
  const { locale } = useI18n();
  
  const props = defineProps<{
    params: Params
  }>();
  
  const isVisibleCharacteristics = ref(false);

  const buttonSize = computed((): ButtonSizesKeys => {
    if (isTablet.value) {
      return 'sm';
    }
    if (isMobile.value) {
      return 'xs';
    }
    return 'lg';
  });

  const characteristicsData = computed(() => {
    const filteredEmptyParams = omitBy(props.params.ru, value => isEmpty(value));

    const localeData = props.params[locale.value];
    const characteristics = {
      ...Object.fromEntries(
        Object.entries(filteredEmptyParams).map(([key, value]) => [key, `${value} ${locale.value === 'ru' ? 'см' : 'cm'}`])
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

</script>

<template>
  <div class="flex flex-col items-center px-4 pt-[30px] max-tablet:pt-[20px] pb-[40px] max-tablet:pb-0 max-tablet:p-5 mb-[25px] justify-center relative">
    <UiCollapsible v-if="isTablet && !isEmpty(characteristicsData)">
      <UiCollapsibleTrigger>
        <UiButton
          :label="$t('pages.profile.characteristic.title')"
          :size="buttonSize"
          is-uppercase
          is-underline
          class="mx-auto"
        />
      </UiCollapsibleTrigger>
      <UiCollapsibleContent>
        <div
          class="pt-[15px] flex max-tablet:flex-wrap justify-center max-tablet:justify-center gap-x-6 max-tablet:gap-y-4 max px-4 absolute max-tablet:static bottom-0 max-w-[916px] max-tablet:max-w-[700px] w-full max-tablet:mt-4"
        >
          <div
            v-for="(item, key) in characteristicsData"
            :key
            class="flex gap-x-4 max-tablet:gap-x-3 max-tablet:gap-x-2"
          >
            <div
              class="text-md max-tablet:text-xs uppercase"
              v-text="$t(`pages.profile.characteristic.${key}`)"
            />
            <div
              class="text-md max-tablet:text-xs text-accent uppercase text-nowrap"
              v-text="item"
            />
          </div>
        </div>
      </UiCollapsibleContent>
    </UiCollapsible>
    <template v-else-if="!isEmpty(characteristicsData)">
      <UiButton
        :label="$t('pages.profile.characteristic.title')"
        :size="buttonSize"
        is-uppercase
        is-underline
        @click="toggle"
      />
      <Transition name="fade">
        <div
          v-if="isVisibleCharacteristics"
          class="flex max-tablet:flex-wrap justify-center max-tablet:justify-center gap-x-6 max-tablet:gap-y-4 max px-4 absolute max-tablet:static bottom-0 max-w-[1200px] max-tablet:max-w-[600px] w-full max-tablet:mt-4"
        >
          <div
            v-for="(item, key) in characteristicsData"
            :key
            class="flex gap-x-4 max-tablet:gap-x-3 max-tablet:gap-x-2"
          >
            <div
              class="text-md max-tablet:text-xs uppercase whitespace-nowrap"
              v-text="$t(`pages.profile.characteristic.${key}`)"
            />
            <div
              class="text-md max-tablet:text-xs text-accent uppercase text-nowrap"
              v-text="item"
            />
          </div>
        </div>
      </Transition>
    </template>
  </div>
</template>

<style scoped lang="scss">

</style>