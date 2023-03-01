/**
 *
 * application.js
 * @author- Arshath
 * @date- 01/03/2023
 */

import { useState } from "react";
import AddSegment from "./addSegment";
import "./style.css";

function Application() {
  const [showAddSegment, setShowAddSegment] = useState(false);

  const openSegment = () => {
    setShowAddSegment(true);
  };

  const closeSegment = () => {
    setShowAddSegment(false);
  };

  return (
    <div className="container">
      <div className="primay-btn">
        <button onClick={openSegment}>Save segment</button>
      </div>
      {showAddSegment && <AddSegment close={closeSegment} />}
    </div>
  );
}

export default Application;
