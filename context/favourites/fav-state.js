import FavCtx from "./fav-context";
import { useReducer } from "react";
import FavReducer from "./fav-reducer";

const FavState = ({ children }) => {
  const initialState = {
    favItems: [],
  };

  const [state, dispatch] = useReducer(FavReducer, initialState);

  const addToFav = (payload) => {
    dispatch({ type: "ADD_TO_FAVOURITES", payload });
  };

  const removeFromFav = (payload) => {
    dispatch({ type: "REMOVE_FROM_FAVOURITES", payload });
  };

  return (
    <FavCtx.Provider
      value={{
        showFav: state.showFav,
        favItems: state.favItems,
        addToFav,
        removeFromFav,
        ...state,
      }}
    >
      {children}
    </FavCtx.Provider>
  );
};

export default FavState;
