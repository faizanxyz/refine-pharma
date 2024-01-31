import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FullWidthTabs from '../Tabs';
import Edit from '../Edit';
import Delete from '../Delete';
const product = {
  productNumberName: 'RC5776425',
  edition: '2021 "Profile Edition" Pocket Directory',
  qtyReturned: 10,
  unitPrice: 120.00,
  shippingDate: '10/19/2023',
  totalPrice: 600.00,
};
function createData(name, value) {
  return { name, value };
}
const rows = [
  createData('Product Number Name', product.productNumberName),
  createData('Edition', product.edition),
  createData('Qty Returned', product.qtyReturned),
  createData('Unit Price', `$${product.unitPrice.toFixed(2)}`),
  createData('Shipping Date', product.shippingDate),
  createData('Total Price', `$${product.totalPrice.toFixed(2)}`),
];
export default function OrderDrawer({id}) {
  const [state, setState] = React.useState({
    right: false,
    opacity: -1,
  });
console.log(id);


  const handleChange = (event) => {
    // Your implementation here
    console.log(event.target.value); // Example: log the input value to the console
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const handleTabClick = (tabIndex) => {
    // Add any logic you want to perform when a tab is clicked
    // For now, you can just log the tab index
    console.log('Tab clicked:', tabIndex);
  };

  const list = (anchor) => (
    <Box
      sx={{
        width: 530,
        height: '700px', // Adjust the height as needed
        display: 'flex',
        flexDirection: 'column',
        padding: '16px', // Add padding for better spacing
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
    </Box> 

  );
  return (
     <Box>
      <Button sx={{gap:'10px'}} onClick={toggleDrawer('right', true)}>
        <Edit/> 
        <Delete/>        
      </Button>
      <SwipeableDrawer
        anchor="right"
        open={state.right}
        onClose={toggleDrawer('right', false)}
        onOpen={toggleDrawer('right', true)}
        sx={{
          '& .MuiDrawer-paper': {
            height: '80%',
            marginTop: '8%',
          },
        }}
      >
<Box sx={{paddingLeft:'20px',paddingRight:'20px',paddingTop:'20px'}}>
        <Typography variant='h3'sx={{fontSize:'16px',fontWeight:'bolder'}}>
         Order No: 1234
        </Typography>
        <Box sx={{border:'1px solid lightgrey',marginTop:'10px'}}>

        </Box>
        <Box sx={{display:'flex',gap:'15px'}}>
            <Box>
  {/* <Link to={'/mainPage/edit-order'}> */}
     <Button sx={{color:'black',border:'1px solid lightblue',fontWeight:'700',marginTop:'20px'}} variant="outlined">Edit Order</Button>
  {/* </Link> */}
   
      </Box>
      <Box>
      <Button sx={{color:'black',border:'1px solid lightblue',fontWeight:'700',marginTop:'20px'}} variant="outlined">Trash Order</Button>
      </Box>
      <Box>
      <Button sx={{color:'black',border:'1px solid lightblue',fontWeight:'700',marginTop:'20px'}} variant="outlined">Print invoice</Button>
      </Box>
      </Box>
      </Box>
      <Typography variant='h3'sx={{fontSize:'15px',fontWeight:'bold',marginTop:'30px',paddingLeft:'20px',paddingRight:'20px'}}>
         Order :
        </Typography>
        <Box sx={{border:'1px solid lightgrey',marginTop:'10px'}}>
        </Box>

<Box sx={{display:'flex',justifyContent:'space-between',marginTop:'20px',paddingLeft:'20px',paddingRight:'20px'}}>
      <Box >
      <Typography variant='h3'sx={{fontSize:'14px',fontWeight:'400',color:'#848585'}}>
        Order Number
        </Typography>
        <Typography variant='h3'sx={{fontSize:'14px',fontWeight:'bold',color:'black',paddingTop:'10px'}}>
       {id?.id}
        </Typography>
        </Box>
        <Box>
        <Typography variant='h3'sx={{fontSize:'14px',fontWeight:'400',color:'#848585'}}>
       Customer Number
        </Typography>
        <Typography variant='h3'sx={{fontSize:'14px',fontWeight:'700',color:'black',paddingTop:'10px'}}>
      {id?.customer}
        </Typography>
        </Box>
        <Box>
        <Typography variant='h3'sx={{fontSize:'14px',fontWeight:'400',color:'#848585'}}>
        invoiceing currency
        </Typography>
        <Typography variant='h3'sx={{fontSize:'14px',fontWeight:'700',color:'black',paddingTop:'10px'}}>
        {id?.currency}
        </Typography>
        </Box>
        <Box>
        <Typography variant='h3'sx={{fontSize:'14px',fontWeight:'400',color:'#848585'}}>
        shipment status
        </Typography>
        <Typography variant='h3'sx={{fontSize:'14px',fontWeight:'700',color:'red',paddingTop:'10px'}}>
        {id?.shipping_status}
        </Typography>
        </Box>
        </Box>

<Box sx={{display:'flex',gap:'40px',paddingLeft:'20px',paddingRight:'20px',paddingTop:'20px'}}>
        <Box sx={{marginTop:'15px'}}>
        <Typography variant='h3'sx={{fontSize:'14px',fontWeight:'400',color:'#848585'}}>
      Website Order ID:
        </Typography>
        <Typography variant='h3'sx={{fontSize:'14px',fontWeight:'700',color:'black',paddingTop:'10px'}}>
       {id?.website}
        </Typography>
        </Box>
        <Box sx={{marginTop:'15px'}}>
        <Typography variant='h3'sx={{fontSize:'14px',fontWeight:'400',color:'#848585'}}>
        Website Name:
        </Typography>
        <Typography variant='h3'sx={{fontSize:'14px',fontWeight:'700',color:'black',paddingTop:'10px'}}>
    Refine Staging
        </Typography>
        
        </Box>
        <Box sx={{marginTop:'15px'}}>
        <Typography variant='h3'sx={{fontSize:'14px',fontWeight:'400',color:'#848585'}}>
      Status:
        </Typography>
        <Typography variant='h3'sx={{fontSize:'14px',fontWeight:'400',color:'orange',paddingTop:'10px'}}>
    {id?.status}
        </Typography>
        </Box>
        </Box>
        <Typography variant='h3'sx={{paddingLeft:'20px',paddingRight:'20px',  fontSize:'15px',fontWeight:'bold',marginTop:'75px'}}>
         Product :
        </Typography>
        <Box sx={{border:'1px solid lightgrey',marginTop:'5px'}}>
        </Box>


<Box sx={{display:'flex',gap:'15px',paddingLeft:'20px',paddingRight:'20px'}}>
        <Typography variant='h3'sx={{fontSize:'13px',fontWeight:'bold',marginTop:'15px'}}>
         Product Number
        </Typography>
        <Typography variant='h3'sx={{fontSize:'12px',fontWeight:'bold',marginTop:'15px'}}>
        Name
        </Typography>
        <Typography variant='h3'sx={{fontSize:'12px',fontWeight:'bold',marginTop:'15px'}}>
        Qty
        </Typography>
        <Typography variant='h3'sx={{fontSize:'12px',fontWeight:'bold',marginTop:'15px'}}>
         Returned
        </Typography>
        <Typography variant='h3'sx={{fontSize:'12px',fontWeight:'bold',marginTop:'15px'}}>
        Unit price
        </Typography>
        <Typography variant='h3'sx={{fontSize:'12px',fontWeight:'bold',marginTop:'15px'}}>
         Shiping Date
        </Typography>
        <Typography variant='h3'sx={{fontSize:'12px',fontWeight:'bold',marginTop:'15px'}}>
         Total Price
        </Typography>
        </Box>
        <Box sx={{border:'1px solid lightgrey',marginTop:'10px'}}>
        </Box>

<Box sx={{display:'flex',gap:'25px',paddingTop:'35px',paddingLeft:'20px',paddingRight:'20px'}}>
            <Typography variant='h3'sx={{fontSize:'12px',fontWeight:'400'}}>
                Rc787654
            </Typography>
            <Typography variant='h3'sx={{fontSize:'12px',fontWeight:'400'}}>
               2021 profile
            </Typography>
            <Typography variant='h3'sx={{fontSize:'12px',fontWeight:'400'}}>
                0
            </Typography>
            <Typography variant='h3'sx={{fontSize:'12px',fontWeight:'400'}}>
                $120.00
            </Typography>
            <Typography variant='h3'sx={{fontSize:'12px',fontWeight:'400'}}>
            $620.00
            </Typography>
            <Typography variant='h3'sx={{fontSize:'12px',fontWeight:'400'}}>
                10/19/2023
            </Typography>
            <Typography variant='h3'sx={{fontSize:'12px',fontWeight:'400'}}>
            $620.00
            </Typography>  
        </Box>
        <Box sx={{border:'1px solid lightgrey',marginTop:'10px'}}>
        </Box>
  <Box sx={{display:'flex',gap:'60px',alignItems:'center',paddingLeft:'20px',paddingRight:'20px'}}>
    <Box>
<Typography variant='h6' sx={{fontSize:'12px',fontWeight:'bold'}}>
${id?.discount_tax}
</Typography>
</Box>
<Typography variant='h6' sx={{fontSize:'12px',fontWeight:'bolder',color:'green'}}>
${id?.discount_total}
</Typography>
<Typography variant='h6' sx={{fontSize:'12px',fontWeight:'bold'}}>
${id?.total_amount}
</Typography>

<Box><Button sx={{backgroundColor:'#6B6FE6',height:'36px',marginTop:'20px',borderRadius:'5px'}} variant="contained">Net Total ${id?.total_amount}</Button></Box>
</Box>
<Box sx={{display:'flex',gap:'30px',alignItems:'center',paddingLeft:'20px',paddingRight:'20px'}}>
    <Box>
<Typography variant='h6' sx={{fontSize:'12px',fontWeight:'bold'}}>
    item subtotal    
</Typography>
</Box>
<Typography variant='h6' sx={{fontSize:'12px',fontWeight:'bolder'}}>
       Discount
</Typography>
<Typography variant='h6' sx={{fontSize:'12px',fontWeight:'bold'}}>
      insurance fee
</Typography>
</Box>
        <Box sx={{display:'flex',gap:'65px',alignItems:'center',paddingLeft:'20px',paddingRight:'20px'}}>
<Typography variant='h6' sx={{fontSize:'12px',fontWeight:'bold'}}>
        ${id?.discount_tax}
</Typography>
<Typography variant='h6' sx={{fontSize:'12px',fontWeight:'bolder'}}>
${id?.discount_total}
</Typography>
<Typography variant='h6' sx={{fontSize:'12px',fontWeight:'bold'}}>
        ${id?.total_amount}
</Typography>

<Box><Button sx={{backgroundColor:'black',height:'36px',marginTop:'20px',borderRadius:'5px'}} variant="contained">Net Total $155.00</Button></Box>
</Box> 

<Box sx={{display:'flex',gap:'70px',alignItems:'center',paddingLeft:'20px',paddingRight:'20px'}}>
    <Box>
<Typography variant='h6' sx={{fontSize:'12px',fontWeight:'bold'}}>
   Shoping   
</Typography>
</Box>
<Typography variant='h6' sx={{fontSize:'15px',fontWeight:'bolder'}}>
       vat
</Typography>
<Typography variant='h6' sx={{fontSize:'12px',fontWeight:'bold'}}>
      Paid
</Typography>
</Box>
<Box sx={{paddingLeft:'20px',paddingRight:'20px',paddingTop:'20px'}}>
        <FullWidthTabs onTabClick={handleTabClick} />
        </Box>

        <Box sx={{display:'flex',gap:'40px',paddingTop:'14px',paddingLeft:'20px',paddingRight:'20px'}}>
            <Typography variant='h3'sx={{fontSize:'12px',fontWeight:'400'}}>
                Date
            </Typography>
            <Typography variant='h3'sx={{fontSize:'12px',fontWeight:'400'}}>
               Method
            </Typography>
            <Typography variant='h3'sx={{fontSize:'12px',fontWeight:'400'}}>
                TranscationID:
            </Typography>
            <Typography variant='h3'sx={{fontSize:'12px',fontWeight:'400'}}>
               Paid
            </Typography>
            <Typography variant='h3'sx={{fontSize:'12px',fontWeight:'400'}}>
            Refunded
            </Typography>
            <Typography variant='h3'sx={{fontSize:'12px',fontWeight:'400'}}>
                status
            </Typography>
             
        </Box>
        <Box sx={{display:'flex',gap:'50px',paddingTop:'14px',paddingLeft:'20px',paddingRight:'20px',paddingBottom:'50px'}}>
            <Typography variant='h3'sx={{fontSize:'12px',fontWeight:'400'}}>
               15/8/2023
            </Typography>
            <Typography variant='h3'sx={{fontSize:'12px',fontWeight:'400'}}>
              Offline
            </Typography>
            <Typography variant='h3'sx={{fontSize:'12px',fontWeight:'400'}}>
                ----
            </Typography>
            <Typography variant='h3'sx={{fontSize:'12px',fontWeight:'400'}}>
                $450.00
            </Typography>
            <Typography variant='h3'sx={{fontSize:'12px',fontWeight:'400'}}>
            No
            </Typography>
            <Typography variant='h3'sx={{fontSize:'12px',fontWeight:'bold',border:'1px solid orange',color:'orange',backgroundColor:'lightpink',borderRadius:'3px',padding:'3px'}}>
                Processing
            </Typography>
            
        </Box>

      </SwipeableDrawer>
    </Box>
  );
}
