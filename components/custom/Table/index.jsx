import { useTable, usePagination, useSortBy, useFlexLayout } from "react-table";
import RenderTbody from "./RenderTbody";
import {
  StatDownArrow,
  StatUpArrow,
  Table,
  TableContainer,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

const CustomTable = ({ columns, data, isLoading }) => {
  //
  const { getTableProps, getTableBodyProps, headerGroups, prepareRow, rows } =
    useTable(
      {
        columns,
        data,
      },
      useSortBy,
      usePagination,
      useFlexLayout
    );
  // SortedIcon
  const SortedIcon = (isSorted, isSortedDesc) => {
    if (!isSorted) return null;
    return isSortedDesc ? (
      <StatUpArrow color="primary-text" ms={2} />
    ) : (
      <StatDownArrow color="primary-text" ms={2} />
    );
  };
  //
  return (
    <TableContainer mt={8} border="1px solid #182040" borderRadius="3xl">
      <Table {...getTableProps()} width="100%" height="100%">
        <Thead>
          {headerGroups.map((headerGroup) => (
            // eslint-disable-next-line react/jsx-key
            <Tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                // eslint-disable-next-line react/jsx-key
                <Th
                  color="secondary-text"
                  sx={{
                    textAlign: "center",
                    fontSize: "xs",
                    border: "none",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                >
                  <Text>{column.render("Header")}</Text>
                  {column.isSorted && (
                    <span>
                      {SortedIcon(column?.isSorted, column?.isSortedDesc)}
                    </span>
                  )}
                </Th>
              ))}
            </Tr>
          ))}
        </Thead>
        <Tbody
          {...getTableBodyProps()}
          sx={{
            "tr:nth-child(odd)": {
              background: "layout",
            },
          }}
        >
          <RenderTbody
            columns={columns}
            isLoading={isLoading}
            rows={rows}
            prepareRow={prepareRow}
          />
        </Tbody>
      </Table>
    </TableContainer>
  );
};
export default CustomTable;
