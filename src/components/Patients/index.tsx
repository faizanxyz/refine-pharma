import { Box, styled } from '@mui/system';
import Typography from '@mui/material/Typography';
import SelectField from '../SelectField';
import UseFormControl from '../CustomInput/input';


const options = [ 
    
  { value: 'All', label: 'All' },
  { value: 'Pending', label: 'Pending' },
  { value: 'Dispensed', label: 'Dispensed' },
  { value: 'Canceiled', label: 'Cancelled' },
];


const  Boxhead = styled(Box)({
  borderBottom:'1px solid lightgray',
  paddingLeft:'20px',
  paddingRight:'20px',
  marginLeft:'20px',
  marginRight:'20px',
  marginTop:'20px',
  padding:'10px',
  color:'black'

})
const  Boxpatients = styled(Box)({
 display:'flex',
 alignItems:'center',
 gap:'20px',
 paddingTop:'20px',
 paddingLeft:'20px',
 paddingRight:'20px',
})
const Boximg = styled(Box)({
display: 'flex',
alignItems: 'center',
borderBottom: '1px solid lightgray',
paddingBottom: '7px',
gap: '4px',
paddingLeft:'20px'
});
const Boxicon = styled(Box)({


})
const Boxback = styled(Box)({
backgroundColor:'white',
paddingTop:'3px',
paddingBottom:'20px',
marginTop:'20px',
borderRadius:'6px'

})
interface CustomEventType {
value: string;
label: string;
}
function Patients(){




    const handelOrderFilter = (event:CustomEventType | null)=>{
      console.log(event);
      
  }

    return(
        
        <>
       
        <Boximg>
  <Boxicon>
    <img src="/assets/icons/patientCardIcon.svg" alt="" />
  </Boxicon>
  <Typography variant="h3" sx={{ fontSize: '16px', fontWeight: '700' }}>
     Patients
  </Typography>
</Boximg>
<Boxback>
   <Boxhead>
<Typography variant="h3" style={{ fontSize: '20px'}}>
  Search
</Typography>
</Boxhead>
<Boxpatients>
<Box sx={{width:'25%'}}><SelectField options={options}  label='Status :' handleSelect={(data:CustomEventType | null)=>handelOrderFilter(data)}/></Box>
<Box sx={{width:'25%'}}><UseFormControl label='Name'/></Box>
</Boxpatients>
</Boxback>
        </>
    )
}
export default Patients;