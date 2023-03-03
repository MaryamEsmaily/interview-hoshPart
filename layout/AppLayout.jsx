import MoonIcon from "@/components/icon/MoonIcon";
import SearchIcon from "@/components/icon/SearchIcon";
import SunIcon from "@/components/icon/SunIcon";
import { setSearchValue } from "@/store/slices/searchSlice";
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
import { useDispatch, useSelector } from "react-redux";

function AppLayout({ showSearch, children }) {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  //
  const searchValue = useSelector((state) => state.search.searchValue);
  const dispatch = useDispatch();
  //
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
                rounded="xl"
                placeholder="جستجو"
                bg="layout"
                border="none"
                value={searchValue}
                onChange={(e) => dispatch(setSearchValue(e.target.value))}
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
