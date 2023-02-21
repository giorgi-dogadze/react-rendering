import React from "react";
import C_Component from "./C_component";

function B_Component() {
  console.log("component B");
  return (
    <div>
      <div>B_Component</div>
      <div>
        <C_Component />
      </div>
    </div>
  );
}

export default React.memo(B_Component);
