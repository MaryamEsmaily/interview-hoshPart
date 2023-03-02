import styles from "@/theme/styles";
import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";
//
import fonts from "@/theme/foundations/fonts";
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
          "layout-deep": { default: "#f5f7fb", _dark: "#020B1F" },
          brand: "brand.500",
        },
        fonts,
      },
    },
    withDefaultColorScheme({
      colorScheme: "blue",
    })
  );

export default theme;
