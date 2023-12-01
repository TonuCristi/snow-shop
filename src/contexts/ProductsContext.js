import { collection, getDocs } from "firebase/firestore";
import { createContext, useEffect, useReducer } from "react";
import { db } from "../FirebaseSetup/firebase";

export const ProductsContext = createContext();

const initialState = {
  data: [],
  status: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return { data: state.data, status: "fetchingData" };
    case "ready":
      return { data: action.payload, status: "dataFetched" };
    case "error":
      return { data: action.payload, status: "errorFetching" };
    default:
      throw new Error("Something went wrong!");
  }
}

export function ProductsProvider({ children }) {
  const [{ data, status }, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchPost = async () => {
      dispatch({ type: "loading" });
      try {
        const querySnapshot = await getDocs(collection(db, "products"));
        let info = [];
        querySnapshot.forEach((doc) => {
          info.push(doc.data());
        });
        dispatch({ type: "ready", payload: info });
      } catch (err) {
        dispatch({ type: "error" });
      }
    };

    fetchPost();
  }, []);

  return (
    <ProductsContext.Provider value={{ data: data, status: status }}>
      {children}
    </ProductsContext.Provider>
  );
}
