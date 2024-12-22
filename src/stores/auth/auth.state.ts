import { useLocalStorage } from '@vueuse/core';

export const authorized = useLocalStorage<Boolean>('authorized', false);

export const setAuthorized = (value: boolean) => {
  authorized.value = value;
};
