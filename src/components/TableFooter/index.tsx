import { Flex, HStack, Text } from "@chakra-ui/react";
import React from "react";
import SelectDropdown from "../SelectDropdown";
import Pagination from "../Pagination";

const TableFooter = () => {
  return (
    <Flex
      justify={{
        base: "center",
        md: "space-between",
      }}
      pb="1.6rem"
      direction={{ base: "column", md: "row" }}
      gap={{
        base: "2rem",
        md: 0,
      }}
    >
      <HStack gap="0.8rem" pl="2.4rem">
        <Text fontSize="1.5rem" fontWeight={500} color="#8B909A">
          Showing
        </Text>
        <SelectDropdown placeholder="10" options={[]} />
        <Text
          fontSize="1.5rem"
          fontWeight={500}
          color="#8B909A"
          w="50px"
          flex={1}
          sx={{
            textWrap: "nowrap",
          }}
        >
          of 50
        </Text>
      </HStack>
      <Pagination />
    </Flex>
  );
};

export default TableFooter;
