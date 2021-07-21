import * as Actions from "@actions/order";

const order = (state = [], action) => {
  switch (action.type) {
    case Actions.Type.AddCake: {
      return { ...action.order };
    }
    case Actions.Type.RemoveCake: {
      return { ...action.order };
    }
    case Actions.Type.ClearOrder:
      return [];
    default: {
      return state;
    }
  }
};
export default order;

// amount in each object-element
// amount in shoppingCart = sum of that (reselect)
