import { FETCH_CATEGORIES } from "../actions/actionType";

const stateData = {
  categories: [],
};

export default function categoriesReducer(state = stateData, action) {
  switch (action.type) {
    case FETCH_CATEGORIES:
      return {
        ...state,
        categories: action.data,
      };

    default:
      return state;
  }
}
