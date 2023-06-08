import React from "react";
import { Flex, Stack } from "@chakra-ui/react";
import DashboardHeader from "./components/DashboardHeader";
import SalesBoard from "../SalesBoard";
import ProfitsBoard from "../ProfitsBoard";
import CountryBoard from "../CountryBoard";
import UserBoard from "../UserBoard";
import SearchAndFilter from "../SearchAndFilter";

const Dashboard = () => {
  return (
    <Stack
      width="calc(100% - 280px)"
      ml="auto"
      overflowX="hidden"
      pt="1.9rem"
      pl="2.8rem"
      pr="3.4rem"
      pb="3rem"
    >
      <DashboardHeader />
      <Flex mt="2.3rem" gap="1.2rem" justifyContent="space-between">
        <SalesBoard />
        <ProfitsBoard />
        <CountryBoard />
      </Flex>
      <UserBoard />
      <SearchAndFilter />
    </Stack>
  );
};

export default Dashboard;
