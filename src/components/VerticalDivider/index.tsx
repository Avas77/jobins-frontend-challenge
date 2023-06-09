import { Divider } from "@chakra-ui/react";
import React from "react";

const VerticalDivider = () => {
  return (
    <Divider
      orientation="vertical"
      alignSelf="center"
      height="13.9rem"
      color="#DBDADE"
      display={{
        base: "none",
        lg: "block",
      }}
    />
  );
};

export default VerticalDivider;
