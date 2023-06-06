import React from "react";
import { Flex, HStack, Heading } from "@chakra-ui/react";
import ICLogo from "../../../../icons/ic-logo";
import ICIndent from "../../../../icons/ic-indent";

const SidebarHeader = () => {
  return (
    <Flex justify="space-between">
      <HStack gap="1rem">
        <ICLogo width="2.8rem" height="2.4rem" />
        <Heading as="h6" fontSize="2.2rem">
          JoBins
        </Heading>
      </HStack>
      <ICIndent width="2.4rem" />
    </Flex>
  );
};

export default SidebarHeader;
