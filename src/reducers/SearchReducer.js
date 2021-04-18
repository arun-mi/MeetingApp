const initialValue = {
  search: "",
  searchStart: "",
  searchEnd: "",
};

const SearchReducer = (state = initialValue, action) => {
  switch (action.type) {
    case "Search":
      return {
        ...state,
        search: action.data,
      };
    case "SearchStart":
      return {
        ...state,
        searchStart: action.data,
      };
    case "SearchEnd":
      return {
        ...state,
        searchEnd: action.data,
      };
    default:
      return state;
  }
};
export default SearchReducer;
