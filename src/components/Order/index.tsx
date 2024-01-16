
import { Box, styled } from '@mui/system';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import UseFormControl from '../CustomInput/input';
import SelectField from '../SelectField';

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


function Order() {
  const options = [ 
    
    { value: 'All', label: 'All' },
    { value: 'Pending', label: 'Pending' },
    { value: 'Dispensed', label: 'Dispensed' },
    { value: 'Canceiled', label: 'Cancelled' },
  ];
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
      <Box sx={{width:'100%'}}><SelectField optionsData={options}/></Box>
      <Box sx={{width:'100%'}}><UseFormControl label='data1'/></Box>
      <Box sx={{width:'100%'}}><UseFormControl label='data1'/></Box>
      </Box>

      <Box sx={{display:'flex',columnGap:'15px'}}>
      <Box sx={{width:'100%'}}><SelectField optionsData={options}/></Box>
      <Box sx={{width:'100%'}}><SelectField optionsData={options}/></Box>
      <Box sx={{width:'100%'}}><UseFormControl label='data1'/></Box>
      </Box>
      </Box>
      </Box>
      
    </>
  );
}

export default Order;