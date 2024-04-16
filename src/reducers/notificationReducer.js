import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  message: "",
  clickCount: 0,
};

const notificationSlice = createSlice({
  name: "notification",
  initialState: initialState,
  reducers: {
    setNotification(state, action) {
      return {
        ...state,
        message: action.payload,
        clickCount: state.clickCount + 1,
      };
    },
    clearNotification(state) {
      if (state.clickCount <= 1) {
        return initialState;
      } else {
        return { ...state, clickCount: state.clickCount - 1 };
      }
    },
  },
});

export const showNotification = (message, duration) => {
  return async (dispatch) => {
    dispatch(setNotification(message));
    setTimeout(() => {
      dispatch(clearNotification());
    }, duration * 1000);
  };
};

export const { setNotification, clearNotification } = notificationSlice.actions;
export default notificationSlice.reducer;
