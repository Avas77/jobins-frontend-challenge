import { Box } from "@chakra-ui/react";
import React from "react";

interface IPaginatedBoxProps {
  children: React.ReactNode;
  active?: boolean;
}

const PaginatedBox = ({ children, active }: IPaginatedBoxProps) => {
  return (
    <Box
      border="1px solid #F1F2F6"
      backgroundColor={active ? "#0F60FF" : "#F1F2F6"}
      w="2.8rem"
      h="2.8rem"
      display="flex"
      justifyContent="center"
      alignItems="center"
      borderRadius={4}
      color={active ? "#fff" : "#8B909A"}
      fontSize="1.3rem"
    >
      {children}
    </Box>
  );
};

export default PaginatedBox;
