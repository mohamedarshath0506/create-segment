/**
 *
 * addSegment.js
 * @author- Arshath
 * @date- 01/03/2023
 */

import { useState } from "react";

var i = 1;
var idNumber = ++i;

function AddSegment(props) {
  const [segmentList, setSegmentList] = useState([
    { id: ++idNumber, value: "", label: "" },
  ]);
  const [segmentName, setSegmentName] = useState();

  const options = {
    first_name: "First Name",
    last_name: "Last Name",
    gender: "Gender",
    age: "Age",
    account_name: "Account Name",
    city: "City",
    state: "State",
  };

  const submitFrom = () => {
    const list = segmentList.map((list) => {
      return { [list.value]: list.label };
    });
    const obj = {
      segment_name: segmentName,
      schema: list,
    };
    console.log(obj);
  };

  const closeSegment = () => {
    props.close();
  };

  const newSegment = () => {
    setSegmentList([...segmentList, { id: ++idNumber, value: "", label: "" }]);
  };

  const onChangeSelect = (value, id) => {
    const result = segmentList.map((list) => {
      if (list.id === id) {
        list.value = value;
        list.label = options[value];
      }
      return list;
    });
    setSegmentList(result);
  };

  const clear = (index) => {
    setSegmentList(
      segmentList.filter((item, i) => {
        return i !== index;
      })
    );
  };

  return (
    <div>
      <div className="application-container">
        <header className="header-cntent">
          <i className="fa-solid fa-angle-left" onClick={closeSegment}></i>
          <h1>Saving Segment</h1>
        </header>
        <section className="application-content">
          <form>
            <label>Enter the Name of the Segment</label>
            <input
              type="text"
              placeholder="Name of the Segment"
              onChange={(e) => setSegmentName(e.target.value)}
            />
          </form>
          <div className="content">
            <p>
              To save your segment, you need to add the schema to build the
              query
            </p>
          </div>
          <div className="title">
            <div>
              <p>-User Traits</p>
            </div>
            <div>
              <p>- Group Traits</p>
            </div>
          </div>

          <div>
            {segmentList.map((list, index) => (
              <div>
                <div className="selector">
                  <select
                    className="add-selector"
                    value={list.value}
                    onChange={(event) =>
                      onChangeSelect(event.target.value, list.id)
                    }
                  >
                    <option value="">Add schema to segment</option>
                    <option value="first_name">First Name</option>
                    <option value="last_name">Last Name</option>
                    <option value="gender">Gender</option>
                    <option value="age">Age</option>
                    <option value="account_name">Account Name</option>
                    <option value="city">City</option>
                    <option value="state">State</option>
                  </select>
                  <button className="selector-btn" onClick={() => clear(index)}>
                    _
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="add-schema">
            <span onClick={newSegment}>+Add new schema</span>
          </div>
        </section>
        <footer>
          <button className="save-btn" onClick={submitFrom}>
            Save the Segment
          </button>
          <button className="cancle-btn" onClick={closeSegment}>
            Cancel
          </button>
        </footer>
      </div>
    </div>
  );
}
export default AddSegment;
