import { defineStore } from 'pinia';
import useVuelidate from '@vuelidate/core';
import { required, email, minLength, numeric, helpers } from '@vuelidate/validators';

const validDate = helpers.withMessage(
  'Некорректная дата',
  (value) => {
    if (!value) return false;

    // Разбиваем дату на year, month, day
    const [year, month, day] = value.split('-').map(Number);

    // Проверка года на допустимый диапазон
    if (year < 1900 || year > new Date().getFullYear()) return false;

    // Проверяем, существует ли дата
    const date = new Date(year, month - 1, day);
    return (
      date.getFullYear() === year &&
      date.getMonth() === month - 1 &&
      date.getDate() === day
    );
  }
);


export const useCallbackModalStore = defineStore('callback-modal', () => {
  const router = useRouter();

  const isVisible = ref(false);
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

  // Определение правил валидации
  const rules = {
    fullName: { required, minLength: minLength(3) },
    phone: { required, minLength: minLength(10) },
    email: { required, email },
    city: { required },
    dateOfBirth: { required, validDate },
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

  // Инициализация Vuelidate
  const v$ = useVuelidate(rules, formState);

  const toggleCallbackModal = () => {
    isVisible.value = !isVisible.value;
  };

  const openCallbackModal = () => {
    isVisible.value = true;
  };

  const closeCallbackModal = () => {
    if (import.meta.client && window.location.hash) {
      // Убираем хэш из URL
      router.replace({
        path: window.location.pathname,
        query: router.currentRoute.value.query
      });
    }
    resetForm();
  };

  const sendForm = () => {
    if (!v$.value.$invalid) {
      isSubmitted.value = true;
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
    resetForm
  };
});