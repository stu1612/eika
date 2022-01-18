export const switchStatus = (state, stateVar, stateSetter) => {
  switch (state) {
    case "completed":
      stateSetter(stateVar.filter((item) => item.isCompleted === true));
      break;
    case "current":
      stateSetter(stateVar.filter((item) => item.isCompleted === false));
      break;
    default:
      stateSetter(stateVar.filter((item) => item.isCompleted === false));
      break;
  }
};
