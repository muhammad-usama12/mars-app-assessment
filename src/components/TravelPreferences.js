import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

export default function TravelPreferences(props) {
  const handleSubmit = (values) => {
    props.next(values);
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
          {values.firstName ? (
            <h2>{`${values.firstName}`}'s Travel Preferences</h2>
          ) : (
            <h2>Traveller's Travel Preferences</h2>
          )}
          <p>
            Craft Your Voyage: Personalize Your Preferences for an Unparalleled
            Travel Experience!
          </p>
          <h6>Departure Date</h6>
          <Field type="date" name="departureDate" placeholder="" />
          <h6>Return Date</h6>
          <Field type="date" name="returnDate" placeholder="" />
          <h6>Dietary Preferences</h6>
          <ul>
            <label>
              <Field type="checkbox" name="dietaryChoice" value="None" />
              None
            </label>
            <label>
              <Field type="checkbox" name="dietaryChoice" value="Vegetarian" />
              Vegetarian
            </label>
            <label>
              <Field type="checkbox" name="dietaryChoice" value="Kosher" />
              Kosher
            </label>

            <label>
              <Field type="checkbox" name="dietaryChoice" value="Halal" />
              Halal
            </label>
            <label>
              <Field type="checkbox" name="dietaryChoice" value="Gluten Free" />
              Gluten Free
            </label>
            <label>
              <Field type="checkbox" name="dietaryChoice" value="Keto/Paleo" />
              Keto/Paleo
            </label>
            <label>
              <label htmlFor="dietaryExtraNeeds">Other:</label>
              <Field
                type="text"
                name="dietaryExtraNeeds"
                placeholder="Please Specifiy"
              />
            </label>
          </ul>

          <h6>Allergies</h6>
          <ul>
            <label>
              <Field type="checkbox" name="allergyChoice" value="None" />
              None
            </label>
            <label>
              <Field type="checkbox" name="allergyChoice" value="Gluten" />
              Gluten
            </label>
            <label>
              <Field type="checkbox" name="allergyChoice" value="Nuts" />
              Nuts
            </label>

            <label>
              <Field type="checkbox" name="allergyChoice" value="Lactose" />
              Lactose
            </label>
            <label>
              <Field type="checkbox" name="allergyChoice" value="Soy" />
              Soy
            </label>
            <label>
              <Field type="checkbox" name="allergyChoice" value="Seafood" />
              Seafood
            </label>
            <label htmlFor="allergyExtraNeeds">Other:</label>
            <Field
              type="text"
              name="allergyExtraNeeds"
              placeholder="Please Specifiy"
            />
          </ul>

          <h6 htmlFor="tierChoice">Travel Tier</h6>
          <Field as="select" name="tierChoice">
            <option value=""></option>
            <option value="Marian Luxe">Martian Luxe</option>
            <option value="Martian Grandeur">Martian Grandeur</option>
            <option value="Martian Voyageur">Martian Voyageur</option>
          </Field>
          <h6>Accommodation Carousel (for options)</h6>
          <p>Your Wishes, Our Priority: Special Requests Welcome Here!</p>
          <Field as="textarea" name="travelRequest" />
          <button type="button" onClick={() => props.back(values)}>
            BACK
          </button>
          <button type="submit">NEXT</button>
        </Form>
      )}
    </Formik>
  );
}
