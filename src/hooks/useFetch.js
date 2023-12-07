import { collection, getDocs } from "firebase/firestore";
import { useEffect, useReducer, useState } from "react";
import { db } from "../FirebaseSetup/firebase";

// const initialState = {
//   data: [],
//   status: null,
// };

// function reducer(state, action) {
//   switch (action.type) {
//     case "loading":
//       return { data: state.data, status: "fetchingData" };
//     case "ready":
//       return { data: action.payload, status: "dataFetched" };
//     case "error":
//       return { data: action.payload, status: "errorFetching" };
//     default:
//       throw new Error("Something went wrong!");
//   }
// }

export function useFetch() {
  // const [{ data, status }, dispatch] = useReducer(reducer, initialState);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPost = async () => {
      setIsLoading(true);
      try {
        const querySnapshot = await getDocs(collection(db, "products"));
        let info = [];
        querySnapshot.forEach((doc) => {
          info.push(doc.data());
        });
        setData(info);
      } catch (err) {
        setError("Something went wrong!");
      } finally {
        setIsLoading(false);
      }
    };

    fetchPost();
  }, []);

  return { data, isLoading, error };
}
