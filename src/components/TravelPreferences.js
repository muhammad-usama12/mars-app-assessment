import React from "react";
import { Formik, Form, Field } from "formik";
import { Button, VStack, Box, Textarea, Heading } from "@chakra-ui/react";

export default function TravelPreferences(props) {
  const handleSubmit = (values) => {
    props.next(values);
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
              {values.firstName ? (
                <Heading
                  className="title"
                  textAlign={"center"}
                  paddingBlock={"1em"}
                >
                  {`${values.firstName}'s`} Travel Preferences
                </Heading>
              ) : (
                <Heading
                  className="title"
                  textAlign={"center"}
                  paddingBlock={"1em"}
                >
                  Traveller's Information
                </Heading>
              )}
              <h3 color="#fffff">
                Craft Your Voyage: Personalize Your Preferences for an
                Unparalleled Travel Experience!
              </h3>
              <VStack>
                <h6>Departure Date</h6>
                <Field
                  type="date"
                  name="departureDate"
                  placeholder=""
                  required
                />
                <h6>Return Date</h6>
                <Field type="date" name="returnDate" placeholder="" required />
                <h6>Dietary Preferences</h6>
                <ul>
                  <label>
                    <Field type="checkbox" name="dietaryChoice" value="None" />
                    None
                  </label>
                  <label>
                    <Field
                      type="checkbox"
                      name="dietaryChoice"
                      value="Vegetarian"
                    />
                    Vegetarian
                  </label>
                  <label>
                    <Field
                      type="checkbox"
                      name="dietaryChoice"
                      value="Kosher"
                    />
                    Kosher
                  </label>

                  <label>
                    <Field type="checkbox" name="dietaryChoice" value="Halal" />
                    Halal
                  </label>
                  <label>
                    <Field
                      type="checkbox"
                      name="dietaryChoice"
                      value="Gluten Free"
                    />
                    Gluten Free
                  </label>
                  <label>
                    <Field
                      type="checkbox"
                      name="dietaryChoice"
                      value="Keto/Paleo"
                    />
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

                  <h6>Allergies</h6>
                  <label>
                    <Field type="checkbox" name="allergyChoice" value="None" />
                    None
                  </label>
                  <label>
                    <Field
                      type="checkbox"
                      name="allergyChoice"
                      value="Gluten"
                    />
                    Gluten
                  </label>
                  <label>
                    <Field type="checkbox" name="allergyChoice" value="Nuts" />
                    Nuts
                  </label>

                  <label>
                    <Field
                      type="checkbox"
                      name="allergyChoice"
                      value="Lactose"
                    />
                    Lactose
                  </label>
                  <label>
                    <Field type="checkbox" name="allergyChoice" value="Soy" />
                    Soy
                  </label>
                  <label>
                    <Field
                      type="checkbox"
                      name="allergyChoice"
                      value="Seafood"
                    />
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
                <Field as="select" name="tierChoice" required>
                  <option value=""></option>
                  <option value="Marian Luxe">Martian Luxe</option>
                  <option value="Martian Grandeur">Martian Grandeur</option>
                  <option value="Martian Voyageur">Martian Voyageur</option>
                </Field>
                <h3>
                  Your Wishes, Our Priority: Special Requests Welcome Here!
                </h3>
                <Field color={"white"} as="textarea" name="travelExtraNeeds" />
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
                colorScheme="orange"
                variant={"outline"}
                type="submit"
              >
                NEXT
              </Button>
            </Form>
          )}
        </Formik>
      </Box>
    </VStack>
  );
}
