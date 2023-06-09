import React from "react";
import {
  Avatar,
  AvatarBadge,
  Box,
  Flex,
  HStack,
  Heading,
} from "@chakra-ui/react";
import ICBell from "../../../../icons/ic-bell";
import ICIndent from "../../../../icons/ic-indent";

interface IDashboardHeaderProps {
  setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}

const DashboardHeader = ({ setShowSidebar }: IDashboardHeaderProps) => {
  return (
    <Flex justify="space-between">
      <HStack gap="1rem">
        <Box onClick={() => setShowSidebar(true)}>
          <ICIndent width="2.4rem" />
        </Box>
        <Heading as="h4">Dashboard</Heading>
      </HStack>
      <Flex align="center" position="relative">
        <Box
          _after={{
            content: '"4"',
            width: "18px",
            height: "18px",
            borderRadius: "50%",
            backgroundColor: "red",
            position: "absolute",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            top: "-2px",
            left: "12px",
            color: "#fff",
            fontSize: "1.3rem",
            fontWeight: "600",
          }}
        >
          <ICBell color="#4B465C" width="2.6rem" height="2.6rem" />
        </Box>
        <Avatar ml="2.4rem" src="/assets/purple.png">
          <AvatarBadge boxSize="1.25em" bg="green.500" />
        </Avatar>
      </Flex>
    </Flex>
  );
};

export default DashboardHeader;
