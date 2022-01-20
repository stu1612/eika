import { useState, useEffect } from "react";

// import { fetchItems } from "../services/taskServices";

export const useFetch = (state) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //   useEffect(() => {
  //     const loadTasks = () => {
  //       try {
  //         const res = fetch(state);
  //         // const res = await fetchItem(state);
  //         if (res.ok) {
  //           return res;
  //         } else {
  //           throw res;
  //         }
  //       } catch (e) {
  //         setError(e);
  //       } finally {
  //         setLoading(false);
  //       }
  //     };
  //     loadTasks();
  //   }, [state]);
  //   return { loading, error };
  // };

  useEffect(() => {
    setTimeout(() => {
      fetch(state)
        .then((res) => {
          if (!res.ok) {
            throw error("Could not Load data");
          }
          return res;
        })
        .then((data) => {
          setData(data);
          setLoading(false);
          setError(null);
        })
        .catch((err) => {
          setLoading(false);
          setError(err.message);
        });
    }, 1000);
  }, [error, state]);
  return { loading, data, error };
};
