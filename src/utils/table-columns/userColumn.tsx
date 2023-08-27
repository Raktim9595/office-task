import { ColumnDef } from "@tanstack/react-table";

import { UserData } from "../../interfaces/tableInterfaces";
import UserDetails from "../../components/molecules/userDetails/UserDetails";

export const UserCols: ColumnDef<UserData>[] = [
  {
    header: "Id",
    cell: (row) => row.renderValue(),
    accessorKey: "id",
  }, {
    header: "Name",
    cell: ({ row }) => <UserDetails email={row.original.email} name={row.original.name} />,
    accessorKey: "name",
  }, {
    header: "Phone Number",
    cell: (row) => row.renderValue(),
    accessorKey: "phoneNumber",
  }
];