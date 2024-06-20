import React from "react";
import NavComponents from "../../components/nav/Nav.components";
import { FaPlus } from "react-icons/fa6";

import EmptyComponents from "../../components/Empty.components";
import { Button } from "../../components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../../components/ui/sheet";

import AuthGuard from "../../components/guard/Auth.guard";
import FormTool from "./tool/Form.tool";
import { useGetQuery } from "../../store/services/endpoints/contact.endpoint";
const HomePage = () => {
  const { data } = useGetQuery();
  console.log(data.contacts.data);
  return (
    <AuthGuard>
      <Sheet>
        <div className="w-screen h-screen bg-[#FCFCFD]">
          <NavComponents />
          <div className="px-52 mx-auto">
            <div className="flex justify-end mb-5">
              <SheetTrigger>
                <Button className=" space-x-2 mt-5">
                  <FaPlus />
                  <p>Create Contact</p>
                </Button>
              </SheetTrigger>
            </div>
            <div className="border bg-white h-[600px] w-full mt-5 rounded flex flex-col justify-center item-center">
              <div className="mx-auto">
                <EmptyComponents />
              </div>
              <p className="text-center font-semibold text-lg text-gray-400">
                There is no list...
              </p>
            </div>
          </div>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Create Contact</SheetTitle>
            </SheetHeader>
            <FormTool />
            <SheetFooter>
              <SheetClose asChild>
                <Button type="submit">Save changes</Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </div>
      </Sheet>
    </AuthGuard>
  );
};

export default HomePage;
