import { useState } from "react";
import { IState } from "../App";

interface IProps {
  people: IState["people"];
  setPeople: React.Dispatch<React.SetStateAction<IState["people"]>>;
}

const AddToList: React.FC<IProps> = ({ people, setPeople }) => {
  const [input, setInput] = useState({
    name: "",
    url: "",
    age: 0,
    note: "",
  });

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    const { name: property, value } = e.target;
    setInput((prevInput) => ({
      ...prevInput,
      [property]: value,
    }));
  };

  const handleClick = (): void => {
    // append to people
    if (!input.name || !input.age || !input.url) {
      alert("Please fill in all fields");
      return;
    } else {
      setPeople((prevPeople) => [
        ...prevPeople,
        {
          name: input.name,
          url: input.url,
          age: input.age,
          note: input.note,
        },
      ]);
    }
    setInput({
      name: "",
      url: "",
      age: 0,
      note: "",
    });
  };

  return (
    <div className="add-to-list">
      <label htmlFor="name">Name:</label>
      <input
        name="name"
        className="add-to-list-input"
        type="text"
        value={input.name}
        onChange={handleChange}
      />
      <label htmlFor="age">Age:</label>
      <input
        name="age"
        className="add-to-list-input"
        type="text"
        value={input.age}
        onChange={handleChange}
      />
      <label htmlFor="url">Image URL:</label>
      <input
        name="url"
        className="add-to-list-input"
        type="text"
        value={input.url}
        onChange={handleChange}
      />
      <label htmlFor="note">Note:</label>
      <textarea
        name="note"
        id="note"
        cols={30}
        rows={10}
        value={input.note}
        onChange={handleChange}
      ></textarea>
      <button onClick={handleClick} className="add-to-list-btn">
        Add To List
      </button>
    </div>
  );
};

export default AddToList;
