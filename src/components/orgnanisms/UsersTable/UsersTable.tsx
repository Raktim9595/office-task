import { useReactTable, ColumnDef, getCoreRowModel, flexRender, getSortedRowModel, SortingState, } from "@tanstack/react-table";
import { useState } from "react";

import "./UsersTable.css";

interface UserTableProps<T extends Object> {
  data: T[];
  columns: ColumnDef<T>[];
}

const UsersTable = <T extends Object>({
  data,
  columns,
}: UserTableProps<T>) => {
  const [sorting, setSorting] = useState<SortingState>([]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting: sorting,
    },
    onSortingChange: setSorting,
  })

  return (
    <div className="users__table__wrapper">
      <table>
        <thead className="users__table__header">
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th key={header.id} onClick={header.column.getToggleSortingHandler()} className="table__row--heading">
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                  {{
                    asc: " 🔼",
                    desc: " 🔽",
                  }[header.column.getIsSorted() as string] ?? null}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map(row => (
            <tr key={row.id} className="users__table__row">
              {row.getVisibleCells().map(cell => (
                <td key={cell.id} className="users__table__data">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default UsersTable;