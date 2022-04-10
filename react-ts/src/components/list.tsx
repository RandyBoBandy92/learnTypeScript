import React from "react";
import { IState } from "../App";

const List: React.FC<IState> = ({ people }) => {
  const renderPeople = (): JSX.Element[] => {
    return people.map((person) => {
      return (
        <li className="list-item">
          <header>
            <img src={person.url} alt={`photo of ${person.name}`} />
            <h2>{person.name}</h2>
          </header>
          <p className="person-age">{person.age} years old</p>
          {person.note && <p className="person-note">{person.note}</p>}
        </li>
      );
    });
  };

  return <ul>{renderPeople()}</ul>;
};

export default List;
