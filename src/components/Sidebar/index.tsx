import React from "react";
import { Stack, useTheme } from "@chakra-ui/react";
import SidebarHeader from "./components/SidebarHeader";
import SidebarMenu from "./components/SidebarMenu";
import { MainMenuItems } from "../../const/MainMenuItems";
import MenuTitle from "./components/MenuTitle";
import { ProductsMenuItems } from "../../const/ProductsMenuItems";

interface ISidebarProps {
  showSidebar: boolean;
  setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar = ({ showSidebar, setShowSidebar }: ISidebarProps) => {
  return (
    <Stack
      w="260px"
      background="#fff"
      gap={0}
      display={{ base: showSidebar ? "block" : "none", md: "block" }}
    >
      <SidebarHeader setShowSidebar={setShowSidebar} />
      <Stack gap={0} mb="3rem" px="1.8rem" pt="1rem">
        <MenuTitle name="Main Menu" />
        {MainMenuItems.map((item) => (
          <SidebarMenu icon={item.icon} key={item.id} name={item.name} />
        ))}
      </Stack>
      <Stack gap={0} px="1.4rem">
        <MenuTitle name="Products" />
        {ProductsMenuItems.map((item) => (
          <SidebarMenu icon={item.icon} key={item.id} name={item.name} />
        ))}
      </Stack>
    </Stack>
  );
};

export default Sidebar;
