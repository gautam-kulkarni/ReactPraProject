//Single Selection
//Multipule Section

import { useState } from "react";
import data from "./data";
import "./style.css";

export default function Accordian() {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiSelection, setmultiSelection] = useState([]);

  function handelSingleSelection(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }

  function handelMultiSelection(getCurrentId) {
    let cpyMutiple = [...multiSelection];
    const findIndexOfCurrentId = cpyMutiple.indexOf(getCurrentId);
    if (findIndexOfCurrentId === -1) {
      cpyMutiple.push(getCurrentId);
    } else {
      cpyMutiple.splice(findIndexOfCurrentId, 1);
    }
    setmultiSelection(cpyMutiple);
  }
  console.log(enableMultiSelection);

  return (
    <div className="wrapper">
      <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
        Enable Multi Selection
      </button>
      <div className="accordin">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item">
              <div
                onClick={
                  enableMultiSelection
                    ? () => handelMultiSelection(dataItem.id)
                    : () => handelSingleSelection(dataItem.id)
                }
                className="title"
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {selected === dataItem.id ||
              multiSelection.indexOf(dataItem.id) !== -1 ? (
                <div className="content">{dataItem.answer}</div>
              ) : null}
            </div>
          ))
        ) : (
          <div>No data found</div>
        )}
      </div>
    </div>
  );
}
