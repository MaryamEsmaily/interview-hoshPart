import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";
//
const theme = () =>
  extendTheme(
    {
      direction: "rtl",
      semanticTokens: {
        colors: {
          "primary-text": { default: "black", _dark: "white" },
          "secondary-text": { default: "dim-gray.500", _dark: "white" },
          "third-text": { default: "dark-gray.500", _dark: "white" },
          "fourth-text": { default: "alto.500", _dark: "black" },
          layout: { default: "white", _dark: "#343c49" },
          "layout-deep": { default: "ghost-white", _dark: "#202630" },
          "layout-over": { default: "alto.500", _dark: "black" },
          "ghost-white": "#F5F7FB",
          brand: "brand.500",
          divider: {
            default: "alto.500",
            _dark: "white",
          },
        },
      },
    },
    withDefaultColorScheme({
      colorScheme: "brand",
    })
  );

export default theme;
