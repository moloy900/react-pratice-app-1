import React, { useState } from "react";

const Apply = () => {
  const [formData, setFormData] = useState({
    name: "",
    select: "Select Course",
    check: false,
  });
  const [show, setShow] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    console.log(name)
    console.log(value)
    console.log(type)
    console.log(checked)
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setShow(true);
  };

  return (
    <div>
      <h1>Apply component</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="name"
            placeholder="Enter name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <select
            name="select"
            value={formData.select}
            onChange={handleInputChange}
          >
            <option value="Select Course">Select Course</option>
            <option value="Angular">Angular</option>
            <option value="React">React</option>
            <option value="NodeJs">NodeJs</option>
            <option value="Javascript">Javascript</option>
            <option value="TypeScript">TypeScript</option>
          </select>
        </div>

        <div>
          <input
            type="checkbox"
            name="check"
            checked={formData.check}
            onChange={handleInputChange}
          />
          <span>Accept Term and Conditions</span>
        </div>
        <button type="submit">Submit</button>
      </form>
      {show && (
        <div>
          <ul>
            <li>{formData.name}</li>
            <li>{formData.select}</li>
            <li>{formData.check ? "Accepted" : "Not Accepted"}</li>
          </ul>
        </div>
      )}g
    </div>
  );
};

export default Apply;
