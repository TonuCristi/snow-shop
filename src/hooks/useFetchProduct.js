import { useEffect, useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../FirebaseSetup/firebase";

export function useFetchProduct(id) {
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    const fetchProduct = async () => {
      setIsLoading(true);
      try {
        const q = query(collection(db, "products"), where("id", "==", +id));

        const querySnapshot = await getDocs(q);

        const products = [];
        querySnapshot.forEach((doc) => {
          products.push(doc.data());
        });
        setProduct(products[0]);
      } catch (err) {
        setError("Something went wrong!");
      } finally {
        setIsLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  return { product, isLoading, error };
}
