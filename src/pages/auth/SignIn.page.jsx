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
import { useSignInMutation } from "../../store/services/endpoints/auth.edpoints";
import AuthGuard from "../../components/guard/Auth.guard";

const SignInPage = () => {
  const nav = useNavigate();
  const validateSchema = yup.object({
    email: yup
      .string()
      .email("Invalid Email Address!")
      .required("Email is required!"),
    password: yup
      .string()
      .required("Password is required!")
      .min(8, "Password must be at least 8 digits"),
  });
  const initialValue = {
    email: "",
    password: "",
  };
  const [fun, data] = useSignInMutation();
  const handleSubmit = async (value) => {
    await fun(value);
  };
  useEffect(() => {
    if (data?.data?.success) {
      nav("/home");
    }
  }, [data]);

  return (
    <AuthGuard check={data?.data?.success} token={data?.data?.token}>
      <div className="w-3/5 mx-auto  h-full flex justify-center items-center">
        <Card className="basis-2/4 p-5">
          <CardHeader className="flex flex-row justify-between mb-5">
            <CardTitle>Sign In</CardTitle>
            <CardDescription className="text-main underline hover:text-blue-600">
              <Link to={"signup"}> I don't have a account.</Link>
            </CardDescription>
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
                    <Button
                      disabled={isSubmitting}
                      type="submit"
                      className="w-full  mt-3"
                    >
                      {isSubmitting ? (
                        <Loader2 className="ml-2 h-4 w-4 animate-spin" />
                      ) : (
                        "Sign In "
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

export default SignInPage;
