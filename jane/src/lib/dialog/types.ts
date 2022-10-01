export type Option<KeyT> = {
  text: string;
  nextKey: KeyT;
  onClick?: () => void;
};

export type DialogNode<KeyT> = {
  text: string;
  options: Array<Option<KeyT>>;
};

export type KeyBaseType = string | number | symbol;

export type DialogMap<KeyT extends KeyBaseType> = Record<
  KeyT,
  DialogNode<KeyT>
>;
