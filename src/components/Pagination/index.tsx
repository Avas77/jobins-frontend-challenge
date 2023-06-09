import { HStack } from "@chakra-ui/react";
import React from "react";
import PaginatedBox from "./PaginatedBox";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

const Pagination = () => {
  return (
    <HStack gap={2} flex="0 1 23%">
      <PaginatedBox>
        <ChevronLeftIcon w="1.6rem" h="1.6rem" />
      </PaginatedBox>
      <PaginatedBox active>1</PaginatedBox>
      <PaginatedBox>2</PaginatedBox>
      <PaginatedBox>3</PaginatedBox>
      <PaginatedBox>4</PaginatedBox>
      <PaginatedBox>5</PaginatedBox>
      <PaginatedBox>
        <ChevronRightIcon w="1.6rem" h="1.6rem" />
      </PaginatedBox>
    </HStack>
  );
};

export default Pagination;
