const debounce = <T extends (...args: any[]) => any>(
  mainFunction: T,
  delay: number,
): T => {
  let timer: ReturnType<typeof setTimeout> | undefined;

  return ((...args: Parameters<T>) => {
    clearTimeout(timer);

    timer = setTimeout(() => {
      mainFunction(...args);
    }, delay);
  }) as T;
};

export default debounce;
