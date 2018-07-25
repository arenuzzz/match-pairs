import { getPhotoList as getPhotoListApi } from "api";

export const CALL_API = Symbol("CALL_API");

export default store => next => async action => {
  const callAPI = action[CALL_API];

  if (typeof callAPI === "undefined") {
    return next(action);
  }

  const { types } = callAPI;
  const { rows, cols, minutes } = action;
  const [REQUEST, SUCCESS, FAILURE] = types;

  const actionWith = data => {
    const finalAction = { ...action, ...data };

    Reflect.deleteProperty(finalAction, CALL_API);

    return finalAction;
  };

  next(
    actionWith({
      type: REQUEST
    })
  );

  try {
    const photoIds = await getPhotoListApi();
    next(actionWith({ type: SUCCESS, rows, cols, minutes, photoIds }));
  } catch (error) {
    next(actionWith({ type: FAILURE, error }));
  }
};
