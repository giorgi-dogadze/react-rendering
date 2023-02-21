import React from "react";

function D_Component() {
  console.log("component D");
  return <div>D_Component</div>;
}

export default React.memo(D_Component);
