import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

export default function HealthSafety(props) {
  const handleSubmit = (values) => {
    props.next(values, true);
  };
  return (
    <Formik initialValues={props.data} onSubmit={handleSubmit}>
      {({ values }) => (
        <Form
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {console.log()}
          <h2>DISCLAIMER FOR DECLARATION</h2>
          <p>
            Wellbeing Matters: Complete Your Health Declaration for a Safe
            Journey.
            {console.log("CHECK:", values)}
          </p>
          {values.firstName ? (
            <h2>{`${values.firstName}'s`} Wellness Acknowledgment</h2>
          ) : (
            <h2>Traveller's Health Details</h2>
          )}
          <p>Gender</p>
          <Field as="select" name="genderChoice">
            <option value=""></option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Non-Binary">Non-Binary</option>
            <option value="Prefer not to say">Perfer not to say</option>
          </Field>

          <label>First Name</label>
          <p>{values.firstName}</p>
          <label>Last Name</label>
          <p>{values.lastName}</p>
          <label>Age</label>
          <p>{2023 - +values.dateOfBirth.substring(4, 0)}</p>
          <label>Email</label>
          <p>{values.email}</p>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <table>
              <tbody>
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
                      Have you been sick in the past 30 days? Hospital visited,
                      if any?
                    </label>
                  </td>
                  <td>
                    <Field type="checkbox" name="sickInPast30Days" />
                  </td>
                  <td>
                    <Field type="text" name="hospitalVisited" />
                  </td>
                  <td>
                    <Field type="checkbox" name="notSickInPast30Days" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <h3>Emergency Contact</h3>

          <Field
            type="text"
            name="emergencyFirstName"
            placeholder="First Name"
          />
          <Field type="text" name="emergencyLastName" placeholder="Last Name" />
          <Field type="tel" name="phoneNum" placeholder="(123)-456-789" />

          <h5>Check the conditions that apply to you:</h5>
          <ul>
            <label>
              <Field type="checkbox" name="healthCondition" value="None" />
              None
            </label>
            <label>
              <Field type="checkbox" name="healthCondition" value="Asthma" />
              Astham
            </label>
            <label>
              <Field
                type="checkbox"
                name="healthCondition"
                value="Cardiac Arrest"
              />
              Cardiac Arrest
            </label>

            <label>
              <Field
                type="checkbox"
                name="healthCondition"
                value="Hypertension"
              />
              Hypertension
            </label>
            <label>
              <Field type="checkbox" name="healthCondition" value="Diabetes" />
              Diabetes
            </label>
            <label>
              <Field type="checkbox" name="healthCondition" value="Epilepsy" />
              Epilepsy
            </label>
            <label htmlFor="healthConditionExtraNeeds">Other:</label>
            <Field
              type="textbox"
              name="healthConditionExtraNeeds"
              placeholder="Please Specifiy"
            />
          </ul>
          <button type="button" onClick={() => props.back({ values })}>
            BACK
          </button>
          <button type="submit">SUBMIT</button>
        </Form>
      )}
    </Formik>
  );
}
