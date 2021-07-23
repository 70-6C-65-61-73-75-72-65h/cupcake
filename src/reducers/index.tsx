import { TypedUseSelectorHook, useSelector } from "react-redux";
import { combineReducers } from "redux";

import order from "./order";
import cardlist from "./cardlist";

export const reducers = combineReducers({ order, cardlist });
export type RootState = ReturnType<typeof reducers>;
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
