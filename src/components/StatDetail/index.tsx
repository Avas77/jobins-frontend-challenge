import React from "react";
import { Flex, Stat, StatHelpText, StatNumber, Text } from "@chakra-ui/react";
import ICArrow from "../../icons/ic-arrow";

interface IStatDetailProps {
  statNumber: string;
  incrementNumber: string;
  period: string;
}

const StatDetail = ({
  statNumber,
  incrementNumber,
  period,
}: IStatDetailProps) => {
  return (
    <Stat gap="1.6rem">
      <StatNumber fontSize="3.2rem" fontWeight="700">
        {statNumber}
      </StatNumber>
      <Flex gap="0.8rem">
        <StatHelpText display="flex">
          <ICArrow width="1.6rem" color="#1EB564" />
          <Text fontSize="1.4rem" fontWeight={500} color="#1EB564">
            {incrementNumber}
          </Text>
        </StatHelpText>
        <StatHelpText fontSize="1.4rem" fontWeight={500} color="#8B909A">
          {period}
        </StatHelpText>
      </Flex>
    </Stat>
  );
};

export default StatDetail;
