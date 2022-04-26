import React from "react";
import { Flex, IconButton, Input } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { MaxResults } from "../maxResults/MaxResults";

export const Tweets = () => {
  return (
    <>
      <Flex alignItems={"center"}>
        <Input
          placeholder="Enter a keyword or hashtag to search"
          size={"lg"}
          mr="3"
        />
        <IconButton
          icon={<SearchIcon />}
          colorScheme="twitter"
          aria-label="Search Twitter"
        />
      </Flex>
      <MaxResults />
    </>
  );
};
