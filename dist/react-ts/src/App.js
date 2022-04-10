"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
require("./App.css");
const list_1 = __importDefault(require("./components/list"));
const addToList_1 = __importDefault(require("./components/addToList"));
function App() {
    const [people, setPeople] = (0, react_1.useState)([
        {
            name: "John",
            url: "https://avatars0.githubusercontent.com/u/123938?s=460&v=4",
            age: 20,
            note: "I like to code",
        },
    ]);
    return (<div className="App">
      <section className="people-invited">
        <h1>People invited:</h1>
        <list_1.default people={people}/>
      </section>
      <section className="add-to-list">
        <addToList_1.default people={people} setPeople={setPeople}/>
      </section>
    </div>);
}
exports.default = App;
