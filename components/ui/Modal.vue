<script setup lang="ts">
  import { useCallbackModalStore } from '~/stores/callback-modal';

  const route = useRoute();
  const { isVisible, isSubmitted, formState, v$ } = storeToRefs(useCallbackModalStore());
  const { closeCallbackModal, sendForm, resetForm } = useCallbackModalStore();

  watch(() => route.fullPath, () => {
    closeCallbackModal();
  });

  const phoneIsValid = ref<boolean | null>(null);

  onMounted(() => {
    document.addEventListener('keyup', e => {
      if(e.key === 'Escape') {
        closeCallbackModal();
      }
    });
  });

  function checkValidNumber(isValid: boolean) {
    phoneIsValid.value = isValid;
  }
</script>

<template>
  <Teleport to="body">
    <Transition name="fade">
      <div
        v-if="isVisible"
        class="flex justify-center items-center fixed inset-0 z-40 max-mobile:overflow-auto max-mobile:py-10 max-mobile:items-start"
      >
        <Transition
          mode="out-in"
          name="fade"
        >
          <div
            v-if="!isSubmitted"
            class="w-full max-w-[682px] bg-primary relative z-50 mx-2.5 overflow-auto"
          >
            <SvgoCross
              class="absolute top-[15px] right-[15px] cursor-pointer"
              @click="closeCallbackModal"
            />
            <div class="my-[45px] max-mobile:my-[30px] mx-[58px] max-mobile:mx-[15px]">
              <div>
                <div
                  class="text-6xl max-mobile:text-3xl uppercase mb-1.5"
                  v-text="$t('becomeAModel.title')"
                />
                <div
                  class="text-sm max-mobile:text-xs text-accent"
                  v-text="$t('becomeAModel.description')"
                />
              </div>
              <form class="grid gap-y-[20px] mt-[30px] max-mobile:mt-[28px]">
                <fieldset class="grid gap-y-[12px]">
                  <legend
                    class="text-lg max-mobile:text-md mb-2.5 text-nowrap"
                    v-text="$t('becomeAModel.form.first.title')"
                  />
                  <UiInput
                    v-model="formState.fullName"
                    :invalid="v$.fullName.$error"
                    :placeholder="$t('becomeAModel.form.first.namePlaceholder')"
                    @blur="v$.fullName.$touch"
                  />
                  <div class="gap-x-[15px] gap-y-[12px] max-mobile:gap-y-2.5 grid grid-cols-2 max-mobile:grid-cols-1 w-full">
                    <UiPhoneInput
                      v-model="formState.phone"
                      :label="$t('becomeAModel.form.first.phone')"
                      :invalid="v$.phone.$error"
                      @blur="v$.phone.$touch"
                      @is-valid="checkValidNumber"
                    />
                    <UiInput
                      v-model="formState.email"
                      :invalid="v$.email.$error"
                      :label="$t('becomeAModel.form.first.email')"
                      placeholder="example@mail.com"
                      @blur="v$.email.$touch"
                    />
                    <UiInput
                      v-model="formState.city"
                      :invalid="v$.city.$error"
                      :label="$t('becomeAModel.form.first.city')"
                      placeholder="NewYork"
                      @blur="v$.fullName.$touch"
                    />
                    <UiInput
                      v-model="formState.dateOfBirth"
                      :invalid="v$.dateOfBirth.$error"
                      :label="$t('becomeAModel.form.first.dateOfBirth')"
                      type="date"
                      placeholder="01.01.2001"
                      @blur="v$.dateOfBirth.$touch"
                    />
                  </div>

                  <div class="gap-x-[18px] max-mobile:gap-y-2.5 grid grid-cols-3 max-mobile:grid-cols-2 w-full">
                    <UiSelect
                      v-model="formState.maritalStatus"
                      :invalid="v$.maritalStatus.$error"
                      :label="$t('becomeAModel.form.first.maritalStatus')"
                      :options="[
                        $t('becomeAModel.form.first.maritalStatusOptions.1'),
                        $t('becomeAModel.form.first.maritalStatusOptions.2'),
                        $t('becomeAModel.form.first.maritalStatusOptions.3'),
                        $t('becomeAModel.form.first.maritalStatusOptions.4')
                      ]"
                      @blur="v$.maritalStatus.$touch"
                    />
                    <div class="hidden max-mobile:block"/>
                    <UiInput
                      v-model="formState.instagram"
                      :invalid="v$.instagram.$error"
                      :label="$t('becomeAModel.form.first.instagram')"
                      placeholder="@example"
                      @blur="v$.instagram.$touch"
                    />
                    <UiInput
                      v-model="formState.telegram"
                      :invalid="v$.telegram.$error"
                      :label="$t('becomeAModel.form.first.telegram')"
                      placeholder="@example"
                      @blur="v$.telegram.$touch"
                    />
                  </div>
                </fieldset>

                <fieldset class="grid gap-y-[12px]">
                  <legend
                    class="text-lg max-mobile:text-md mb-2.5 text-nowrap"
                    v-text="$t('becomeAModel.form.second.title')"
                  />
                  <div class="gap-x-[18px] gap-y-[12px] max-mobile:gap-y-2.5 grid grid-cols-3 max-mobile:grid-cols-2 w-full">
                    <UiInput
                      v-model="formState.bust"
                      :invalid="v$.bust.$error"
                      :label="$t('becomeAModel.form.second.bust')"
                      @blur="v$.bust.$touch"
                    />
                    <UiInput
                      v-model="formState.waist"
                      :invalid="v$.waist.$error"
                      :label="$t('becomeAModel.form.second.waist')"
                      @blur="v$.waist.$touch"
                    />
                    <UiInput
                      v-model="formState.hips"
                      :invalid="v$.hips.$error"
                      :label="$t('becomeAModel.form.second.hips')"
                      @blur="v$.hips.$touch"
                    />
                    <UiSelect
                      v-model="formState.clothingSize"
                      :invalid="v$.clothingSize.$error"
                      :label="$t('becomeAModel.form.second.clothingSize')"
                      :options="['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL']"
                      @blur="v$.clothingSize.$touch"
                    />
                    <UiInput
                      v-model="formState.shoeSize"
                      :invalid="v$.shoeSize.$error"
                      :label="$t('becomeAModel.form.second.shoeSize')"
                      @blur="v$.shoeSize.$touch"
                    />
                  </div>
                </fieldset>

                <fieldset class="grid gap-y-[12px]">
                  <legend
                    class="text-lg max-mobile:text-md mb-2.5 text-nowrap"
                    v-text="$t('becomeAModel.form.third.title')"
                  />
                  <div class="gap-x-[15px] gap-y-[12px] max-mobile:gap-y-2.5 grid grid-cols-2 max-mobile:grid-cols-1 w-full">
                    <UiInput
                      v-model="formState.portfolio"
                      :invalid="v$.portfolio.$error"
                      :label="$t('becomeAModel.form.third.linkToPortfolio')"
                      @blur="v$.portfolio.$touch"
                    />
                    <UiInput
                      v-model="formState.snaps"
                      :invalid="v$.snaps.$error"
                      :label="$t('becomeAModel.form.third.linkToSnaps')"
                      @blur="v$.snaps.$touch"
                    />
                    <UiTextarea
                      v-model="formState.about"
                      class="col-span-2 max-mobile:col-span-1"
                      :label="$t('becomeAModel.form.third.about')"
                      :placeholder="$t('becomeAModel.form.third.aboutPlaceholder')"
                    />
                  </div>
                </fieldset>
              </form>

              <div class="flex max-mobile:flex-col-reverse max-mobile:gap-y-2.5 items-end max-mobile:items-stretch mt-[24px] max-mobile:mt-2.5">
                <UiButton
                  class="mr-auto mb-1 max-mobile:!hidden"
                  color="accent"
                  :label="$t('becomeAModel.footer.backButton')"
                  size="sm"
                  is-uppercase
                  is-underline
                  @click="closeCallbackModal"
                />
                <div class="text-xs text-accent max-w-[232px] max-mobile:max-w-full">
                  {{ $t('becomeAModel.footer.policyText') }}
                  <NuxtLink
                    class="underline inline-block"
                    to="/policy"
                  >
                    {{ $t('becomeAModel.footer.policyLink') }}
                  </NuxtLink>
                </div>
                <button
                  class="flex items-center justify-center max-w-[217px] max-mobile:max-w-full w-full bg-[#D9D9D9] text-primary text-sm h-[37px] ml-[23px] max-mobile:ml-0"
                  :class="[
                    (!v$.$invalid && phoneIsValid) && 'bg-secondary'
                  ]"
                  @click="sendForm"
                  v-text="$t('becomeAModel.footer.submitButton')"
                />
              </div>
            </div>
          </div>
          <div
            v-else
            class="w-full max-w-[560px] py-[90px] px-5 bg-primary relative z-50"
          >
            <div class="max-w-[360px] mx-auto text-center">
              <div
                class="text-6xl uppercase"
                v-text="$t('becomeAModel.thanks.title')"
              />
              <div
                class="text-lg mt-3 max-w-[270px] mx-auto"
                v-text="$t('becomeAModel.thanks.description')"
              />
              <UiButton
                class="mt-5 mx-auto"
                is-underline
                is-uppercase
                size="lg"
                @click="resetForm"
                v-text="$t('becomeAModel.thanks.closeButton')"
              />
            </div>
          </div>
        </Transition>
        <UiOverlay
          :is-visible="true"
          @click="closeCallbackModal"
        />
      </div>
    </Transition>
  </Teleport>
</template>
