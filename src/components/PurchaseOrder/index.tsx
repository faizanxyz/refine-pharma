import { Box, styled } from '@mui/system';
import Typography from '@mui/material/Typography';
import SelectField from '../SelectField';

import { Button, FormControl, Radio, RadioGroup, FormLabel } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useEffect, useState } from 'react';
import DataTables from '../DataTable/Datatablee';

const options = [
  { value: 'All', label: 'All' },
  { value: 'Pending', label: 'Pending' },
  { value: 'Dispensed', label: 'Dispensed' },
  { value: 'Cancelled', label: 'Cancelled' }, // Corrected spelling
];

const Boxhead = styled(Box)({
  borderBottom: '1px solid lightgray',
  paddingLeft: '20px',
  paddingRight: '20px',
  marginLeft: '20px',
  marginRight: '20px',
  color: 'black',
});

const Boxpatients = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '20px',
 paddingTop:'20px',
  paddingLeft: '28px',
  paddingRight: '20px',
});

const BoxButton = styled(Box)({
  display: 'flex',
  justifyContent: 'end',
 
  

 
});


const  Boxpurchase = styled(Box)({
  backgroundColor:'white',
  paddingTop:'10px',
  paddingBottom:'30px',
  borderRadius:'6px',
  marginTop:'15px'

})

const Boxicon = styled(Box)({
  color:'blue',
  


})

const Boximg = styled(Box)({
display:'flex',
alignItems:'center',
borderBottom:'1px solid lightgray',
paddingBottom:'7px',
gap:'4px'
})
interface CustomEventType {
  value: string;
  label: string;
}

function PurchaseOrderFilter() {

  const token = localStorage.getItem('token')
  const [purchaseOrder,setpurchaseOrder] = useState()

  useEffect(() => {
    const fetchData = async () => {
        try {
            const url = 'https://refineims.maxenius.com/revamp/api/purchase_order/';

            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
            });

            if (response.ok) {
                const result = await response.json();
                setpurchaseOrder(result)
                
            } else {
                console.error('Failed to fetch data:', response.status, response.statusText);
            }
        } catch (error) {
            console.error('Error during data fetch:', error);
        }
    };

    fetchData(); // Call the fetchData function when the component mounts
}, [token]);
console.log(purchaseOrder);

const handelOrderFilter = (event:CustomEventType | null)=>{
  console.log(event);
  
}

  return (
    <>
    <Boximg>
   <Boxicon>
<img src="/assets/icons/purchaseOrder.svg" alt="" />

    </Boxicon> 

<Typography variant='h3' sx={{fontSize:'16px',fontWeight:'700'}}>
Purchase Order Filter
</Typography>
</Boximg>

      <BoxButton>
        <Button sx={{marginTop:'20px',backgroundColor:'#585CE4'}} size="small" variant="contained">
          Create Purchase Order
        </Button>
      </BoxButton>
      <Boxpurchase >
      <Boxhead>
        <Typography variant="h3" sx={{ fontSize: '20px',padding:'4px',fontWeight:'500' }}>
          Search
        </Typography>
      </Boxhead>
      <FormControl sx={{paddingLeft:'36px',paddingTop:'17px'}}>
      <FormLabel id="demo-row-radio-buttons-group-label">Status:</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="Pending" />
        <FormControlLabel value="male" control={<Radio />} label="Open" />
        <FormControlLabel value="other" control={<Radio />} label="Partial" />
        <FormControlLabel value="other" control={<Radio />} label="Delieverd" />
        
      </RadioGroup>
    </FormControl>
      <Boxpatients>
        <Box sx={{ width: '25%' }}>
          <SelectField options={options} label='Website :' handleSelect={(data:CustomEventType | null)=>handelOrderFilter(data)}/>
        </Box>
       
        <Box sx={{ width: '25%' }}>
  <SelectField options={options} label='Website :' handleSelect={(data:CustomEventType | null)=>handelOrderFilter(data)}/>
</Box>     
      </Boxpatients>
      </Boxpurchase>
      <DataTables/>
    </>
  );
}

export default PurchaseOrderFilter;
