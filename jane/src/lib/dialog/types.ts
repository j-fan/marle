export type DialogNode<KeyT> = {
  text: string;
  options: Array<{
    text: string;
    nextKey: KeyT;
  }>;
};

export type KeyBaseType = string | number | symbol;

export type DialogMap<KeyT extends KeyBaseType> = Record<
  KeyT,
  DialogNode<KeyT>
>;
