import React, { useEffect } from "react";
import {
  CardContent,
  CardDescription,
  Card,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Formik, Form, ErrorMessage } from "formik";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import * as yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { Loader2 } from "lucide-react";
import { useSignUpMutation } from "../../store/services/endpoints/auth.edpoints";
import { Toast } from "@radix-ui/react-toast";
import { useToast } from "@/components/ui/use-toast";
import AuthGuard from "../../components/guard/Auth.guard";

const SignUpPage = () => {
  const nav = useNavigate();
  const validateSchema = yup.object({
    name: yup.string().required("Name is required"),
    email: yup
      .string()
      .required("Email is required!")
      .email("Invalid Email Address!"),
    password: yup
      .string()
      .required("Password is required!")
      .min(8, "Password must be at least 8 digits"),
    password_confirmation: yup
      .string()
      .required("confirmPassword is required!")
      .oneOf(
        [yup.ref("password"), null],
        "Password and confirmed password must be same!"
      ),
  });
  const initialValue = {
    email: "",
    name: "",
    password: "",
    password_confirmation: "",
  };

  const [fun, data] = useSignUpMutation();
  const handleSubmit = async (value) => {
    await fun(value);
  };

  const { toast } = useToast();

  useEffect(
    (params) => {
      if (data.error) {
        toast({
          title: "Auth Error from server",
          description: data.error.data.message,
        });
      } else if (data.data) {
        nav("/home");
      }
    },
    [data]
  );
  return (
    <AuthGuard>
      <div className="w-3/5 mx-auto  h-full flex justify-center items-center">
        <Card className="basis-2/4 p-5">
          <CardHeader className="flex flex-row justify-between mb-5">
            <CardTitle>Sign Up</CardTitle>
          </CardHeader>
          <CardContent>
            <Formik
              validationSchema={validateSchema}
              initialValues={initialValue}
              onSubmit={handleSubmit}
              validateOnBlur={false}
              validateOnChange={false}
            >
              {({ handleBlur, handleChange, values, isSubmitting }) => (
                <>
                  <Form className="flex flex-col gap-4">
                    <Label htmlFor="email">Name</Label>
                    <Input
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name}
                      type="text"
                      id="name"
                      name="name"
                    />
                    <ErrorMessage
                      component={"p"}
                      className="text-red-500 text-sm"
                      name="name"
                    />
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                      type="email"
                      id="email"
                      name="email"
                    />
                    <ErrorMessage
                      component={"p"}
                      className="text-red-500 text-sm"
                      name="email"
                    />
                    <Label htmlFor="password">Password </Label>
                    <Input
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                      type="password"
                      id="password"
                      name="password"
                    />
                    <ErrorMessage
                      component={"p"}
                      className="text-red-500 text-sm"
                      name="password"
                    />
                    <Label htmlFor="password_confirmation">
                      Confirm Your Password{" "}
                    </Label>
                    <Input
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password_confirmation}
                      type="password"
                      id="password_confirmation"
                      name="password_confirmation"
                    />
                    <ErrorMessage
                      component={"p"}
                      className="text-red-500 text-sm"
                      name="password_confirmation"
                    />
                    <CardFooter className="text-main text-sm font-bold hover:text-blue-600 cursor-pointer">
                      <Link to={"/"}>
                        Already have an account?{" "}
                        <span className="underline"> Click here.</span>
                      </Link>
                    </CardFooter>
                    <Button
                      disabled={isSubmitting}
                      type="submit"
                      className="w-full  mt-3"
                    >
                      {isSubmitting ? (
                        <Loader2 className="ml-2 h-4 w-4 animate-spin" />
                      ) : (
                        "Sign Up "
                      )}
                    </Button>
                  </Form>
                </>
              )}
            </Formik>
          </CardContent>
        </Card>
      </div>
    </AuthGuard>
  );
};

export default SignUpPage;
