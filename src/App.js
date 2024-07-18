import "./App.css";
import { useState } from "react";

function App() {
  return (
    <>
      <HocRed comp={Counter} />
      <HocGreen comp={Counter} />
      <HocBlue comp={Counter} />
    </>
  );
}

function HocRed(props) {
  return (
    <h2
      style={{
        width: 100,
        height: 150,
        backgroundColor: "red",
        margin: 10,
        textAlign: "center",
      }}
    >
      {<props.comp />}
    </h2>
  );
}
function HocGreen(props) {
  return (
    <h2
      style={{
        width: 100,
        height: 150,
        backgroundColor: "green",
        margin: 10,
        textAlign: "center",
      }}
    >
      {<props.comp />}
    </h2>
  );
}
function HocBlue(props) {
  return (
    <h2
      style={{
        width: 100,
        height: 150,
        backgroundColor: "blue",
        margin: 10,
        textAlign: "center",
      }}
    >
      {<props.comp />}
    </h2>
  );
}

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Update</button>
    </>
  );
}

export default App;
