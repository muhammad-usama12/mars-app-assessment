import { useState, useEffect, useRef } from "react";

export default function PersonalInfo() {
  const [text, setText] = useState("");
  const [date, setDate] = useState("");
  const dateInputRef = useRef(null);

  const handleChange = (e) => {
    setDate(e.target.value);
  };
  const onChange = (date, b) => {
    console.log(date, "DATE:", b);
    setDate(b);
  };

  return (
    <div>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h2>Traveller's Information</h2>
        <p>
          Unveil Your Adventure: Getting to Know You in Our Traveler's Corner!
        </p>
        <label>First Name</label>
        <input></input>
        <label>Last Name</label>
        <input></input>
        <label>Date of Birth</label>
        <input type="date"></input>
        <label>Nationality</label>
        <input></input>
        <label htmlFor="phone">Phone Number</label>
        <input type="tel" name="phone" required></input>
        <label htmlFor="email">Email Address</label>
        <input type="email" autoComplete="on" name="email" required></input>
      </form>
    </div>
  );
}
