export type Line = {
  message: () => string[];
  repeat?: string[];
  action: () => void;
  inputProps?: Record<string, string | number>;
};
