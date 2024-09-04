import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../components/ui/table";
import { MdModeEdit } from "react-icons/md";
import { RiDeleteBin5Line } from "react-icons/ri";
import SweetAlert2 from "react-sweetalert2";
import { useDeleteContactMutation } from "../../../store/services/endpoints/contact.endpoint";
import { SheetTrigger } from "../../../components/ui/sheet";

const TableTool = ({ data, handleEdit }) => {
  const [fun, { isError, isLoading }] = useDeleteContactMutation();
  const handleDelete = (id) => {
    setSwalProps({
      show: true,

      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      confirmButtonColor: "#F03434",
      cancelButtonText: "No, cancel!",
      onResolve: () => {
        setSwalProps({
          show: false,
        });
      },
      onConfirm: async () => {
        await fun(id);

        setSwalProps({
          show: false,
        });
      },
    });
  };
  const [swalProps, setSwalProps] = useState({});
  return (
    <div>
      <Table className="mt-5">
        <TableHeader className="bg-gray-900  ">
          <TableRow className=" ">
            <TableHead className="rounded-l-xl text-white">No</TableHead>
            <TableHead className="text-white">Name</TableHead>
            <TableHead className="text-white">Email</TableHead>
            <TableHead className=" text-white">Phone</TableHead>
            <TableHead className="text-white">Address</TableHead>
            <TableHead className="rounded-r-xl text-white">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((i, index) => (
            <TableRow className="font-semibold" key={i.id}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{i.name}</TableCell>
              <TableCell>{i.email}</TableCell>
              <TableCell>{i.phone}</TableCell>
              <TableCell>{i.address}</TableCell>
              <TableCell className="text-2xl">
                <SheetTrigger>
                  <button
                    onClick={handleEdit.bind(null, i.id)}
                    className="mr-2 hover:bg-slate-200 p-2 rounded-lg"
                  >
                    <MdModeEdit />
                  </button>
                </SheetTrigger>
                <button
                  className=" hover:bg-slate-200 p-2 rounded-lg"
                  onClick={handleDelete.bind(null, i.id)}
                >
                  <RiDeleteBin5Line className="text-red-500" />
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <SweetAlert2 {...swalProps} />
      </Table>
    </div>
  );
};

export default TableTool;
