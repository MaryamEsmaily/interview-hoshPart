import { Box, Spinner, Td, Tr } from "@chakra-ui/react";
import React from "react";

function RenderTbody({ isLoading, rows, prepareRow, columns }) {
  // Render When Table Is Loading
  if (isLoading)
    return (
      <Tr>
        <Td textAlign="center" colSpan={columns.length}>
          <Spinner my={2} />
        </Td>
      </Tr>
    );
  // Render When Table Without Data
  if (!rows?.length)
    return (
      <Tr>
        <Td textAlign="center" colSpan={columns.length}>
          <Box my={2}>داده ای وجود ندارد</Box>
        </Td>
      </Tr>
    );

  // Render When Table In Normal Mode
  return rows.map((row, i) => {
    prepareRow(row);
    return (
      // eslint-disable-next-line react/jsx-key
      <Tr {...row.getRowProps()}>
        {row.cells.map((cell) => {
          return (
            // eslint-disable-next-line react/jsx-key
            <Td
              textAlign="center"
              border="none"
              py={7}
              fontSize="sm"
              {...cell.getCellProps()}
            >
              {cell.render("Cell")}
            </Td>
          );
        })}
      </Tr>
    );
  });
}

export default React.memo(RenderTbody);
