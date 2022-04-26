import React, { useState } from "react";
import { Flex, IconButton, Input } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { MaxResults } from "../maxResults/MaxResults";
import { findTweets } from "./findTweets";

export const Tweets = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleSubmit = async () => {
    if (searchValue) {
      const data = await findTweets(searchValue, 5);
      console.log(data);
    }
  };

  return (
    <>
      <Flex alignItems={"center"}>
        <Input
          placeholder="Enter a keyword or hashtag to search"
          size={"lg"}
          mr="3"
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <IconButton
          icon={<SearchIcon />}
          colorScheme="twitter"
          aria-label="Search Twitter"
          onClick={handleSubmit}
        />
      </Flex>
      <MaxResults />
    </>
  );
};
