import React, { useState } from "react";
import { Flex, IconButton, Input, Wrap, WrapItem } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { MaxResults } from "../maxResults/MaxResults";
import { findTweets } from "./findTweets";
import { TwitterTweetEmbed } from "react-twitter-embed";

export const Tweets = () => {
  const [searchValue, setSearchValue] = useState("");
  const [data, setData] = useState([]);

  const handleSubmit = async () => {
    if (searchValue) {
      const data = await findTweets(searchValue, 5);
      setData(data);
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
      <Wrap mt={5}>
        {data.map((tweet) => (
          <WrapItem key={tweet.id}>
            <TwitterTweetEmbed tweetId={tweet.id} />
          </WrapItem>
        ))}
      </Wrap>
    </>
  );
};
