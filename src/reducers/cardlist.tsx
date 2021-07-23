import * as Actions from "@actions/cardlist";
import { Icake } from "@src/constants";

const initialState: Icake[] = [];

const cardlist = (state = initialState, action): Icake[] => {
  switch (action.type) {
    case Actions.Type.SetCardList: {
      return { ...action.cakes };
    }
    case Actions.Type.ClearCardList:
      return { ...initialState };
    default: {
      return state;
    }
  }
};
export default cardlist;
