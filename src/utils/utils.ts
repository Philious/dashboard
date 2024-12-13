export const throttle = <T>(func: (...args: T[]) => void, limit: number): ((...args: T[]) => void) => {
  let inThrottle: boolean;

  return function (...args: T[]) {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;

      setTimeout(() => {
        inThrottle = false;
      }, limit);
    }
  };
}

export const debounce = <T>(func: (...args: T[]) => void, delay: number): ((...args: T[]) => void) => {
  let timer: ReturnType<typeof setTimeout> | null = null;

  return function (...args: T[]) {
    if (timer !== null) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      func(...args);
    }, delay);
  };
}

export const toggle = (start: boolean) => {
  let toggleValue = start;
  return () => { toggleValue = !toggleValue; return toggleValue; }
}

export const getCssVar = (variable: string) => getComputedStyle(document.body).getPropertyValue(variable);

export const remToPx = (val: string) => {
  const parsVal = parseInt(val);
  if (val.indexOf('px') > 0) {

    return parsVal;
  } else {
    const mainSize = parseInt(getComputedStyle(document.body).getPropertyValue('font-size'));

    return mainSize * parsVal;
  }
}