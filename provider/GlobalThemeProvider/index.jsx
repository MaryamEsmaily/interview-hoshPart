import React, { useReducer } from "react";
import {
  globalThemeDispatchCtx,
  globalThemeStateCtx,
} from "@/context/globalTheme";
import globalThemeReducer, {
  initialStateGlobalTheme,
} from "@/reducer/globalThemeReducer";
import theme from "@/theme/theme";
import { RtlProvider } from "../RtlProvider";
import { ChakraProvider } from "@chakra-ui/react";

function GlobalThemeProvider({ children }) {
  //
  const [state, dispatch] = useReducer(
    globalThemeReducer,
    initialStateGlobalTheme
  );
  //
  return (
    <globalThemeDispatchCtx.Provider value={dispatch}>
      <globalThemeStateCtx.Provider value={state}>
        <ChakraProvider resetCSS theme={theme}>
          <RtlProvider>{children(state)}</RtlProvider>
        </ChakraProvider>
      </globalThemeStateCtx.Provider>
    </globalThemeDispatchCtx.Provider>
  );
}

export default GlobalThemeProvider;
