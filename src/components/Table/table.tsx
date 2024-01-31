
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect } from 'react';
import { useState } from 'react';
import OrderDrawer from '../OrderDrawer';
function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function BasicTable({orders}) {
  const [orderlist, setOrderList] = useState()
  useEffect(()=>{
    console.log(orders);
    setOrderList(orders)
  },[orders])
  
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Customer Name</TableCell>
            <TableCell align="right">Website Order Id</TableCell>
            <TableCell align="right">Webite</TableCell>
            <TableCell align="right">Order date</TableCell>
            <TableCell align="right">Order No.</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">Shipment Status</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orderlist?.results?.map((row) => (
            <TableRow
              key={row?.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row?.customer}
              </TableCell>
              <TableCell align="right">{row?.website}</TableCell>
              <TableCell align="right">{row?.website?.title}</TableCell>
              <TableCell align="right">{row?.order_date}</TableCell>
              <TableCell align="right">{row?.number}</TableCell>
              <TableCell align="right">{row?.status}</TableCell>
              <TableCell align="right">{row?.shipping_status}</TableCell>
              <TableCell align="right"><OrderDrawer id={row}/></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}