export const importAppStore = async () => {
  const { AppStore } = await import('../stores/app.store');
  return AppStore();
};
