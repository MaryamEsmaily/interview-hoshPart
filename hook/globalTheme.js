import {
  globalThemeDispatchCtx,
  globalThemeStateCtx,
} from "@/context/globalTheme";
import { useContext } from "react";

export const useGlobalThemeState = () => useContext(globalThemeStateCtx);
export const useGlobalThemeDispatch = () => useContext(globalThemeDispatchCtx);
