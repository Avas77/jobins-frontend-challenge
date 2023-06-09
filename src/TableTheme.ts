import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";

// This function creates a set of function that helps us create multipart component styles.
const helpers = createMultiStyleConfigHelpers(["table", "thead", "tbody"]);

export const tableTheme = helpers.defineMultiStyleConfig({
  baseStyle: {
    table: {},
    thead: {
      tr: {
        th: {
          color: "#8B909A",
          fontSize: "1.3rem",
          fontWeight: 500,
          padding: "1.6rem 2rem",
        },
      },
    },
    tbody: {
      tr: {
        td: {
          paddingTop: "1.8rem",
          paddingBottom: "1.8rem",
          paddingLeft: "2rem",
        },
      },
    },
  },
  sizes: {},
  variants: {},
  defaultProps: {},
});
