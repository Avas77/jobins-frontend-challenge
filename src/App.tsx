import * as React from "react";
import { ChakraProvider, Flex, extendTheme } from "@chakra-ui/react";
import Sidebar from "./components/Sidebar";

const theme = extendTheme({
  styles: {
    global: {
      "html, body": {
        fontSize: "10px",
      },
    },
  },
});

export const App = () => (
  <ChakraProvider theme={theme}>
    <Flex>
      <Sidebar />
    </Flex>
  </ChakraProvider>
);
