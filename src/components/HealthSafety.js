import React from "react";

export default function HealthSafety() {
  return (
    <div>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        "DISCLAIMER FOR DECLARATION"
        <p>
          Wellbeing Matters: Complete Your Health Declaration for a Safe
          Journey.
        </p>
        <h3>Traveller's Health Details</h3>
        <label>First Name</label>
        <input></input>
        <label>Last Name</label>
        <input></input>
        <label>Age</label>
        <input></input>
        <label htmlFor="gender-choice">Gender</label>
        <select defaultValue={""} name="gender-choice">
          <option defaultValue={""} disabled hidden></option>
          <option defaultValue={"male"}>Male</option>
          <option defaultValue={"female"}>Female</option>
          <option defaultValue={"non-binary"}>Non-Binary</option>
          <option defaultValue={"no-choice"}>Perfer not to say</option>
        </select>
        <label htmlFor="phone">Phone Number</label>
        <input type="tel" name="phone" required></input>
        <label htmlFor="email">Email Address</label>
        <input type="email" autoComplete="on" name="email" required></input>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <table>
            <tr>
              <th colSpan="4">
                Please fill this questionnaire (Mandatory before travel)
              </th>
            </tr>
            <tr>
              <th></th>
              <th>Yes</th>
              <th>If yes, please specify</th>
              <th>No</th>
            </tr>
            <tr>
              <td>
                <label>
                  Have you been sick in the past 30 days? Hospital visited, if
                  any?
                </label>
              </td>
              <td>
                <input type="checkbox"></input>
              </td>
              <td>
                <input type="text"></input>
              </td>
              <td>
                <input type="checkbox"></input>
              </td>
            </tr>
          </table>
        </div>
        <h3>Emergency Contact</h3>
        <label></label>
        <p>Check the conditions that apply to you:</p>
        <ul type="" style={{ listStyle: "none", alignItems: "center" }}>
          <li>None</li>
          <li>Asthma</li>
          <li>Cardiac Arrest</li>
          <li>Hypertension</li>
          <li>Diabetes</li>
          <li>Epiliepsy</li>
          <li>Other (Please specify)</li>
          <br></br>
        </ul>
      </form>
    </div>
  );
}
