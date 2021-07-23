import { Icake } from "@src/constants";

// type Dispatcher = (_: any) => {};

export enum Type {
  AddCake,
  RemoveCake,
  ClearOrder,
}

export const addCake = (cake: Icake) => ({ type: Type.AddCake, cake });

export const removeCake = (cake: Icake) => ({ type: Type.RemoveCake, cake });
export const clearOrder = () => ({ type: Type.ClearOrder });
