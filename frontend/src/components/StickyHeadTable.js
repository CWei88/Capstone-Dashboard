import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';


export default function StickyHeadTable({Report}) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const columns = [
    {
      id: 'attribute',
      label: 'Attribute',
      width:"40%",
      align: 'left',
      format: (value) => value.toLocaleString('en-US'),
    },
    { 
      id: 'sentence', 
      label: 'Sentence', 
      width:"40%",
    },
    {
      id: 'additionalInfo',
      label: 'AdditionalInfo',
      width:"20%",
      align: 'left',
      format: (value) => value.toLocaleString('en-US'),
    },
  ];
  
  function createData(attribute, sentence, additionalInfo) {
    return { attribute, sentence, additionalInfo };
  }
  
  const rows = [
    createData('Have your Scope 1 - 2 & Scope 3 emissions been verified by a third party?', Report.emissionAmountVerifiedSentences, 'additional info here'),
    createData('Do you have an active program to support increasing green space and promote biodiversity?', Report.hasActiveProgramSentences, 'additional info here'),
    createData('Do you have a long term (20 30 years) net zero target/commitment?', Report.hasNetZeroGoalSentences, 'additional info here'),
    createData('What scenario has been utilised, and what methodology was applied?', Report.hasProtocolSentences, 'additional info here'),
    createData('Are your emission reduction targets externally verified/assured?', Report.emissionTargetVerifiedSentences, 'additional info here'),
    createData('Do you have a low carbon transition plan?', Report.hasTransitionPlanSentences, 'additional info here'),
    createData('Do you provide incentives to your senior leadership team for the management of climate related issues?', Report.hasLeadershipIncentiveSentences, 'additional info here'),
    createData('Does your transition plan include direct engagement with suppliers to drive them to reduce their emissions, or even switching to suppliers producing low carbon materials?', Report.hasSupplierEngagementSentences, 'additional info here'),
    createData('Do you engage with value chain on climate-related issues?', Report.valueChainEngagementSentences, 'additional info here'),

  ];

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ 
                    width: column.width, 
                  }}
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
