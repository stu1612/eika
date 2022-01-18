export const sortTasksByPrice = (stateVar, stateSetter) => {
  const newArr = [...stateVar];
  newArr.sort((a, b) => {
    return a.price - b.price;
  });
  stateSetter(newArr);
};
