type BreakpointKey = 'sm' | 'md' | 'lg' | 'xl' | '2xl';

const twBreakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const;

export function useBreakpoints() {
  const { width: windowWidth } = useWindowSize();

  const getBkValue = (bk: MaybeRefOrGetter<BreakpointKey>) => {
    const key = toValue(bk);

    return twBreakpoints[key];
  };

  const greaterOrEqual = (bk: MaybeRefOrGetter<BreakpointKey>) => {
    return windowWidth.value >= getBkValue(bk);
  };

  const smallerOrEqual = (bk: MaybeRefOrGetter<BreakpointKey>) => {
    return windowWidth.value <= getBkValue(bk);
  };

  const greater = (bk: MaybeRefOrGetter<BreakpointKey>) => {
    return windowWidth.value > getBkValue(bk);
  };

  const smaller = (bk: MaybeRefOrGetter<BreakpointKey>) => {
    return windowWidth.value < getBkValue(bk);
  };

  return {
    greater,
    smaller,
    greaterOrEqual,
    smallerOrEqual,
  };
}
