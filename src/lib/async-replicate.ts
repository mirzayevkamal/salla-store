export const replicateAsync = (callback: () => void, timeout: number = 200) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(callback());
    }, timeout);
  });
};
