import { Box } from '@mui/system';
import Select from 'react-select';


interface Option {
  value: string;
  label: string;
}

interface SelectFieldProps {
  optionsData: Option[];
}

function SelectField({optionsData}: SelectFieldProps){

    const options = optionsData

return(
    <Box>
    <label htmlFor="mySelect" style={{ paddingLeft: '10px', color: '#848485', 
fontSize: '16px', fontWeight: '400', }}>
      Website :
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
      onChange={(selectedOption) => console.log('Selected Option:', 
selectedOption)}
      options={options}
      styles={{
        control: (provided) => ({
          ...provided,
          height: '35px', 
          fontSize: '16px', 
          width:'325px',
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