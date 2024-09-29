<script setup lang="ts">
  import type { ButtonSizesKeys } from '~/components/ui/Button.vue';
  import { useWindowStore } from '~/stores/window';
  import _ from 'lodash';
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
    const filteredEmptyParams = _.omitBy(props.params.ru, value => _.isEmpty(value));

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
  <div class="flex flex-col items-center px-4 pt-[30px] max-tablet:pt-[20px] pb-[40px] max-tablet:pb-[30px] max-mobile:p-5 mb-[25px] max-tablet:mb-[20px] max-mobile:mb-0 justify-center relative">
    <UiCollapsible v-if="isMobile && !_.isEmpty(characteristicsData)">
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
          class="pt-[15px] flex max-mobile:flex-wrap justify-center max-mobile:justify-center gap-x-6 max-mobile:gap-y-4 max px-4 absolute max-mobile:static bottom-0 max-w-[916px] max-tablet:max-w-[700px] w-full max-mobile:mt-4"
        >
          <div
            v-for="(item, key) in characteristicsData"
            :key
            class="flex gap-x-4 max-tablet:gap-x-3 max-mobile:gap-x-2"
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
    <template v-else-if="!_.isEmpty(characteristicsData)">
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
          class="flex max-mobile:flex-wrap justify-center max-mobile:justify-center gap-x-6 max-mobile:gap-y-4 max px-4 absolute max-mobile:static bottom-0 max-w-[916px] max-tablet:max-w-[700px] w-full max-mobile:mt-4"
        >
          <div
            v-for="(item, key) in characteristicsData"
            :key
            class="flex gap-x-4 max-tablet:gap-x-3 max-mobile:gap-x-2"
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
      </Transition>
    </template>
  </div>
</template>

<style scoped lang="scss">

</style>