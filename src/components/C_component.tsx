import React, { useContext } from "react";
import { Context } from "../context/context";
import D_Component from "./D_component";

function C_Component() {
  const value = useContext(Context);

  console.log("component C", "value", value);
  return (
    <div>
      <div>C_Component</div>
      <div>
        <D_Component />
      </div>
    </div>
  );
}

export default React.memo(C_Component);
