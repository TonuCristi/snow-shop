import { collection, getDocs } from "firebase/firestore";
import { useEffect, useReducer } from "react";
import { db } from "../FirebaseSetup/firebase";

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

export function useFetch() {
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

  return { data, status };
}
