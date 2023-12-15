import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

export default function PersonalInfo(props) {
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
            <h2>{`${values.firstName}'s`} Information</h2>
          ) : (
            <h2>Traveller's Information</h2>
          )}
          <Field type="text" name="firstName" placeholder="First Name" />
          <Field type="text" name="lastName" placeholder="Last Name" />
          <Field type="date" name="dateOfBirth" placeholder="" />
          <Field type="text" name="nationality" placeholder="Nationality" />
          <Field type="tel" name="phoneNum" placeholder="(123)-456-789" />
          <Field
            type="email"
            autoComplete="on"
            name="email"
            placeholder="Email"
          />
          <button type="submit">NEXT</button>
        </Form>
      )}
    </Formik>
  );
}
