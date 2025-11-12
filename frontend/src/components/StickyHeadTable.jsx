import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";

// Define columns
const columns = [
  { id: "username", label: "Username", minWidth: 150 },
  { id: "email", label: "Email", minWidth: 200 },
  {
    id: "savedNotes",
    label: "Saved Notes",
    minWidth: 150,
    align: "center",
  },
  {
    id: "status",
    label: "Status",
    minWidth: 120,
    align: "center",
  },
  {
    id: "actions",
    label: "Actions",
    minWidth: 150,
    align: "center",
  },
];

export default function StickyHeadTable(props) {
  const { users } = props;
  // console.log(users)

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="user table">
          <TableHead>
            <TableRow>
              <TableCell style={{ minWidth: 150, fontWeight: "bold" }}>
                Username
              </TableCell>
              <TableCell style={{ minWidth: 200, fontWeight: "bold" }}>
                Email
              </TableCell>
              <TableCell style={{ minWidth: 150, fontWeight: "bold" }}>
                Saved Notes
              </TableCell>
              <TableCell style={{ minWidth: 120, fontWeight: "bold" }}>
                Status
              </TableCell>
              <TableCell style={{ minWidth: 150, fontWeight: "bold" }}>
                Action
              </TableCell>
            </TableRow>
            {/* <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow> */}
          </TableHead>

          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.username}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.savedNotes || 0}</TableCell>
                <TableCell>{user.is_active ? "Active" : "Inactive"}</TableCell>
                <TableCell>
                  <Button variant="contained" size="small">
                    Edit
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableRow></TableRow>
        </Table>
      </TableContainer>

      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={users.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
