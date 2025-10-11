export const lp = (...args: Parameters<ReturnType<typeof useLocalePath>>) => {
  const localePath = useLocalePath();
  return localePath(...args);
};
