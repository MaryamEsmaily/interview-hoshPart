import CloseIcon from "@/components/icon/CloseIcon";
import { usePostUser } from "@/hook/api/useUsersApi";
import getBase64Format from "@/utils/getBase64Format";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  IconButton,
  Input,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import Image from "next/image";
import React, { useRef } from "react";
import { toast } from "react-toastify";

const initialValues = {
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

function AddUserModal({ onClose }) {
  //
  const refInputUpload = useRef();
  //
  const postUser = usePostUser();
  //
  const handleSubmit = (values) => {
    postUser.mutate(
      { ...values, avatar: values.avatar.split(",")?.[1] },
      {
        onSuccess: (res) => {
          toast.success("با موفقیت اضافه شد");
          onClose();
        },
        onError: (err) => {
          toast.error("خطایی رخ داده است");
        },
      }
    );
  };
  //
  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: handleSubmit,
  });

  return (
    <>
      <ModalOverlay bg="blackAlpha.100" backdropFilter="blur(4px) " />
      <ModalContent bg="layout-deep" p={4} pt={1}>
        <Stack
          direction="row"
          align="center"
          borderBottom="1px solid"
          borderColor="layout"
        >
          <IconButton
            onClick={() => {
              onClose();
              formik.resetForm();
            }}
            variant="ghost"
            icon={<CloseIcon color="primary-text" />}
          />
          <ModalHeader ps={0} whiteSpace="nowrap">
            کاربر جدید
          </ModalHeader>
        </Stack>

        <ModalBody>
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
          <Stack as="form" spacing={8} onSubmit={formik.handleSubmit}>
            <Stack direction="row">
              <FormControl>
                <FormLabel fontSize="xs">نام کاربر</FormLabel>
                <Input
                  _placeholder={{ fontSize: "xs" }}
                  borderRadius="lg"
                  placeholder="نام کاربر جدید را وارد کنید"
                  {...formik.getFieldProps("name")}
                />
              </FormControl>
              <FormControl>
                <FormLabel fontSize="xs">سن</FormLabel>
                <Input
                  _placeholder={{ fontSize: "xs" }}
                  placeholder="سن کاربر جدید را وارد کنید"
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
                  placeholder="ایمیل کاربر جدید را وارد کنید"
                  {...formik.getFieldProps("email")}
                />
              </FormControl>
              <FormControl>
                <FormLabel fontSize="xs">شماره تلفن</FormLabel>

                <Input
                  _placeholder={{ fontSize: "xs" }}
                  placeholder="شماره کاربر جدید را وارد کنید"
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
              <FormLabel fontSize="xs">
                نام شرکت کاربر جدید را وارد کنید
              </FormLabel>
              <Input
                _placeholder={{ fontSize: "xs" }}
                placeholder="شرکت"
                borderRadius="lg"
                {...formik.getFieldProps("company")}
              />
            </FormControl>
            <Stack direction="row">
              <Button
                rounded="xl"
                width="full"
                variant="outline"
                me={1}
                onClick={() => {
                  onClose();
                  formik.resetForm();
                }}
              >
                لغو
              </Button>
              <Button rounded="xl" width="full" type="submit">
                تایید
              </Button>
            </Stack>
          </Stack>
        </ModalBody>
      </ModalContent>
    </>
  );
}

export default AddUserModal;
