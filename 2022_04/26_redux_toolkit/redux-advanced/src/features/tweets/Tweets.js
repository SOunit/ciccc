import React, { useState } from "react";
import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  CloseButton,
  Flex,
  IconButton,
  Input,
  Skeleton,
  Stack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { MaxResults } from "../maxResults/MaxResults";
import { findTweets } from "./findTweets";
import { TwitterTweetEmbed } from "react-twitter-embed";
import { useDispatch, useSelector } from "react-redux";
import { fetchTweets } from "./tweetsSlice";

export const Tweets = () => {
  const [searchValue, setSearchValue] = useState("");
  // const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const { tweets, isLoading, error } = useSelector((state) => state.tweets);
  const maxResults = useSelector((state) => {
    return state.maxResults;
  });

  const handleSubmit = async () => {
    if (searchValue) {
      // const data = await findTweets(searchValue, 5);
      // setData(data);
      dispatch(fetchTweets(searchValue, maxResults));
      setSearchValue("");
    }
  };

  if (error) {
    return (
      <Alert status="error">
        <AlertIcon />
        <AlertTitle mr={2}>An error occurred!</AlertTitle>
        <AlertDescription>
          Unable to fetch tweets. Please try again later.
        </AlertDescription>
        <CloseButton position={"absolute"} right="8px" top="8px" />
      </Alert>
    );
  }

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

      {isLoading && (
        <Stack mt={5}>
          <Skeleton height={"20px"} />
          <Skeleton height={"20px"} />
          <Skeleton height={"20px"} />
        </Stack>
      )}

      <Wrap mt={5}>
        {tweets.map((tweet) => (
          <WrapItem key={tweet.id}>
            <TwitterTweetEmbed tweetId={tweet.id} />
          </WrapItem>
        ))}
      </Wrap>
    </>
  );
};
