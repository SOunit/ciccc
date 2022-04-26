import { Container, Heading } from "@chakra-ui/react";
import React from "react";
import "./App.css";
import { Tweets } from "./features/tweets/Tweets";

function App() {
  return (
    <Container>
      <Heading
        as={"h1"}
        size="xl"
        my="16"
        textAlign={"center"}
        color="twitter.600"
      >
        Hello
      </Heading>
      <Tweets />
    </Container>
  );
}

export default App;
