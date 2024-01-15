
import { FormControl, InputLabel, OutlinedInput } from '@mui/material';

interface UseFormControlProps {
  label: string;
}

export default function UseFormControl({label}: UseFormControlProps) {
  return (
     <form noValidate autoComplete="off">
         <InputLabel htmlFor="my-input" sx={{fontSize:'16px',fontWeight:'400',color:'#848485'}}>{label}</InputLabel>
         <FormControl size='small' sx={{ width:'330px',backgroundColor:'white',borderRadius:'6px' }}>
           <OutlinedInput  id="my-input"  placeholder="#132" sx={{height:'39px',color:'black',fontWeight:'600',fontSize:'17px',}} />
         </FormControl>
       </form>
  );
}