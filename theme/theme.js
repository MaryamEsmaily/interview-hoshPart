import styles from "@/theme/styles";
import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";
//
import fonts from "@/theme/foundations/fonts";
import Button from "@/theme/components/Button";
import Table from "@/theme/components/Table";
//
const theme = extendTheme(
  {
    direction: "rtl",
    styles,
    semanticTokens: {
      colors: {
        "primary-text": { default: "black", _dark: "white" },
        "secondary-text": { default: "black", _dark: "#7E848E" },
        layout: { default: "white", _dark: "#182040" },
        "layout-deep": { default: "#f5f7fb", _dark: "#020B1F" },
        brand: "brand.500",
      },
    },
    fonts,
    components: {
      Button,
      Table,
    },
  },
  withDefaultColorScheme({
    colorScheme: "blue",
  })
);

export default theme;
