import styles from "@/theme/styles";
import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";

//
const theme = () =>
  extendTheme(
    {
      direction: "rtl",
      styles,
      semanticTokens: {
        colors: {
          "primary-text": { default: "black", _dark: "white" },
          layout: { default: "white", _dark: "#182040" },
          "layout-deep": { default: "ghost-white", _dark: "#020B1F" },
        },
      },
    },
    withDefaultColorScheme({
      colorScheme: "brand",
    })
  );

export default theme;
