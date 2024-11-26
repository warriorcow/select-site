import { defineStore } from 'pinia';
import useVuelidate from '@vuelidate/core';
import { required, email, minLength, numeric } from '@vuelidate/validators';

export const useCallbackModalStore = defineStore('callback-modal', () => {
  const router = useRouter();
  const { locale } = useI18n();

  const isVisible = ref(false);
  const hasError = ref(false);
  const isSubmitted = ref(false);
  const formState = ref({
    fullName: '',
    phone: '',
    email: '',
    city: '',
    dateOfBirth: '',
    maritalStatus: '',
    instagram: '',
    telegram: '',
    bust: '',
    waist: '',
    hips: '',
    clothingSize: '',
    shoeSize: '',
    portfolio: '',
    snaps: '',
    about: ''
  });

  const rules = {
    fullName: { required, minLength: minLength(3) },
    phone: { required },
    email: { required, email },
    city: { required, minLength: minLength(3) },
    dateOfBirth: { required, minLength: minLength(10) },
    maritalStatus: { required },
    instagram: { required },
    telegram: { required },
    bust: { required, numeric },
    waist: { required, numeric },
    hips: { required, numeric },
    clothingSize: { required },
    shoeSize: { required, numeric },
    portfolio: { required },
    snaps: { required },
    about: {}
  };

  const v$ = useVuelidate(rules, formState);

  const toggleCallbackModal = () => {
    isVisible.value = !isVisible.value;
  };

  const openCallbackModal = () => {
    isVisible.value = true;
  };

  const closeCallbackModal = () => {
    if (import.meta.client && window.location.hash) {
      router.replace({
        path: window.location.pathname,
        query: router.currentRoute.value.query
      });
    }
    resetForm();
  };

  const sendForm = async () => {
    hasError.value = false;
    if (!v$.value.$invalid) {
      try {
        await useApi('/wp-admin/admin-ajax.php', {
          method: 'post',
          body: {
            ...formState.value,
            action: 'sendform',
            lang: locale.value
          },
          onResponse() {
            isSubmitted.value = true;
          },
        });
      } catch (e) {
        hasError.value = true;
        console.error(`Не удалось отправить форму. ${e}`);
      }
    }
  };

  const resetForm = () => {
    isSubmitted.value = false;
    isVisible.value = false;
    formState.value = {
      fullName: '',
      phone: '',
      email: '',
      city: '',
      dateOfBirth: '',
      maritalStatus: '',
      instagram: '',
      telegram: '',
      bust: '',
      waist: '',
      hips: '',
      clothingSize: '',
      shoeSize: '',
      portfolio: '',
      snaps: '',
      about: ''
    };
    v$.value.$reset();
  };

  return {
    isVisible,
    isSubmitted,
    formState,
    v$,
    toggleCallbackModal,
    openCallbackModal,
    closeCallbackModal,
    sendForm,
    resetForm,
    hasError
  };
});