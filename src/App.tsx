import * as React from "react";
import { ChakraProvider, Flex, extendTheme } from "@chakra-ui/react";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";

const theme = extendTheme({
  styles: {
    global: {
      "html, body": {
        fontSize: "10px",
        boxSizing: "border-box",
      },
    },
  },
});

export const App = () => (
  <ChakraProvider theme={theme}>
    <Flex backgroundColor="#F5F5F5" height="100vh">
      <Sidebar />
      <Dashboard />
    </Flex>
  </ChakraProvider>
);
