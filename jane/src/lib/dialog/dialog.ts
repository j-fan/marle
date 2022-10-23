import type { DialogMap, DialogNode, KeyBaseType } from "./types";

export const pickOption = <KeyT extends KeyBaseType>(
  dialogData: DialogMap<KeyT>,
  key: KeyT
): DialogNode<KeyT> => {
  const nextOption = dialogData[key];

  if (nextOption === undefined) {
    console.error(`Dialog key ${String(key)} is unknown in dialogData`);
    return {
      text: `Something went wrong with the dialog logic: "${String(
        key
      )}" key is unknown`,
      options: []
    };
  }

  return nextOption;
};
