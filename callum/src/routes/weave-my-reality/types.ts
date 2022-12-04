export type Line = {
  id?: string;
  message: () => string[];
  repeat?: string[];
  action: () => void;
  inputProps?: Record<string, string | number>;
};
