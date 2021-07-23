import { Icake } from "@src/constants";

export enum Type {
  SetCardList,
  ClearCardList,
}

export const setCardList = (cakes: Icake[]) => ({
  type: Type.SetCardList,
  cakes,
});

export const clearCardList = () => ({ type: Type.ClearCardList });
