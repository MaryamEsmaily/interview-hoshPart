import React from "react";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { Box, chakra } from "@chakra-ui/react";

const ChakraDatePicker = chakra(DatePicker, {
  baseStyle: {
    ".rmdp-day.rmdp-selected span:not(.highlight)": {
      bg: "blue.500",
    },
    ".rmdp-day:not(.rmdp-disabled):not(.rmdp-day-hidden) span:hover": {
      bg: "blue.400",
    },
    ".rmdp-day.rmdp-today span": {
      bg: "blue.300",
    },
    ".rmdp-week-day": {
      color: "blue.700",
    },
    ".rmdp-arrow-container:hover": {
      bg: "blue.500",
    },
    ".rmdp-arrow-container": {
      alignItems: "center",
    },
    ".rmdp-arrow": {
      borderColor: "blue.500",
      mb: "5px",
    },
    ".rmdp-right .rmdp-arrow": {
      ml: "1px",
    },
  },
});

function Datepicker({ value, onChange, name, height = "40px" }) {
  return (
    <Box
      sx={{
        ".rmdp-container": {
          display: "block!important",
        },
      }}
    >
      <ChakraDatePicker
        editable={true}
        style={{
          textAlign: "center",
          height,
          width: "100%",
          borderColor: "inherit",
          backgroundColor: "transparent",
          borderRadius: 8,
        }}
        calendar={persian}
        locale={persian_fa}
        calendarPosition={"bottom-center"}
        format="YYYY/MM/DD"
        value={value}
        name={name}
        onChange={(v) => {
          if (onChange)
            onChange({
              target: {
                value: v?.toDate().toJSON(),
                name,
              },
            });
        }}
      />
    </Box>
  );
}

export default Datepicker;
