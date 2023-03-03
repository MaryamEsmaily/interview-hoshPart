import CustomTable from "@/components/custom/Table";
import { useGetUsers } from "@/hook/api/useUsersApi";
import AppLayout from "@/layout/AppLayout";
import { Box, Button, Stack, Text } from "@chakra-ui/react";
import React, { useMemo } from "react";

function UsersListPage() {
  const { data: users } = useGetUsers();
  //
  const data = useMemo(() => users ?? [], [users]);
  //
  const columns = useMemo(
    () => [
      {
        Header: "نام کاربر",
        accessor: "name",
      },
      {
        Header: "سن",
        accessor: "dateOfBirth",
        Cell: ({ value }) => {
          const year = typeof value === "string" ? value?.split("-")?.[0] : "-";
          const age = new Date().getFullYear() - +year;
          return <Text>{age}</Text>;
        },
      },
      {
        Header: "شماره تلفن",
        accessor: "phoneNumber",
      },
      {
        Header: "ایمیل",
        accessor: "email",
      },
      {
        Header: "آدرس",
        accessor: "street",
      },
      {
        Header: "شرکت",
        accessor: "company",
      },
    ],
    []
  );
  //
  return (
    <Box mt={10}>
      <Stack direction="row" align="center" justifyContent="space-between">
        <Text>لیست کاربران</Text>
        <Button>کاربر جدید</Button>
      </Stack>
      <CustomTable columns={columns} data={data} />
    </Box>
  );
}

UsersListPage.getLayout = (page) => (
  <AppLayout showSearch={true}>{page}</AppLayout>
);

export default UsersListPage;
