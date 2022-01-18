import { useState, useEffect } from "react";

import { fetchItems } from "../services/taskServices";

export const useFetch = (state) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadTasks = async () => {
      try {
        const res = await fetchItems(state);
        if (res.ok) {
          return res;
        } else {
          throw res;
        }
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    };
    loadTasks();
  }, [state]);
  return { loading, error };
};
