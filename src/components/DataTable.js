import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';


const columns = [
  { id: 'country_name', label: 'Region', minWidth: 100 },
  { id: 'cases', label: 'Cases', minWidth: 100 },
  {
    id: 'deaths',
    label: 'Death',
    minWidth: 100,
    align: 'right',
    format: (value) => value.toLocaleString(),
  },
  {
    id: 'total_recovered',
    label: 'Recovered',
    minWidth: 100,
    align: 'right',
    format: (value) => value.toLocaleString(),
  },
];

const useStyles = makeStyles({
  root: {
    width: '100%',
    height: '100%',
  },
  container: {
    maxHeight: '50vh',
  },
  table: {
    fontSize: 11
  }
});

function DataTable({ data, updateDataDetails }) {
  const rows = data;
  // console.log(props.data);
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const rowClickHandler = (event, data) => {
    console.log('row Clicked', data);
    updateDataDetails(data);
  }

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table className={classes.table} stickyHeader aria-label="sticky table" size="small">
          <TableHead>
            <TableRow  >
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
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, i) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={i}
                  onClick={(event) => rowClickHandler(event, row)}
                >
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
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
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}

export default DataTable
