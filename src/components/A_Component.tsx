import React, { useEffect, useState } from "react";
import { ContextProvider } from "../context/context";
import B_Component from "./B_component";

function A_Component() {
  const [counter, setCounter] = useState(0);
  const Context = React.createContext({ value: counter });

  // console.log('first render')

  //   useEffect(() => {
  //     console.log("page is mounted");
  //   }, []);

  console.log("component A");
  return (
    <ContextProvider value={{ value: counter }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          flexDirection: "column",
        }}
      >
        <button onClick={() => setCounter((prevCounter) => prevCounter + 1)}>
          click me
        </button>
        <span>{counter}</span>

        <B_Component />
      </div>
    </ContextProvider>
  );
}

export default A_Component;
