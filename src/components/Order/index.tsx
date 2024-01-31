
import { Box, styled } from '@mui/system';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import UseFormControl from '../CustomInput/input';
import SelectField from '../SelectField';
<<<<<<< Updated upstream
import OrderResult from '../OrderResult';
=======
import DataTableComponent from "../DataTable/Datatablee";
import useOrders from '../Hooks/useOrders';
import Delete from '../Delete';

>>>>>>> Stashed changes

const Boxhead = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderBottom: '1px solid #CFD8E3',
  width:'100%',
  padding:'8px 24px'
  
});

const Boxcustom = styled(Button)({
  gap: '10px',
  borderRadius: '3px',
  
});

<<<<<<< Updated upstream

function Order() {
  const options = [ 
    
    { value: 'All', label: 'All' },
    { value: 'Pending', label: 'Pending' },
    { value: 'Dispensed', label: 'Dispensed' },
    { value: 'Canceiled', label: 'Cancelled' },
  ];
=======
const Boximg = styled(Box)({
  display:'flex',
  gap:'6px',
  alignItems:'center',
  borderBottom:'1px solid lightgray',
  paddingTop:'7px',
  paddingBottom:'7px',
  margin:'auto',
  marginBottom:'10px'
  
   
 })

 const options = [ 
    
  { value: 'website', label: 'All' },
  { value: 'website', label: 'Pending' },
  { value: 'website', label: 'Dispensed' },
  { value: 'wibsite', label: 'Cancelled' },
];

interface CustomEventType {
  value: string;
  label: string;
}


function Order() {
  const { orders, isLoading, isError, error } = useOrders();

  const handelOrderFilter = (event:CustomEventType | null)=>{
      console.log(event);
      
  }
  // Columns for DataTableComponent
  const columns = [
    {
      name: 'Customer Name:',
      selector: (row) => row.id,
    },
    {
      name: 'Website Order:',
      selector: (row) => row.website_order_id
    },
    {
      name: 'Website ',
      selector: (row) => row.price,
    },
    {
      name: 'Order Date',
      selector: (row) => row.order_date,
    },
    {
      name: 'Order Number',
      selector: (row) => row.type,
    },
    {
      name: 'Status',
      selector: (row) => row.Status,
    },
    {
      name: 'Shippment Status',
      selector: (row) => row.shiping_status,
    },
    {
      name: 'Action',
      selector: (row) => <Delete/>
    },
   
  ];
  console.log(orders)
  const data = orders?.results?.map((row) => ({
    id: row.id,
    website_order_id: row.website_order_id,
    price: row.cart_tax,
    order_date: row.order_date,
    Status: row.status,
    shiping_status: row.shipping_status,
    
    
  })) || [];
>>>>>>> Stashed changes
  return (
    <>
        <Box sx={{backgroundColor:'white',borderRadius:'5px'}}>
          <Boxhead>
        <Typography variant="h3" style={{ fontSize: '20px'}}>
          Search
        </Typography>

        <Boxcustom>
          <Button variant="outlined" size="small" sx={{ color: 'gray', borderColor: 
'#CFD8E3', fontSize: '12px',borderRadius:'5px',height:'25px' }}>
            Reset
          </Button>
          <Button  variant="outlined" size="small" sx={{ color: 'gray', borderColor: 
'#CFD8E3', fontSize: '12px',borderRadius:'5px',height:'25px' }}>
            Hide
          </Button>
        </Boxcustom>
      </Boxhead>

      <Box sx={{display:'flex',flexDirection:'column',gap:'20px',p:'30px'}}>
      <Box sx={{display:'flex',columnGap:'15px'}}>
<<<<<<< Updated upstream
      <Box sx={{width:'100%'}}><SelectField optionsData={options}/></Box>
      <Box sx={{width:'100%'}}><UseFormControl label='data1'/></Box>
      <Box sx={{width:'100%'}}><UseFormControl label='data1'/></Box>
=======
      
      <Box sx={{width:'100%'}}><SelectField options={options} label='Website :' handleSelect={(data:CustomEventType | null)=>handelOrderFilter(data)}/></Box>
      <Box sx={{width:'100%'}}><UseFormControl label='Website Order ID :' handleSelect={(data:CustomEventType | null)=>handelOrderFilter(data)}/></Box>
      <Box sx={{width:'100%'}}><UseFormControl label='Order number :'/></Box>
>>>>>>> Stashed changes
      </Box>

      <Box sx={{display:'flex',columnGap:'15px'}}>
      <Box sx={{width:'100%'}}><SelectField optionsData={options}/></Box>
      <Box sx={{width:'100%'}}><SelectField optionsData={options}/></Box>
      <Box sx={{width:'100%'}}><UseFormControl label='data1'/></Box>
      </Box>
      </Box>
      </Box>
      
    <DataTableComponent data={data} columns={columns} />
   
    </>
  );
}

export default Order;