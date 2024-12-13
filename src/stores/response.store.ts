import { defineStore } from 'pinia';

type ResponseType = 'error' | 'success' | 'info' | 'warning' | null;

type ResponseMessage = {
  value: String | null;
  type: ResponseType;
};

export default defineStore('response', {
  state: () => ({
    message: {
      value: null,
      type: null,
    } as ResponseMessage,
  }),
  actions: {
    setMessage(
      value: String,
      type: ResponseType = 'error',
      duration: number = 5000
    ) {
      this.message = { value, type };
      setTimeout(() => {
        this.message = { value: null, type: null };
      }, duration);
    },
  },
});
