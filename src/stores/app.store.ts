import { defineStore } from 'pinia';
import { markRaw } from 'vue';
import AuthorizedLayout from '../layouts/authorized.layout.vue';
import DefaultLayout from '../layouts/default.layout.vue';
import { ResponseMessage, ResponseType } from '../types';

export const AppStore = defineStore('app', {
  state: () => ({
    message: {
      value: null,
      type: null,
    } as ResponseMessage,
    layout: markRaw(DefaultLayout) as
      | typeof DefaultLayout
      | typeof AuthorizedLayout,
  }),
  actions: {
    setMessage(
      value: String,
      type: ResponseType = 'info',
      duration: number = 5000
    ) {
      this.message = { value, type };
      setTimeout(() => {
        this.message = { value: null, type: null };
      }, duration);
    },
    setLayout(layout: typeof DefaultLayout | typeof AuthorizedLayout) {
      this.layout = markRaw(layout);
    },
  },
});
