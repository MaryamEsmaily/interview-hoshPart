import reactQueryConfig from "@/config/reactQuery.config";
import { RtlProvider } from "@/provider/RtlProvider";
import "@/styles/globals.css";
import theme from "@/theme/theme";
import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: reactQueryConfig,
  },
});

export default function App(props) {
  const { Component, pageProps, token } = props;
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
