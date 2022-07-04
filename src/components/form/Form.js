import React from "react";

const Form = () => {
  return (
    <>
      <h1 data-testid="form-header" className="label-wrapper">
        <label htmlFor="new-todo-input" className="label_lg">
          What needs to be done?
        </label>
      </h1>
    </>
  );
};

export default Form;
