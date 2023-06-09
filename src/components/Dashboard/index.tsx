import React from "react";
import { Flex, SimpleGrid, Stack } from "@chakra-ui/react";
import DashboardHeader from "./components/DashboardHeader";
import SalesBoard from "../SalesBoard";
import ProfitsBoard from "../ProfitsBoard";
import CountryBoard from "../CountryBoard";
import UserBoard from "../UserBoard";
import SearchAndFilter from "../SearchAndFilter";
import CustomerBoard from "../CustomerBoard";

interface IDashboardProps {
  setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}

const Dashboard = ({ setShowSidebar }: IDashboardProps) => {
  return (
    <Stack
      width={{ base: "100%", md: "calc(100% - 280px)" }}
      ml="auto"
      overflowX="hidden"
      pt="1.9rem"
      pl="2.8rem"
      pr="3.4rem"
      pb="3rem"
    >
      <DashboardHeader setShowSidebar={setShowSidebar} />
      <SimpleGrid
        mt="2.3rem"
        gap="1.2rem"
        justifyContent="space-between"
        columns={{
          base: 1,
          sm: 1,
          md: 2,
          lg: 3,
        }}
      >
        <SalesBoard />
        <ProfitsBoard />
        <CountryBoard />
      </SimpleGrid>
      <UserBoard />
      <SearchAndFilter />
      <CustomerBoard />
    </Stack>
  );
};

export default Dashboard;
