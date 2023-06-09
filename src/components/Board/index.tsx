import React from "react";
import { Box, BoxProps } from "@chakra-ui/react";

interface IBoardProps extends BoxProps {
  children: React.ReactNode;
}

const Board = ({ children, ...rest }: IBoardProps) => {
  return (
    <Box backgroundColor="#fff" borderRadius="16px" {...rest}>
      {children}
    </Box>
  );
};

export default Board;
