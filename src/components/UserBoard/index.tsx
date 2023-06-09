import React from "react";
import Board from "../Board";
import PersonalInfo from "../PersonalInfo";
import VerticalDivider from "../VerticalDivider";
import ShippingAddress from "../ShippingAddress";
import UserInfo from "../UserInfo";
import { Flex } from "@chakra-ui/react";
import UserTabs from "../UserTabs";

const UserBoard = () => {
  return (
    <Board mt="1.7rem">
      <Flex
        direction={{
          base: "column",
          lg: "row",
        }}
      >
        <UserInfo />
        <VerticalDivider />
        <PersonalInfo />
        <VerticalDivider />
        <ShippingAddress />
      </Flex>
      <UserTabs />
    </Board>
  );
};

export default UserBoard;
