import MoonIcon from "@/components/icon/MoonIcon";
import SearchIcon from "@/components/icon/SearchIcon";
import SunIcon from "@/components/icon/SunIcon";
import {
  Box,
  Flex,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  useColorMode,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

function AppLayout({ showSearch, children }) {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  return (
    <Box px={12} py={3}>
      <Flex
        justify="space-between"
        align="center"
        height="100px"
        borderBottom="1px solid"
        borderColor="layout"
      >
        <Image
          src="/images/logo.png"
          width={150}
          height={100}
          alt="coin-logo"
        />
        <Stack direction="row" align="center" spacing={2}>
          {showSearch ? (
            <InputGroup>
              <Input
                type="number"
                rounded="xl"
                placeholder="جستجو"
                bg="layout"
                border="none"
              />
              <InputLeftElement
                sx={{
                  left: 0,
                  right: "unset",
                }}
              >
                <SearchIcon />
              </InputLeftElement>
            </InputGroup>
          ) : null}

          <Flex rounded="xl" p={1} bg="layout">
            <IconButton
              size="sm"
              variant={!isDark ? "solid" : "ghost"}
              onClick={() => {
                if (isDark) toggleColorMode();
              }}
              rounded="xl"
              icon={<SunIcon />}
            />
            <IconButton
              size="sm"
              variant={!isDark ? "ghost" : "solid"}
              onClick={() => {
                if (!isDark) toggleColorMode();
              }}
              rounded="xl"
              icon={<MoonIcon />}
            />
          </Flex>
        </Stack>
      </Flex>
      {children}
    </Box>
  );
}

export default AppLayout;
