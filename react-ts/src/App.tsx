import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import List from "./components/list";
import AddToList from "./components/addToList";

export interface IState {
  people: {
    name: string;
    url: string;
    age: number;
    note?: string;
  }[];
}

function App() {
  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "John",
      url: "https://avatars0.githubusercontent.com/u/123938?s=460&v=4",
      age: 20,
      note: "I like to code",
    },
  ]);

  return (
    <div className="App">
      <section className="people-invited">
        <h1>People invited:</h1>
        <List people={people} />
      </section>
      <section className="add-to-list">
        <AddToList people={people} setPeople={setPeople} />
      </section>
    </div>
  );
}

export default App;
