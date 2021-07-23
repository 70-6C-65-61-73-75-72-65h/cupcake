import * as Actions from "@actions/order";
import { Iorder } from "@src/constants";

const initialState: Iorder = {
  collection: {},
  totalItems: 0,
  totalPrice: 0,
};

const order = (state = initialState, action) => {
  switch (action.type) {
    case Actions.Type.AddCake: {
      // if exists id of cake -> increase amount and price
      return {
        ...state,
        collection: {
          ...state.collection,
          [action.cake.id]:
            action.cake.id in state.collection
              ? {
                  amount: ++state.collection[action.cake.id].amount,
                  itemTotalPrice:
                    state.collection[action.cake.id].itemTotalPrice +
                    action.cake.price,
                }
              : {
                  amount: 1,
                  itemTotalPrice: action.cake.price,
                },
        },
        totalItems: ++state.totalItems,
        totalPrice: state.totalPrice + action.cake.price,
      };
    }
    case Actions.Type.RemoveCake: {
      return {
        ...state,
        //  action.cake.id should be in state ( restricted by amount constant restrictions used in Amount component)
        collection:
          state.collection[action.cake.id].amount > 0
            ? {
                ...state.collection,
                [action.cake.id]: {
                  amount: --state.collection[action.cake.id].amount,
                  itemTotalPrice:
                    state.collection[action.cake.id].itemTotalPrice +
                    action.cake.price,
                },
              }
            : Object.keys(state.collection)
                .filter((key) => key !== action.cake.id)
                .reduce(
                  (acum, key) => ((acum[key] = state.collection[key]), acum),
                  {}
                ),

        //  Object.assign({},
        //   // Object.entries(state.collection).filter(item => item[1] === 0).reduce((acum , item) => (, acum) ,{})

        //   ),

        totalItems: --state.totalItems,
        totalPrice: state.totalPrice - action.cake.price,
      };
    }
    case Actions.Type.ClearOrder:
      return { ...initialState };
    default: {
      return state;
    }
  }
};
export default order;

// amount in each object-element
// amount in shoppingCart = sum of that (reselect)
