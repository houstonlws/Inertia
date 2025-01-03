import { defineStore } from 'pinia';
import { markRaw, ref, shallowRef } from 'vue';
import AuthorizedLayout from '../layouts/authorized.layout.vue';
import DefaultLayout from '../layouts/default.layout.vue';
import { ResponseMessage, ResponseType } from '../types';
import { importAuthStore } from '../utils/importAuthStore';

export const AppStore = defineStore('app', () => {
  const message = ref<ResponseMessage>({ value: null, type: null });

  const layout = shallowRef<typeof DefaultLayout | typeof AuthorizedLayout>(
    markRaw(DefaultLayout)
  );

  const setMessage = (
    value: String,
    type: ResponseType = 'info',
    duration: number = 5000
  ) => {
    message.value = { value, type };
    setTimeout(() => {
      message.value = { value: null, type: null };
    }, duration);
  };

  const fetchLayout = async () => {
    const authStore = await importAuthStore();
    layout.value = markRaw(
      authStore.authorized ? AuthorizedLayout : DefaultLayout
    );
  };

  return { message, layout, setMessage, fetchLayout };
});
