import { Box } from '@mui/system';
import Select from 'react-select';


interface Option {
  value: string;
  label: string;
}

interface SelectFieldProps {
  options: Option[];
  label: string;
  handleSelect: (selectedOption: Option | null) => void;
}

function SelectField({options,label,handleSelect}: SelectFieldProps){

    

    

return(
    <Box sx={{width:'100%'}}>
    <label htmlFor="mySelect" style={{color: '#848485', 
fontSize: '16px', fontWeight: '400', }}>
      {label}
    </label>
    <Select
    
    theme={(theme) => ({
        ...theme,
        borderRadius: 0,
        
        colors: {
          ...theme.colors,
          primary25: 'hsl(0deg 0% 68.1%)',
          primary: 'hsl(0deg 0% 68.1%)',
        },
      })}
      id="mySelect"
      defaultValue={options[0]}
      onChange={handleSelect}
      options={options}
      styles={{
        control: (provided) => ({
          ...provided,
          height: '35px', 
          fontSize: '16px', 
          width:'100%',
          borderRadius:'6px'
          
        }),
        menu: (provided) => ({ 
            ...provided,
            color:'black',
           
        }), 
      }}
    />
  </Box>
   
)
} 
export default SelectField;