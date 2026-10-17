import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";
import React, { useState } from "react";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { Tooltip, Button } from "@mui/material";
import Modal from "./Modal";

function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton onClick={(e) => onPageChange(e, 0)} disabled={page === 0}>
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>

      <IconButton
        onClick={(e) => onPageChange(e, page - 1)}
        disabled={page === 0}
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>

      <IconButton
        onClick={(e) => onPageChange(e, page + 1)}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>

      <IconButton
        onClick={(e) =>
          onPageChange(e, Math.max(0, Math.ceil(count / rowsPerPage) - 1))
        }
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

const App = () => {
  const [data, setData] = useState([
    {
      id: 1,
      name: "Fasehuddin",
      age: "19",
      status: false,
    },
    {
      id: 2,
      name: "Muhammad",
      age: 16,
      status: false,
    },
  ]);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [openAdd, setOpenAdd] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [elemEdit, setElemEdit] = useState(null);

  const handleSubmitAdd = (event) => {
    event.preventDefault();

    const newUser = {
      id: Date.now(),
      name: event.target.name.value,
      age: event.target.age.value,
      status: false,
    };

    setData((prev) => [...prev, newUser]);
    setOpenAdd(false);
  };

  const handleSubmitEdit = (event) => {
    event.preventDefault();

    setData((prev) =>
      prev.map((e) => (e.id === elemEdit.id ? elemEdit : e))
    );

    setOpenEdit(false);
  };

  const handleDelete = (id) => {
    setData((prev) => prev.filter((e) => e.id !== id));
  };

  const handleEdit = (e) => {
    setOpenEdit(true);
    setElemEdit({ ...e });
  };

  const handleStatus = (id) => {
    setData((prev) =>
      prev.map((e) =>
        e.id === id ? { ...e, status: !e.status } : e
      )
    );
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div>
      <Button variant="contained" onClick={() => setOpenAdd(true)}>
        Add+
      </Button>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
          <TableBody>
            {(rowsPerPage > 0
              ? data.slice(
                  page * rowsPerPage,
                  page * rowsPerPage + rowsPerPage
                )
              : data
            ).map((row) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>

                <TableCell align="right">{row.age}</TableCell>

                <TableCell align="right">
                  {row.status ? "Active" : "Inactive"}
                </TableCell>

                <TableCell align="right">
                  <Button onClick={() => handleEdit(row)}>Edit</Button>

                  <Tooltip title="Delete">
                    <IconButton onClick={() => handleDelete(row.id)}>
                      <DeleteForeverIcon />
                    </IconButton>
                  </Tooltip>

                  <input
                    type="checkbox"
                    checked={row.status}
                    onChange={() => handleStatus(row.id)}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>

          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[
                  5,
                  10,
                  25,
                  { label: "All", value: -1 },
                ]}
                colSpan={4}
                count={data.length}
                rowsPerPage={rowsPerPage}
                page={page}
                slotProps={{
                  select: {
                    inputProps: {
                      "aria-label": "rows per page",
                    },
                    native: true,
                  },
                }}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>

      <Modal open={openAdd} setOpen={setOpenAdd} title="Add">
        <form
          onSubmit={handleSubmitAdd}
          style={{
            display: "grid",
            width: "50%",
            margin: "0 auto",
            gap: "10px",
          }}
        >
          <input name="name" placeholder="name" type="text" required />
          <input name="age" placeholder="age" type="number" required />

          <Button variant="outlined" type="submit">
            Save
          </Button>
        </form>
      </Modal>

      <Modal open={openEdit} setOpen={setOpenEdit} title="Edit">
        <form
          onSubmit={handleSubmitEdit}
          style={{
            display: "grid",
            width: "50%",
            margin: "0 auto",
            gap: "10px",
          }}
        >
          <input
            value={elemEdit?.name || ""}
            onChange={(e) =>
              setElemEdit((prev) => ({ ...prev, name: e.target.value }))
            }
            name="name"
            placeholder="name"
            type="text"
            required
          />

          <input
            value={elemEdit?.age || ""}
            onChange={(e) =>
              setElemEdit((prev) => ({ ...prev, age: e.target.value }))
            }
            name="age"
            placeholder="age"
            type="number"
            required
          />

          <Button variant="outlined" type="submit">
            Save
          </Button>
        </form>
      </Modal>
    </div>
  );
};

export default App;