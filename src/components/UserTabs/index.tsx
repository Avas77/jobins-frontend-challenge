import { Tab, TabList, Tabs } from "@chakra-ui/react";
import React from "react";

const UserTabs = () => {
  return (
    <Tabs pl="2.6rem">
      <TabList>
        <Tab fontSize="1.5rem" padding="1.6rem 2.4rem">
          All Orders
        </Tab>
        <Tab fontSize="1.5rem" padding="1.6rem 2.4rem">
          Completed
        </Tab>
        <Tab fontSize="1.5rem" padding="1.6rem 2.4rem">
          Canceled
        </Tab>
      </TabList>
    </Tabs>
  );
};

export default UserTabs;
