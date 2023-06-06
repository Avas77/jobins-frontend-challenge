import React from "react";
import { Text } from "@chakra-ui/react";

interface IMenuTitleProps {
  name: string;
}

const MenuTitle = ({ name }: IMenuTitleProps) => {
  return (
    <Text fontSize="1.1rem" color="#8B909A" pl="0.5rem">
      {name.toUpperCase()}
    </Text>
  );
};

export default MenuTitle;
