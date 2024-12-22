export const importAppStore = async () => {
  const { AppStore } = await import('../../app.store');
  return AppStore();
};
