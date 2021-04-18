const initialValue = {
  page: true,
};

const PageReducer = (state = initialValue, action) => {
  switch (action.type) {
    case "PageChange":
      return {
        ...state,
        page: action.data,
      };

    default:
      return state;
  }
};
export default PageReducer;
