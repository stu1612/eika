export const fetchItems = async (state) => {
  const res = await fetch(state);
  if (res.ok) return res;
  throw res;
};
