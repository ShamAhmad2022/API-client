"use strict";

import { actionType } from "./actions";

export const initialState = {
  data: null,
  requestParams: {},
  loading: false,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case actionType.CHANGE_DATA:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};
