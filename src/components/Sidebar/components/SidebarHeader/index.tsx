import React from "react";
import { Flex, HStack, Heading } from "@chakra-ui/react";
import ICLogo from "../../../../icons/ic-logo";
import ICIndent from "../../../../icons/ic-indent";

interface ISidebarHeaderProps {
  setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}

const SidebarHeader = ({ setShowSidebar }: ISidebarHeaderProps) => {
  return (
    <Flex justify="space-between" pl="1.8rem" pr="1.4rem" pt="2rem" pb="2rem">
      <HStack gap="1rem">
        <ICLogo width="2.8rem" height="2.4rem" />
        <Heading as="h6" fontSize="2.2rem">
          JoBins
        </Heading>
      </HStack>
      <ICIndent width="2.4rem" onClick={() => setShowSidebar(false)} />
    </Flex>
  );
};

export default SidebarHeader;
