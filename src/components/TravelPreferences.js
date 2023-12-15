import React from "react";

export default function TravelPreferences() {
  return (
    <div>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h2>Traveller's Travel Preferences</h2>
        <p>
          Craft Your Voyage: Personalize Your Preferences for an Unparalleled
          Travel Experience!
        </p>
        <label>Departure Date</label>
        <input type="date"></input>
        <label>Return Date</label>
        <input type="date"></input>
        <label>Dietary Preferences</label>
        <ul type="" style={{ listStyle: "none", alignItems: "center" }}>
          <li>None</li>
          <li>Vegetarian</li>
          <li>Kosher</li>
          <li>Halal</li>
          <li>Gluten Free</li>
          <li>Keto</li>
          <br></br>
          <label>Allergies</label>
          <br></br>
          <br></br>
          <li>None</li>
          <li>Gluten</li>
          <li>Nuts</li>
          <li>Lactose</li>
          <li>Soy</li>
          <li>Seafood</li>
          <li>Other (Please specify)</li>
        </ul>
        <label htmlFor="tiers">Travel Tier</label>
        <select name="tiers">
          <option value="" disabled></option>
          <option defaultValue={"First Class"}>First Class</option>
          <option defaultValue={"Business Class"}>Business Class</option>
          <option defaultValue={"Economy Class"}>Economy Class</option>
        </select>
        {/* Martian Luxe,
         Martian Grandeur,
          Martian Voyageur  */}
        <label>Accomodation Carousel(for options)</label>
        <input type="text"></input>
        <label>Your Wishes, Our Priority: Special Requests Welcome Here!</label>
        <input type="text"></input>
      </form>
    </div>
  );
}
