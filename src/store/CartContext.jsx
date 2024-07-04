import { createContext, useReducer } from "react";

const CartContext = createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
});

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM":
      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.item.id
      );
      const updatedItems = [...state.items];

      if (existingCartItemIndex > -1) {
        const existingItem = state.items[existingCartItemIndex];
        const updatedItem = {
          ...existingItem,
          quantity: existingItem.quantity + 1,
        };
        updatedItem[existingCartItemIndex] = updatedItem;
      } else {
        updatedItems.push({ ...action.item, quantity: 1 });
      }

      return {
        ...state,
        items: updatedItems,
      };

    case "REMOVE_ITEM":
    //

    default:
      return state;
  }
}

export function CartContextProvider({ children }) {
  useReducer(cartReducer, { items: [] });
  return <CartContext.Provider>{children}</CartContext.Provider>;
}

export default CartContext;
