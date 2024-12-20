import { defineStore } from 'pinia';
import { ResponseMessage, ResponseType } from '../types';

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
      type: ResponseType = 'info',
      duration: number = 5000
    ) {
      this.message = { value, type };
      setTimeout(() => {
        this.message = { value: null, type: null };
      }, duration);
    },
  },
});
