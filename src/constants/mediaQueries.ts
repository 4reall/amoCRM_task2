export enum BreakpointEnum {
  xs = "20em",
  sm = "35em",
  md = "48em",
  lg = "62em",
  xl = "75em",
  xxl = "120em",
}

export const queries = {
  up: {
    xs: `(min-width: ${BreakpointEnum.xs})`,
    sm: `(min-width: ${BreakpointEnum.sm})`,
    md: `(min-width: ${BreakpointEnum.md})`,
    lg: `(min-width: ${BreakpointEnum.lg})`,
    xl: `(min-width: ${BreakpointEnum.xl})`,
    xxl: `(min-width: ${BreakpointEnum.xxl})`,
  } as const,
};
