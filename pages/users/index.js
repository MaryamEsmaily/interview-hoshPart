import CustomTable from "@/components/custom/Table";
import LeftArrowIcon from "@/components/icon/LeftArrowIcon";
import AddUserModal from "@/components/modal/AddUserModal";
import { useGetUsers } from "@/hook/api/useUsersApi";
import AppLayout from "@/layout/AppLayout";
import matchSorter from "@/utils/matchSorter";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Modal,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useMemo } from "react";
import { useSelector } from "react-redux";

function UsersListPage() {
  //
  const { push } = useRouter();
  //
  const searchValue = useSelector((state) => state.search.searchValue);
  //
  const { isOpen, onOpen, onClose } = useDisclosure();
  //
  const { data: users } = useGetUsers();
  //
  const data = useMemo(() => {
    const list = users ?? [];
    if (!searchValue) return list;
    return matchSorter(list, searchValue, [
      "name",
      "phoneNumber",
      "email",
      "street",
      "company",
      "country",
      "city",
    ]);
  }, [users, searchValue]);
  //
  const columns = useMemo(
    () => [
      {
        Header: "نام کاربر",
        accessor: "name",
        Cell: ({ value, row }) => {
          return (
            <Text
              onClick={() => push(`/users/${row.original.id}`)}
              cursor="pointer"
              _hover={{ textDecoration: "underline" }}
            >
              {value ? value : "-"}
            </Text>
          );
        },
      },
      {
        Header: "سن",
        accessor: "dateOfBirth",
        Cell: ({ value }) => {
          const year = typeof value === "string" ? value?.split("-")?.[0] : "-";
          const age = new Date().getFullYear() - +year;
          return <Text>{age}</Text>;
        },
        width: 40,
      },
      {
        Header: "شماره تلفن",
        accessor: "phoneNumber",
      },
      {
        Header: "ایمیل",
        accessor: "email",
        width: 250,
      },
      {
        Header: "آدرس",
        accessor: "street",
        Cell: ({ value, row }) => {
          return (
            <Text whiteSpace="break-spaces">
              {value},{row.original.city},{row.original.country}
            </Text>
          );
        },
        width: 250,
      },
      {
        Header: "شرکت",
        accessor: "company",
        width: 220,
      },
    ],
    []
  );
  //
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <AddUserModal onClose={onClose} />
      </Modal>
      <Box mt={10}>
        <Stack direction="row" align="center" justifyContent="space-between">
          <Breadcrumb spacing="8px" separator={<LeftArrowIcon fontSize="xs" />}>
            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink href="/users">
                <LeftArrowIcon fontSize="xs" mt={2} me={1} />
                لیست کاربران
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <Button onClick={onOpen}>کاربر جدید</Button>
        </Stack>
        <CustomTable columns={columns} data={data} />
      </Box>
    </>
  );
}

UsersListPage.getLayout = (page) => (
  <AppLayout showSearch={true}>{page}</AppLayout>
);

export default UsersListPage;
