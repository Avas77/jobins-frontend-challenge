import { tabsAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(tabsAnatomy.keys);

const baseStyle = definePartsStyle({
  tab: {
    color: "#8B909A",
    _selected: {
      color: "#0F60FF",
      borderColor: "#0F60FF",
    },
  },
});

// export the component theme
export const tabsTheme = defineMultiStyleConfig({ baseStyle });
