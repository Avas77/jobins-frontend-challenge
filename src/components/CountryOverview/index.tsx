import {
  Box,
  Flex,
  Image,
  Progress,
  Stat,
  StatHelpText,
  StatNumber,
  Text,
} from "@chakra-ui/react";
import { CountryDataType } from "../../const/CountryData";
import ICChevronUp from "../../icons/ic-chevron-up";
import ICChevronDown from "../../icons/ic-chevron-down";

const CountryOverview = ({
  id,
  name,
  url,
  total,
  progressValue,
  isProfit,
  percent,
}: CountryDataType) => {
  return (
    <Flex align="center" mb="1.8rem" key={id}>
      <Box>
        <Image src={url} width="3.4rem" height="3.4rem" borderRadius="50%" />
      </Box>
      <Stat mx="1rem" width="auto">
        <StatNumber fontSize="1.5rem" fontWeight={600}>
          {total}
        </StatNumber>
        <StatHelpText fontSize="1.3rem" fontWeight={400} color="#8B909A" mb={0}>
          {name}
        </StatHelpText>
      </Stat>
      <Progress value={progressValue} width="16.8rem" borderRadius="10px" />
      <Flex ml="2.1rem">
        <Box mr="0.4rem">
          {isProfit ? (
            <ICChevronUp width="2rem" color="#28C76F" />
          ) : (
            <ICChevronDown width="2rem" color="#EA5455" />
          )}
        </Box>
        <Text
          color={isProfit ? "#28C76F" : "#EA5455"}
          fontSize="1.5rem"
          fontWeight={600}
        >
          {percent}
        </Text>
      </Flex>
    </Flex>
  );
};

export default CountryOverview;
