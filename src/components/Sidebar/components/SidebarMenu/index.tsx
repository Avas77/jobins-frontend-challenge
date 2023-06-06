import React from "react";
import { Flex, Stack, Text } from "@chakra-ui/react";

interface ISidebarMenuProps {
  icon: React.JSX.Element;
  name: string;
}

const SidebarMenu = ({ icon, name }: ISidebarMenuProps) => {
  return (
    <Stack
      _hover={{
        background: "#F3F4F8",
        borderRadius: "6px",
      }}
      cursor="pointer"
      _first={{
        marginTop: "1.5rem",
      }}
    >
      <Flex gap="0.8rem" pl="0.5rem" py="0.9rem">
        {icon}
        <Text fontSize="1.5rem" color="#8B909A">
          {name}
        </Text>
      </Flex>
    </Stack>
  );
};

export default SidebarMenu;
