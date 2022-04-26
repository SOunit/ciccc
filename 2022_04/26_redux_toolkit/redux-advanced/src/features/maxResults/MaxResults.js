import React from "react";
import { Flex, Radio, RadioGroup, Stack, Text } from "@chakra-ui/react";
import {} from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { setMaxResult } from "./MaxResultSlice";

export const MaxResults = () => {
  const dispatch = useDispatch();
  const curMaxResults = useSelector((state) => state.MaxResults);

  const handleChange = (val) => {
    dispatch(setMaxResult(val));
  };

  return (
    <Flex my="4" justifyContent={"center"}>
      <Text mr="3">Number of results:</Text>
      <RadioGroup
        defaultValue={5}
        onChange={handleChange}
        value={curMaxResults}
      >
        <Stack spacing={4} direction="row">
          <Radio value={5}>5 tweets</Radio>
          <Radio value={8}>8 tweets</Radio>
          <Radio value={10}>10 tweets</Radio>
        </Stack>
      </RadioGroup>
    </Flex>
  );
};
