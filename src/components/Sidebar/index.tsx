import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  Stack,
  Text,
} from "@chakra-ui/react";
import SidebarHeader from "./components/SidebarHeader";
import SidebarMenu from "./components/SidebarMenu";
import { MainMenuItems } from "../../const/MainMenuItems";
import MenuTitle from "./components/MenuTitle";
import { ProductsMenuItems } from "../../const/ProductsMenuItems";

const Sidebar = () => {
  return (
    <Drawer isOpen={true} placement="left" onClose={() => {}} size="sm">
      <DrawerContent>
        <DrawerHeader py="2rem" paddingLeft="1.8rem" paddingRight="1.4rem">
          <SidebarHeader />
        </DrawerHeader>
        <DrawerBody>
          <Stack gap={0} mb="3rem">
            <MenuTitle name="Main Menu" />
            {MainMenuItems.map((item) => (
              <SidebarMenu icon={item.icon} key={item.id} name={item.name} />
            ))}
          </Stack>
          <Stack gap={0}>
            <MenuTitle name="Products" />
            {ProductsMenuItems.map((item) => (
              <SidebarMenu icon={item.icon} key={item.id} name={item.name} />
            ))}
          </Stack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default Sidebar;
