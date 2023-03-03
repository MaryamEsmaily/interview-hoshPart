import reactQueryConfig from "@/config/reactQuery.config";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import * as React from "react";
import "react-toastify/dist/ReactToastify.css";
import "@/styles/style.css";
import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { RtlProvider } from "@/provider/RtlProvider";
import theme from "@/theme/theme";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: reactQueryConfig,
  },
});

export default function App(props) {
  const { Component, pageProps } = props;
  const getLayout = Component.getLayout || ((page) => page);
  return (
    <QueryClientProvider client={queryClient}>
      <ToastContainer
        position="bottom-left"
        autoClose={6000}
        closeOnClick
        newestOnTop={false}
        pauseOnHover
        limit={5}
        icon={false}
        theme="colored"
        rtl={true}
        style={{ margin: "10px", maxWidth: "300px" }}
      />
      <ChakraProvider resetCSS theme={theme}>
        <RtlProvider>{getLayout(<Component {...pageProps} />)}</RtlProvider>
      </ChakraProvider>
    </QueryClientProvider>
  );
}
