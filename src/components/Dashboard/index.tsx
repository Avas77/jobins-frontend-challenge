import React from "react";
import { Stack } from "@chakra-ui/react";
import DashboardHeader from "./components/DashboardHeader";

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
    </Stack>
  );
};

export default Dashboard;
