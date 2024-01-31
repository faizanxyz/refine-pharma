import { Box, styled } from '@mui/system';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import UseFormControl from '../CustomInput/input';
import SelectField from '../SelectField';
import OrderResult from '../OrderResult';
import { useEffect, useState } from 'react';

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
    
  { value: 'All', label: 'All' },
  { value: 'Pending', label: 'Pending' },
  { value: 'Dispensed', label: 'Dispensed' },
  { value: 'Canceiled', label: 'Cancelled' },
];

interface CustomEventType {
  value: string;
  label: string;
}


function Order() {
  const token = localStorage.getItem('token')
  const [orders,setOrder] = useState()
  const handelOrderFilter = (event:CustomEventType | null)=>{
      console.log(event);
      
  }

  useEffect(() => {
    const fetchData = async () => {
        try {
            const url = 'https://refineims.maxenius.com/revamp/api/order/';

            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
            });

            if (response.ok) {
                const result = await response.json();
                setOrder(result)
                
            } else {
                console.error('Failed to fetch data:', response.status, response.statusText);
            }
        } catch (error) {
            console.error('Error during data fetch:', error);
        }
    };

    fetchData(); // Call the fetchData function when the component mounts
}, [token]);

console.log(orders);

  return (
    <>
    <Boximg>
   <Box sx={{color:'blue'}}>
     <img src="/assets/icons/order.svg" alt="" />
   </Box>
   <Typography variant="h3" sx={{ fontSize: '16px', fontWeight: '700' }}>
      Order
   </Typography>
 </Boximg>
        <Box sx={{backgroundColor:'white',borderRadius:'5px'}}>
          <Boxhead>
        <Typography variant="h3" sx={{ fontSize: '20px'}}>
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
      
      <Box sx={{width:'100%'}}><SelectField options={options} label='Website :' handleSelect={(data:CustomEventType | null)=>handelOrderFilter(data)}/></Box>
      <Box sx={{width:'100%'}}><UseFormControl label='Website Order ID :'/></Box>
      <Box sx={{width:'100%'}}><UseFormControl label='Order number :'/></Box>
      </Box>

      <Box sx={{display:'flex',columnGap:'15px'}}>
      <Box sx={{width:'100%'}}><SelectField options={options} label='Status :' handleSelect={(data:CustomEventType | null)=>handelOrderFilter(data)}/></Box>
      <Box sx={{width:'100%'}}><SelectField options={options} label='Shipment Status :' handleSelect={(data:CustomEventType | null)=>handelOrderFilter(data)}/></Box>
      <Box sx={{width:'100%'}}><UseFormControl label='Customer name :'/></Box>
      </Box>
      </Box>
      </Box>
      
      <Box>
        <OrderResult />
      </Box>
    </>
  );
}

export default Order;