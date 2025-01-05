export const importAuthStore = async () => {
  const { AuthStore } = await import('../stores/auth.store');
  return AuthStore();
};
