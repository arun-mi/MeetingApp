import React from "react";
import searchIcon from "../icons/search.svg";
import { setTable, deleteData, addData } from "../services/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import {
  updateTable,
  deleteTable,
  searchTable,
  searchStartTable,
  searchEndTable,
} from "../actions/actions";

export default function Search() {
  const searchPath = (state) => state.search.search;
  const search = useSelector(searchPath);

  const searchStartPath = (state) => state.search.searchStart;
  const searchStart = useSelector(searchStartPath);
  const searchEndPath = (state) => state.search.searchEnd;
  const searchEnd = useSelector(searchEndPath);

  const dispatch = useDispatch();

  const handleSearch = (e) => {
    dispatch(searchTable(e.target.value));
  };
  const handleSearchStart = (e) => {
    let options = { year: "numeric", month: "long", day: "numeric" };
    let date = new Date(e.target.value).toLocaleDateString([], options);
    console.log(date);
    dispatch(searchStartTable(date));
  };
  const handleSearchEnd = (e) => {
    let options = { year: "numeric", month: "long", day: "numeric" };
    let date = new Date(e.target.value).toLocaleDateString([], options);
    console.log(date);
    dispatch(searchEndTable(date));
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        paddingTop: "4.188rem",
      }}
    >
      <div className="searchText">
        <span>
          <img src={searchIcon} style={{ height: "1rem" }} />
        </span>
        <input
          className="inputText"
          type="text"
          style={{ border: "none", borderBottom: "0.063rem solid black" }}
          placeholder="Search"
          value={search}
          onChange={handleSearch}
        />
      </div>
      <div className="searchStart">
        <span>From: </span>
        <input
          type="date"
          style={{ border: "none", borderBottom: "0.063rem solid black" }}
          //value={searchStart}
          onChange={handleSearchStart}
        />
      </div>
      <div className="searchEnd">
        <span>To: </span>
        <input
          type="date"
          style={{ border: "none", borderBottom: "0.063rem solid black" }}
          //value={searchEnd}
          onChange={handleSearchEnd}
        />
      </div>
    </div>
  );
}
