import { Flex, HStack } from "@chakra-ui/react";
import React from "react";
import SelectDropdown from "../SelectDropdown";
import { StatusOptions } from "../../const/StatusOptions";
import SearchField from "../SearchField";

const SearchAndFilter = () => {
  return (
    <Flex mt="1.8rem" justify="space-between">
      <HStack gap="1.4rem">
        <SelectDropdown
          placeholder="Status: All"
          options={StatusOptions}
          w="13.6rem"
        />
        <SearchField />
      </HStack>
      <SelectDropdown
        placeholder="Filter by date range"
        options={[]}
        w="19.9rem"
      />
    </Flex>
  );
};

export default SearchAndFilter;
