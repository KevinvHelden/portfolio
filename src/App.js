import React from "react";
import "./App.css";
import { Text } from "./components/elements";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Text variant={"h1"} text={"Heading 1"} />
        <Text variant={"h2"} text={"Heading 2"} />
        <Text variant={"h3"} text={"Heading 3"} />
        <Text variant={"h4"} text={"Heading 4"} />
        <Text variant={"h5"} text={"Heading 5"} />
        <Text variant={"h6"} text={"Heading 6"} />
        <Text variant={"p"} text={"Paragraph"} />
        <Text variant={"p"} text={"Paragraph"} strong />
      </header>
    </div>
  );
}

export default App;
