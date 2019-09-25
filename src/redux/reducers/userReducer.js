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
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_USER:
      const { user_name } = action.payload;
      return { ...state, user_name };
    default:
      return state;
  }
}
