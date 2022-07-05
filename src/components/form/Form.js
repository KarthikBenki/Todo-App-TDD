import React, { useState } from "react";

const Form = () => {
    const [name,setName] = useState("");

    const handleChange=(e)=>{
        setName(e.target.value)
    }

  return (
    <>
      <form action="">
        <h1 data-testid="form-header" className="label-wrapper">
          <label htmlFor="new-todo-input" className="label_lg">
            What needs to be done?
          </label>
        </h1>

        <input
          data-testid="form-input"
          type="text"
          placeholder="What you want to do today"
          autoComplete="off"
          value={name}
          onChange={handleChange}
        />

        <button data-testid="form-button" type="submit">Add</button>
      </form>
    </>
  );
};

export default Form;
