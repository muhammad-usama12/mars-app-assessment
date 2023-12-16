import React from "react";
import { useState } from "react";
import { Formik, Form, Field } from "formik";
import {
  VStack,
  Box,
  Button,
  Heading,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";

export default function HealthSafety(props) {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const handleSubmit = (values) => {
    props.next(values, true);
    setIsFormSubmitted(true);
  };
  return (
    <VStack
      mx="auto"
      w={{ base: "90%", md: "70%" }}
      h="100vh"
      justifyContent="center"
      spacing={10}
    >
      <Box
        p={8}
        borderWidth={1}
        borderRadius="md"
        boxShadow="lg"
        borderColor={"#D2A679"}
        w="100%"
        maxW="800px"
      >
        <Formik initialValues={props.data} onSubmit={handleSubmit}>
          {({ values }) => (
            <Form>
              {isFormSubmitted ? (
                <Alert
                  status="info"
                  variant="subtle"
                  flexDirection="column"
                  alignItems="center"
                  justifyContent="center"
                  textAlign="center"
                  height="200px"
                  width="100%"
                >
                  <AlertIcon boxSize="40px" mr={0} />
                  <AlertTitle mt={4} mb={1} fontSize="lg">
                    Booking confirmed!
                  </AlertTitle>
                  <AlertDescription maxWidth="sm">
                    Thanks for submitting your journey with us,{" "}
                    {values.firstName}. We have sent you a copy of the summary
                    at {values.email}. If you need any other help, feel free to
                    contact us!
                  </AlertDescription>
                </Alert>
              ) : (
                <>
                  <Heading
                    className="title"
                    textAlign={"center"}
                    paddingBlock={"1em"}
                  >
                    {`${values.firstName}'s`} Wellness Acknowledgment
                  </Heading>

                  <VStack>
                    <p>Gender</p>
                    <Field as="select" name="genderChoice" required>
                      Gender
                      <option value=""></option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Non-Binary">Non-Binary</option>
                      <option value="Prefer not to say">
                        Perfer not to say
                      </option>
                    </Field>

                    <p>
                      {"First Name: "}
                      {values.firstName}
                    </p>

                    <p>
                      {"Last Name: "}
                      {values.lastName}
                    </p>

                    <p>
                      {"Age: "}
                      {2023 - +values.dateOfBirth.substring(4, 0)}
                    </p>
                    <p>{values.email}</p>

                    {/* <div style={{ display: "flex", flexDirection: "column" }}>
                  <table>
                    <tbody>
                      <tr>
                        <th colSpan="4" required>
                          Please fill this questionnaire (Mandatory before
                          travel)
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
                            Have you been sick in the past 30 days? Hospital
                            visited, if any?
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
                </div> */}
                    <h3>Emergency Contact</h3>

                    <Field
                      type="text"
                      name="emergencyFirstName"
                      placeholder="First Name"
                      required
                    />
                    <Field
                      type="text"
                      name="emergencyLastName"
                      placeholder="Last Name"
                      required
                    />
                    <Field
                      type="tel"
                      name="emergencyPhoneNum"
                      placeholder="(123)-456-789"
                      required
                    />

                    <h5>Check the conditions that apply to you:</h5>
                    <ul>
                      <label>
                        <Field
                          type="checkbox"
                          name="healthCondition"
                          value="None"
                        />
                        None
                      </label>
                      <label>
                        <Field
                          type="checkbox"
                          name="healthCondition"
                          value="Asthma"
                        />
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
                        <Field
                          type="checkbox"
                          name="healthCondition"
                          value="Diabetes"
                        />
                        Diabetes
                      </label>
                      <label>
                        <Field
                          type="checkbox"
                          name="healthCondition"
                          value="Epilepsy"
                        />
                        Epilepsy
                      </label>
                      <label htmlFor="healthConditionExtraNeeds">Other:</label>
                      <Field
                        type="textbox"
                        name="healthConditionExtraNeeds"
                        placeholder="Please Specifiy"
                      />
                    </ul>
                  </VStack>

                  <Button
                    mt={"20px"}
                    mr={"20px"}
                    type="button"
                    onClick={() => props.back(values)}
                    colorScheme="orange"
                    variant={"outline"}
                  >
                    BACK
                  </Button>
                  <Button
                    mt={"20px"}
                    mr={"20px"}
                    colorScheme="orange"
                    variant={"outline"}
                    type="submit"
                  >
                    SUBMIT
                  </Button>
                </>
              )}
            </Form>
          )}
        </Formik>
      </Box>
    </VStack>
  );
}
