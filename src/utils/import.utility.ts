export const importAppStore = async () => {
  const { AppStore } = await import('../stores/app.store');
  return AppStore();
};

export const importAuthStore = async () => {
  const { AuthStore } = await import('../stores/auth.store');
  return AuthStore();
};
