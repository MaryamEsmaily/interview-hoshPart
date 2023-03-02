import AppLayout from "@/layout/AppLayout";
import { Box } from "@chakra-ui/react";
import React from "react";

function UsersListPage() {
  return <Box>UsersListPage</Box>;
}

UsersListPage.getLayout = (page) => (
  <AppLayout showSearch={true}>{page}</AppLayout>
);

export default UsersListPage;
