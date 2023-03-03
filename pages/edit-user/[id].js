import CloseIcon from "@/components/icon/CloseIcon";
import { useDeleteUser, useGetUser, usePutUser } from "@/hook/api/useUsersApi";
import AppLayout from "@/layout/AppLayout";
import getBase64Format from "@/utils/getBase64Format";
import getInitialValuesFormik from "@/utils/getInitialValuesFormik";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  IconButton,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useMemo, useRef } from "react";
import { toast } from "react-toastify";

const initialValues = {
  id: "",
  avatar: "",
  city: "",
  company: "",
  country: "",
  dateOfBirth: "",
  email: "",
  name: "",
  phoneNumber: "",
  street: "",
  zipcode: "",
};

function EditUserPage() {
  //
  const refInputUpload = useRef();
  //
  const { query, push } = useRouter();
  const { id } = query;
  //
  const { data } = useGetUser(id);
  const putUser = usePutUser();
  const deleteUser = useDeleteUser();
  //
  const handleDeleteUser = () => {
    deleteUser.mutate(id, {
      onSuccess: (res) => {
        toast.success("با موفقیت حذف شد");
        push("/users-list");
      },
      onError: (err) => {
        toast.error("خطایی رخ داده است");
      },
    });
  };
  //
  const handleSubmit = (values) => {
    putUser.mutate(
      { ...values, id },
      {
        onSuccess: (res) => {
          toast.success("با موفقیت ویرایش شد");
        },
        onError: (err) => {
          toast.error("خطایی رخ داده است");
        },
      }
    );
  };
  //
  const memoizedInitialValues = useMemo(
    () =>
      getInitialValuesFormik({
        data: data,
        initialValues,
      }),
    [data]
  );
  //
  const formik = useFormik({
    onSubmit: handleSubmit,
    initialValues: memoizedInitialValues,
    enableReinitialize: true,
  });
  //
  return (
    <>
      <Text mt={6}>لیست کاربران</Text>
      <Flex
        as="form"
        onSubmit={formik.handleSubmit}
        width="100%"
        align="center"
        justify="center"
      >
        <Box
          w="100%"
          maxW="450px"
          boxShadow="2xl"
          shadow="red"
          sx={{ boxShadow: "24px 24px 96px 0px #0C132C" }}
          p={8}
        >
          <Text
            fontSize="lg"
            borderBottom="1px solid"
            borderColor="layout"
            pb={4}
          >
            ویرایش کاربر
          </Text>
          <Flex justify="center" my={6}>
            {!formik.values.avatar ? (
              <>
                <Box
                  border="1px solid blue"
                  borderRadius="full"
                  width="fit-content"
                  p={4}
                  onClick={() => {
                    refInputUpload.current.click();
                  }}
                  cursor="pointer"
                >
                  <Image
                    src="/images/service.png"
                    width={80}
                    height={80}
                    alt=""
                  />
                </Box>
                <Input
                  ref={refInputUpload}
                  display="none"
                  type="file"
                  accept=".jpg,.jpeg,.png"
                  onChange={(e) => {
                    getBase64Format(e.target.files[0], {
                      ...formik.getFieldProps("avatar"),
                    });
                  }}
                />
              </>
            ) : (
              <Box position="relative">
                <Box
                  position="relative"
                  border="1px solid blue"
                  borderRadius="full"
                  width={110}
                  height={110}
                  overflow="hidden"
                  p={4}
                >
                  <Image src={formik.values.avatar} fill alt="" />
                </Box>
                <IconButton
                  size="xs"
                  rounded="full"
                  position="absolute"
                  top={0}
                  left={4}
                  colorScheme="red"
                  onClick={() => formik.setFieldValue("avatar", "")}
                  icon={<CloseIcon />}
                />
              </Box>
            )}
          </Flex>
          <Stack spacing={8}>
            <Stack direction="row">
              <FormControl>
                <FormLabel fontSize="xs">نام کاربر</FormLabel>
                <Input
                  _placeholder={{ fontSize: "xs" }}
                  borderRadius="lg"
                  placeholder="نام کاربر  را وارد کنید"
                  {...formik.getFieldProps("name")}
                />
              </FormControl>
              <FormControl>
                <FormLabel fontSize="xs">سن</FormLabel>
                <Input
                  _placeholder={{ fontSize: "xs" }}
                  placeholder="سن کاربر  را وارد کنید"
                  borderRadius="lg"
                  {...formik.getFieldProps("dateOfBirth")}
                />
              </FormControl>
            </Stack>
            <Stack direction="row">
              <FormControl>
                <FormLabel fontSize="xs">ایمیل</FormLabel>
                <Input
                  _placeholder={{ fontSize: "xs" }}
                  borderRadius="lg"
                  placeholder="ایمیل کاربر  را وارد کنید"
                  {...formik.getFieldProps("email")}
                />
              </FormControl>
              <FormControl>
                <FormLabel fontSize="xs">شماره تلفن</FormLabel>

                <Input
                  _placeholder={{ fontSize: "xs" }}
                  placeholder="شماره کاربر  را وارد کنید"
                  borderRadius="lg"
                  {...formik.getFieldProps("phoneNumber")}
                />
              </FormControl>
            </Stack>
            <Stack direction="row">
              <FormControl>
                <FormLabel fontSize="xs">کشور</FormLabel>
                <Input
                  _placeholder={{ fontSize: "xs" }}
                  borderRadius="lg"
                  placeholder="نام کشور"
                  {...formik.getFieldProps("country")}
                />
              </FormControl>
              <FormControl>
                <FormLabel fontSize="xs">شهر</FormLabel>
                <Input
                  _placeholder={{ fontSize: "xs" }}
                  placeholder="نام شهر"
                  borderRadius="lg"
                  {...formik.getFieldProps("city")}
                />
              </FormControl>
              <FormControl>
                <FormLabel fontSize="xs">خیابان</FormLabel>
                <Input
                  _placeholder={{ fontSize: "xs" }}
                  placeholder="نام خیابان"
                  borderRadius="lg"
                  {...formik.getFieldProps("street")}
                />
              </FormControl>
              <FormControl>
                <FormLabel fontSize="xs">کد پستی</FormLabel>
                <Input
                  _placeholder={{ fontSize: "xs" }}
                  placeholder="کد"
                  borderRadius="lg"
                  {...formik.getFieldProps("zipcode")}
                />
              </FormControl>
            </Stack>
            <FormControl>
              <FormLabel fontSize="xs"> شرکت</FormLabel>
              <Input
                _placeholder={{ fontSize: "xs" }}
                placeholder="نام شرکت کاربر را وارد کنید"
                borderRadius="lg"
                {...formik.getFieldProps("company")}
              />
            </FormControl>
            <Stack direction="row">
              <Button type="submit" rounded="xl" width="full" me={1}>
                ویرایش
              </Button>
              <Button
                rounded="xl"
                width="full"
                colorScheme="red"
                onClick={handleDeleteUser}
              >
                حذف
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Flex>
    </>
  );
}

EditUserPage.getLayout = (page) => <AppLayout>{page}</AppLayout>;

export default EditUserPage;
