import React from "react";
import * as yup from "yup";
import { Formik, Form, ErrorMessage } from "formik";

import { Loader2 } from "lucide-react";
import { SheetClose } from "../../../components/ui/sheet";
import { Label } from "../../../components/ui/label";
import { Input } from "../../../components/ui/input";
import { Button } from "../../../components/ui/button";

const FormTool = () => {
  const initialValue = {
    name: "",
    email: "",
    phone: "",
    address: "",
  };

  const validationSchema = yup.object({
    name: yup
      .string()
      .required("name field is required")
      .min(3, "name must be 3 length"),
    email: yup
      .string()
      .email("that should be email format")
      .required("email field is required"),
    phone: yup
      .string()
      .min(9, "that should be valid phone number")
      .max(11, "that should be valid phone number")
      .required("phone field is required"),
    address: yup.string().required("address is required"),
  });

  const handleSubmit = () => {};

  return (
    <div className="h-full">
      <Formik
        validateOnBlur={false}
        validateOnChange={false}
        validationSchema={validationSchema}
        initialValues={initialValue}
        onSubmit={handleSubmit}
      >
        {({ handleBlur, handleChange, values, isSubmitting }) => (
          <>
            <Form className="flex flex-col gap-4 h-full justify-between pb-10">
              <div className=" space-y-5 mt-5">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    onBlur={handleBlur}
                    value={values.name}
                    onChange={handleChange}
                    type="text"
                    name="name"
                    id="name"
                  />
                  <ErrorMessage
                    className="text-danger text-sm"
                    component={"p"}
                    name="name"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    onBlur={handleBlur}
                    value={values.email}
                    onChange={handleChange}
                    type="email"
                    name="email"
                    id="email"
                  />
                  <ErrorMessage
                    className="text-danger text-sm"
                    component={"p"}
                    name="email"
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    onBlur={handleBlur}
                    value={values.phone}
                    onChange={handleChange}
                    type="phone"
                    name="phone"
                    id="phone"
                  />
                  <ErrorMessage
                    className="text-danger text-sm"
                    component={"p"}
                    name="phone"
                  />
                </div>
                <div>
                  <Label htmlFor="address">Address</Label>
                  <Input
                    onBlur={handleBlur}
                    value={values.address}
                    onChange={handleChange}
                    type="address"
                    name="address"
                    id="address"
                  />
                  <ErrorMessage
                    className="text-danger text-sm"
                    component={"p"}
                    name="address"
                  />
                </div>
              </div>
              <div className="flex gap-3">
                <SheetClose className="w-full mt-3">
                  <Button
                    variant="outline"
                    disabled={isSubmitting}
                    type="button"
                    className="w-full  border-basic"
                  >
                    Cancel
                    {isSubmitting && (
                      <Loader2 className="ml-2 h-4 w-4 animate-spin" />
                    )}
                  </Button>
                </SheetClose>
                <Button
                  disabled={isSubmitting}
                  type="submit"
                  className="w-full  mt-3"
                >
                  Create
                  {isSubmitting && (
                    <Loader2 className="ml-2 h-4 w-4 animate-spin" />
                  )}
                </Button>
              </div>
            </Form>
          </>
        )}
      </Formik>
    </div>
  );
};
export default FormTool;
