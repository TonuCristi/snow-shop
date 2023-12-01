import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useEffect, useReducer, createContext } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./FirebaseSetup/firebase";

import Root from "./pages/Root";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";

export const DataContext = createContext(null);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "products",
        element: <ProductsPage />,
        children: [
          {
            path: "products/:id",
            element: <ProductsPage />,
          },
        ],
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
    ],
  },
]);

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

function App() {
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
        // console.log(info);
        dispatch({ type: "ready", payload: info });
      } catch (err) {
        dispatch({ type: "error" });
      }
    };

    fetchPost();
  }, []);
  return (
    <DataContext.Provider
      value={{
        data: data,
        status: status,
      }}
    >
      <RouterProvider router={router} />
    </DataContext.Provider>
  );
}

export default App;
