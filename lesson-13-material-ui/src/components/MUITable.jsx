import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function MUITable() {
  const rows = [
    { id: 1, firstName: "Ross", lastName: "Geller", age: 32 },
    { id: 2, firstName: "Chandler", lastName: "Bing", age: 30 },
    { id: 3, firstName: "Joey", lastName: "Tribiany", age: 29 },
    { id: 4, firstName: "Rachel", lastName: "Green", age: 28 },
  ];

  return (
    <div>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>NAME</TableCell>
            <TableCell>LAST NAME</TableCell>
            <TableCell>AGE</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.firstName}</TableCell>
              <TableCell>{row.lastName}</TableCell>
              <TableCell>{row.age}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default MUITable;
