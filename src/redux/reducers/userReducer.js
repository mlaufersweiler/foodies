const initialState = {
  user_name: ""
};
const UPDATE_USER = "UPDATE_USER";

//build out reducer

export function updateUser(user) {
  return {
    type: UPDATE_USER,
    payload: user
  };
}
function reducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_USER:
      const { user_name } = action.payload;
      return { user_name };
    default:
      return state;
  }
}
export default reducer;
