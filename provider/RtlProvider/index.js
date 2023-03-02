import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import rtl from "stylis-plugin-rtl";

const options = {
  rtl: { key: "css-ar", stylisPlugins: [rtl] },
};

export function RtlProvider({ children }) {
  const dir = "rtl";
  const cache = createCache(options[dir]);
  return <CacheProvider value={cache}>{children}</CacheProvider>;
}
