import React from "react";
import Board from "../Board";
import {
  Box,
  Flex,
  Image,
  Stack,
  Stat,
  StatHelpText,
  StatNumber,
  Text,
} from "@chakra-ui/react";
import ICArrow from "../../icons/ic-arrow";

const SalesBoard = () => {
  return (
    <Board pt="2rem" pl="4.3rem" pb="2.8rem" display="flex">
      <Box
        borderRight="1px solid #DBDADE"
        pr="3.9rem"
        display="flex"
        alignItems="center"
      >
        <Image src="/assets/business.svg" />
      </Box>
      <Stack pl="3.3rem" pr="5.2rem" gap="3rem">
        <Stack>
          <Text fontSize="1.8rem" fontWeight={600} gap="0.4rem">
            Total Sales & Costs
          </Text>
          <Text fontSize="1.4rem" fontWeight={500} color="#8B909A">
            Last 7 days
          </Text>
        </Stack>
        <Stat gap="1.6rem">
          <StatNumber fontSize="3.2rem" fontWeight="700">
            $350K
          </StatNumber>
          <Flex gap="0.8rem">
            <StatHelpText display="flex">
              <ICArrow width="1.6rem" color="#1EB564" />
              <Text fontSize="1.4rem" fontWeight={500} color="#1EB564">
                8.56K
              </Text>
            </StatHelpText>
            <StatHelpText fontSize="1.4rem" fontWeight={500} color="#8B909A">
              vs last 7 days
            </StatHelpText>
          </Flex>
        </Stat>
      </Stack>
    </Board>
  );
};

export default SalesBoard;
