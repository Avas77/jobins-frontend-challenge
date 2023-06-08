import { Search2Icon } from "@chakra-ui/icons";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import React from "react";

const SearchField = () => {
  return (
    <InputGroup
      w="20rem"
      h="4rem"
      color="#8B909A"
      bgColor="#FFFFFF"
      borderRadius={4}
      boxShadow="0px 4px 16px rgba(0, 0, 0, 0.04)"
    >
      <Input
        type="text"
        placeholder="Search..."
        color="#8B909A"
        w="20rem"
        h="4rem"
        fontSize="1.5rem"
      />
      <InputRightElement pointerEvents="none" h="4rem" mr="1.1rem">
        <Search2Icon color="#8B909A" fontSize="1.4rem" />
      </InputRightElement>
    </InputGroup>
  );
};

export default SearchField;
