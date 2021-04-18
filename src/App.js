import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { useSelector, useDispatch } from "react-redux";
import { setTable, deleteData, addData } from "./services/apiCalls";

import { updateTable, deleteTable, searchTable } from "./actions/actions";
import About from "./components/About";

function App() {
  const pagePath = (state) => state.page.page;
  const page = useSelector(pagePath);
  const dispatch = useDispatch();

  const fetchData = async () => {
    let data = await setTable();
    console.log(data);
    dispatch(updateTable(data));
  };

  React.useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="App" style={{ overflow: "hidden" }}>
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">{page ? <Home /> : <About />}</div>
    </div>
  );
}

export default App;
