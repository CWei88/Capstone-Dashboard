import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

const columns = [
  { id: 'sentence', label: 'Sentence', minWidth: 250 },
  { id: 'categories', label: 'Categories', minWidth: 80 },
  {
    id: 'attribute',
    label: 'Attribute',
    minWidth: 150,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'additionalInfo',
    label: 'AdditionalInfo',
    minWidth: 150,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
];

function createData(sentence, categories, attribute, additionalInfo) {
  return { sentence, categories, attribute, additionalInfo };
}

const rows = [
  createData('sentence 1wd d wwwwwwww wwwwwwwwwwwwwwwwwwww wwwwwwwwwwwwwwwwwww wwwwwwww wwwwwwwwwww', '1', 'attribute herewwwwww wwwwwwwwwww wwwwwww wwwwwwwwww wwwwwwwwww wwwwwwww wwwwwwww', 'additional info hdwwww wwwwww wwwwwww wwwwwwww wwwwww wwwwww wwwww wwwwww were'),
  createData('sentence 2', '0', 'attribute here', 'additional info here'),
  createData('sentence 3', '3', 'attribute here', 'additional info here'),
  createData('sentence 4', '2', 'attribute here', 'additional info here'),
  createData('sentence 5', '3', 'attribute here', 'additional info here'),
  createData('sentence 6', '2', 'attribute here', 'additional info here'),
  createData('sentence 7', '3', 'attribute here', 'additional info here'),
  createData('sentence 8', '2', 'attribute here', 'additional info here'),
];

export default function StickyHeadTable() {
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
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
