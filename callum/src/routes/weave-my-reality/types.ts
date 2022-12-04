export type Line = {
  id?: string;
  message: () => string[];
  repeat?: string[];
  action: () => Promise<void> | void;
  inputProps?: Record<string, string | number>;
  fakeMessage?: string;
};
