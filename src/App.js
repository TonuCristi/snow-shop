import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ProductsProvider } from "./contexts/ProductsContext";

import Root from "./pages/Root";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import ProductPage from "./pages/ProductPage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "products",
        element: <ProductsPage />,
      },
      {
        path: "products/:productId",
        element: <ProductPage />,
      },
      {
        path: "/:productId",
        element: <ProductPage />,
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

function App() {
  return (
    <ProductsProvider>
      <RouterProvider router={router} />
    </ProductsProvider>
  );
}

export default App;
