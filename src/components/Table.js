import React from "react";
import { setTable, deleteData, addData } from "../services/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import { updateTable, deleteTable, searchTable } from "../actions/actions";
import deleteIcon from "../icons/deleteIcon.svg";

export default function Table() {
  const [form, setForm] = React.useState([]);

  const tableDataPath = (state) => state.tableData.tableData;
  const tableData = useSelector(tableDataPath);

  const searchPath = (state) => state.search.search;
  const search = useSelector(searchPath);
  const searchStartPath = (state) => state.search.searchStart;
  const searchStart = useSelector(searchStartPath);
  const searchEndPath = (state) => state.search.searchEnd;
  const searchEnd = useSelector(searchEndPath);

  const deleteValuePath = (state) => state.deleteValue.deleteValue;
  const deleteValue = useSelector(deleteValuePath);

  const dispatch = useDispatch();

  const deleteDataVal = async (serial) => {
    //api call for delete;

    await deleteData(serial);
    window.location.reload();
  };

  let nextSerial;

  const handleSubmit = async () => {
    //api call to add;
    //console.log(form);
    //setForm({ ...form, serial: nextSerial + 1 });
    await addData(form, nextSerial + 1);
    window.location.reload();
  };

  return (
    <div className="tableCSS">
      <div>
        <table
          style={{
            width: "100%",
            paddingTop: "2.125rem",
            paddingBottom: "4.625rem",
          }}
        >
          <tr>
            <th>Sl.no.</th>
            <th>Meeting Name</th>
            <th>No. of people attending</th>
            <th>Date</th>
            <th>Start Time</th>
            <th>End Time</th>
            <th>Actions</th>
          </tr>
          {tableData.map((row) =>
            row.name.includes(search) &
            (searchStart != ""
              ? Date.parse(row.date) > Date.parse(searchStart)
              : true) &
            (searchEnd != ""
              ? Date.parse(row.date) < Date.parse(searchEnd)
              : true) ? (
              <tr style={{ paddingBottom: "2.188rem" }}>
                <td>{row.serial}</td>
                <td>{row.name}</td>
                <td>{row.attendee}</td>
                <td>{row.date}</td>
                <td>{row.start}</td>
                <td>{row.end}</td>
                <td onClick={() => deleteDataVal(row.serial)}>
                  <img src={deleteIcon} />
                </td>
              </tr>
            ) : (
              <p></p>
            )
          )}
          {tableData.map((row) => {
            nextSerial = row.serial;
          })}

          <tr>
            <td></td>
            <td>
              <input
                type="text"
                onChange={(e) => {
                  setForm({ ...form, name: e.target.value });
                }}
              />
            </td>
            <td>
              <input
                type="text"
                onChange={(e) => {
                  setForm({ ...form, attendee: e.target.value });
                }}
              />
            </td>
            <td>
              <input
                type="date"
                onChange={(e) => {
                  setForm({ ...form, date: e.target.value });
                }}
              />
            </td>
            <td>
              <input
                type="time"
                onChange={(e) => {
                  setForm({ ...form, start: e.target.value });
                }}
              />
            </td>
            <td>
              <input
                type="time"
                onChange={(e) => {
                  setForm({ ...form, end: e.target.value });
                }}
              />
            </td>
            <td>
              <button className="AddButton" onClick={handleSubmit}>
                Add
              </button>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}
