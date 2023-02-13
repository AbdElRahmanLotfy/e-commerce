import { ADD_TO_FAVOURITES, REMOVE_FROM_FAVOURITES } from "./fav-types";

// saving favourites into local storage

const Storage = (favItems) => {
  localStorage.setItem(
    "favItems",
    JSON.stringify(favItems.length > 0 ? favItems : [])
  );
};

export const InFav = (favItems) => {
  Storage(favItems);
};

// make the reducer function listens for actions we defined in the fav-types.js

const FavReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_FAVOURITES:
      if (!state.favItems.find((item) => item.id === action.payload.id)) {
        state.favItems.push({
          ...action.payload,
        });
      }
      return {
        ...state,
        ...InFav(state.favItems),
        favItems: [...state.favItems],
      };
    case REMOVE_FROM_FAVOURITES:
      return {
        ...state,
        ...InFav(state.favItems),
        favItems: [
          ...state.favItems.filter((item) => item.id !== action.payload.id),
        ],
      };
    default:
      return state;
  }
};

export default FavReducer;
