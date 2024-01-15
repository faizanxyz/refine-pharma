
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
});

const Boxcustom = styled(Button)({
  gap: '10px',
  borderRadius: '3px',
});

const Boxtext = styled(Box)({
  display: 'flex',
  justifyContent: 'center', 
  alignItems: 'center',
  marginRight: '20px',
  marginTop: '60px',
});

const Boxtextsec = styled(Box)({
  marginTop: '20px',
  marginRight: '20px',
  display: 'flex',
  justifyContent: 'center',
  gap: '30px',
  alignItems: 'center',
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
      <Boxhead>
        <Typography variant="h3" style={{ fontSize: '20px', paddingLeft: '20px' }}>
          Search
        </Typography>

        <Boxcustom>
          <Button variant="outlined" size="small" sx={{ color: 'gray', borderColor: '#CFD8E3', fontSize: '12px' }}>
            Reset
          </Button>
          <Button variant="outlined" size="small" sx={{ color: 'gray', borderColor: '#CFD8E3', fontSize: '12px' }}>
            Hide
          </Button>
        </Boxcustom>
      </Boxhead>
      <Boxtext>
      <SelectField optionsData={options}/>
        <Box>
          <UseFormControl label="Website Order ID:" />
        </Box>
        <Box>
          <UseFormControl label="Order Number:" />
        </Box>
      </Boxtext>
      <Boxtextsec>
       <SelectField optionsData={options} />
       <SelectField optionsData={options}/>
        <Box>
          <UseFormControl label="Customer Name:" />
        </Box>
      </Boxtextsec>
    </>
  );
}

export default Order;