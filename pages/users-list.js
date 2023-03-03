import CustomTable from "@/components/custom/Table";
import AddUserModal from "@/components/modal/AddUserModal";
import { useGetUsers } from "@/hook/api/useUsersApi";
import AppLayout from "@/layout/AppLayout";
import {
  Box,
  Button,
  Modal,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useMemo } from "react";

function UsersListPage() {
  //
  const { push } = useRouter();
  //
  const { isOpen, onOpen, onClose } = useDisclosure();
  //
  const { data: users } = useGetUsers();
  //
  const data = useMemo(() => users ?? [], [users]);
  //
  const columns = useMemo(
    () => [
      {
        Header: "نام کاربر",
        accessor: "name",
        Cell: ({ value, row }) => {
          return (
            <Text
              onClick={() => push(`/edit-user/${row.original.id}`)}
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
          <Text>لیست کاربران</Text>
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
