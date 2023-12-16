import {
  Button,
  Heading,
  VStack,
  FormControl,
  Box,
  Text,
  FormLabel,
} from "@chakra-ui/react";
import { Formik, Form, Field } from "formik";

import "../App.css";
export default function PersonalInfo(props) {
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
                  {`${values.firstName}'s`} Information
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
              <VStack>
                <Field
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  required
                />
                <Field
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  required
                />

                <Field
                  type="date"
                  name="dateOfBirth"
                  placeholder="Date of Birth"
                  required
                />
                <Field
                  type="text"
                  name="nationality"
                  placeholder="Nationality"
                  required
                />
                <Field
                  type="tel"
                  name="phoneNum"
                  placeholder="(123)-456-789"
                  required
                />
                <Field
                  type="email"
                  autoComplete="on"
                  name="email"
                  placeholder="Email"
                  required
                />
                <Button colorScheme="orange" variant={"outline"} type="submit">
                  NEXT
                </Button>
              </VStack>
            </Form>
          )}
        </Formik>
      </Box>
    </VStack>
  );
}
