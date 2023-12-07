import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../FirebaseSetup/firebase";

export function useFetch() {
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
