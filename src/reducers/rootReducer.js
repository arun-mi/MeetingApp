import { combineReducers } from "redux";
import TableReducer from "./TableReducer";
import DeleteReducer from "./DeleteReducer";
import SearchReducer from "./SearchReducer";
import PageReducer from "./PageReducer";

const rootReducer = combineReducers({
  tableData: TableReducer,
  deleteValue: DeleteReducer,
  search: SearchReducer,
  page: PageReducer,
});

export default rootReducer;
