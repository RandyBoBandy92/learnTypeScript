"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const List = ({ people }) => {
    const renderPeople = () => {
        return people.map((person) => {
            return (<li className="list-item">
          <header>
            <h2>{person.name}</h2>
            <img src={person.url} alt={`photo of ${person.name}`}/>
          </header>
          <p className="person-age">{person.age} years old</p>
          {person.note && <p className="person-note">{person.note}</p>}
        </li>);
        });
    };
    return <ul>{renderPeople()}</ul>;
};
exports.default = List;
