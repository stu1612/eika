export const sortTasksByName = (stateVar, stateSetter) => {
  const newNameArr = [...stateVar];
  newNameArr.sort((a, b) => {
    if (a.title < b.title) {
      return -1;
    }
    if (a.title > b.title) {
      return 1;
    }
    return 0;
  });
  stateSetter(newNameArr);
};
