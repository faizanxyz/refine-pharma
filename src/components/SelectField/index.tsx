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
    <Box sx={{width:'100%'}}>
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
      name='website'
      defaultValue={options[0]}
<<<<<<< Updated upstream
      onChange={(selectedOption) => console.log('Selected Option:', 
selectedOption)}
=======
      onChange={(e)=>handleSelect(e)}
>>>>>>> Stashed changes
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