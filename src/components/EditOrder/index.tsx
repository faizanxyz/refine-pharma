
import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import { Box,styled, Typography,alpha } from '@mui/material';
import UseFormControl from '../CustomInput/input';
import SelectField from '../SelectField';
import Button from '@mui/material/Button'; 
import FormControlLabel from '@mui/material/FormControlLabel';
import Menu, { MenuProps } from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import EditIcon from '@mui/icons-material/Edit';
import Divider from '@mui/material/Divider';
import ArchiveIcon from '@mui/icons-material/Archive';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


function EditOrder(){ 
    const options = [ 
    
        { value: 'All', label: 'All' },
        { value: 'Pending', label: 'Pending' },
        { value: 'Dispensed', label: 'Dispensed' },
        { value: 'Canceiled', label: 'Cancelled' },
      ];

    const [checked, setChecked] = React.useState(true);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
      };

      const BoxFlex = styled(Box)({
       display:'flex',
       justifyContent:'space-between',
       gap:'10px',
       alignItems:'center',
       paddingTop:'20px'

      })

      const StyledMenu = styled((props: MenuProps) => (
        <Menu
          elevation={0}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          {...props}
        />
      ))(({ theme }) => ({
        '& .MuiPaper-root': {
          borderRadius: 6,
          marginTop: theme.spacing(1),
          minWidth: 180,
          color:
            theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
          boxShadow:
            'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
          '& .MuiMenu-list': {
            padding: '4px 0',
          },
          '& .MuiMenuItem-root': {
            '& .MuiSvgIcon-root': {
              fontSize: 18,
              color: theme.palette.text.secondary,
              marginRight: theme.spacing(1.5),
            },
            '&:active': {
              backgroundColor: alpha(
                theme.palette.primary.main,
                theme.palette.action.selectedOpacity,
              ),
            },
          },
        },
      }));

      const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
      const open = Boolean(anchorEl);
      const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
      };
      const handleClose = () => {
        setAnchorEl(null);
      };
      const BoxText = styled(Box)({
        display:'flex',
        alignItems:'center',
        border:'1px solid lightgrey',
        borderRadius:'5px',
        paddingBottom:'10px', 
        paddingRight:'10px'
        
         })
        
         const Boxflex=styled(Box)({
            display:'flex',
            alignItems:'center',
            gap:'10px',
            marginTop:'30px',
            backgroundColor:'white'
         })


    return(
    <>
    <Box sx={{backgroundColor:'#6B6FE6',paddingLeft:'20px',paddingRight:'20px',paddingBottom:'20px',borderRadius:'6px'}}>
    <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center',gap:'20px',color:'white'}}>
    <Box>
    <FormControlLabel
      control={
        <Checkbox
          checked={checked}
          onChange={handleChange}
          sx={{
            color: 'white', // Set the color to white
            width: 12,
            height: 12,
            borderRadius: '50%', // Add border radius for a circular shape
            border: '2px solid white', // Add border for a filled effect
            '&:hover': {
              bgcolor: '#6B6FE6', // Change background color on hover
            },
            '&.Mui-checked': {
              color: '#6B6FE6', // Change color when checked
              bgcolor: 'white', // Change background color when checked
            },
          }}
        />
      }
      label="Circle Checkbox"
    />

       <FormControlLabel
        control={
          <Checkbox
            checked={checked}
            onChange={handleChange}
            inputProps={{ 'aria-label': 'controlled' }}
            sx={{ color: 'white' ,borderRadius:'50%'}}  // Set the color to white
          />
        }
        label="Create Order"
      /> 
    </Box>
    <Box>
    <FormControlLabel
        control={
          <Checkbox
            checked={checked}
            onChange={handleChange}
            inputProps={{ 'aria-label': 'controlled' }}
            sx={{ color: 'white' }}  // Set the color to white
          />
        }
        label="Shiping "
      />
  <FormControlLabel
        control={
          <Checkbox
            checked={checked}
            onChange={handleChange}
            inputProps={{ 'aria-label': 'controlled' }}
            sx={{ color: 'white' }}  // Set the color to white
          />
        }
        label="Payment"
      />
    </Box>
    </Box>

    <Typography variant='h4' sx={{paddingTop:'10px',fontWeight:'600',color:'white'}}>
        order
    </Typography>
    <BoxFlex>
    <Box sx={{width:'100%'}}><UseFormControl   label='data1'/></Box>
    <Box sx={{width:'100%'}}><UseFormControl label='data1'/></Box>
    <Box sx={{width:'100%'}}><UseFormControl label='data1'/></Box>
    <Box sx={{width:'100%'}}><UseFormControl label='data1'/></Box>
    <Box sx={{width:'100%'}}><UseFormControl label='data1'/></Box>
    <Box sx={{width:'100%'}}><UseFormControl label='data1'/></Box>
    <Box sx={{width:'100%'}}><SelectField optionsData={options}/></Box>
  <Box><Button sx={{backgroundColor:'black',height:'40px',marginTop:'20px'}} variant="contained">Save</Button></Box>
</BoxFlex>
</Box>
<Box sx={{display:'flex',gap:'20px',marginTop:'20px'}}>
<Button variant="outlined" >
  Trash Order
</Button>
<Button variant="outlined" >
  View prescription
</Button>
<Box>
      <Button
        id="demo-customized-button"
        aria-controls={open ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant="outlined"
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
      >
        prin:invoices
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} disableRipple>
          <EditIcon />
          Edit
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          <FileCopyIcon />
          Duplicate
        </MenuItem>
        <Divider sx={{ my: 0.5 }} />
        <MenuItem onClick={handleClose} disableRipple>
          <ArchiveIcon />
          Archive
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          <MoreHorizIcon />
          More
        </MenuItem>
      </StyledMenu>
    </Box>
    <Box>
      <Button
        id="demo-customized-button"
        aria-controls={open ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant="outlined"
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
      >
       label
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} disableRipple>
          <EditIcon />
          Edit
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          <FileCopyIcon />
          Duplicate
        </MenuItem>
        <Divider sx={{ my: 0.5 }} />
        <MenuItem onClick={handleClose} disableRipple>
          <ArchiveIcon />
          Archive
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          <MoreHorizIcon />
          More
        </MenuItem>
      </StyledMenu>
    </Box>
    </Box>


<Box sx={{backgroundColor:'white',paddingLeft:'20px',paddingRight:'20px',marginTop:'30px',borderRadius:'6px'}}>
 <Typography variant='h4'sx={{fontWeight:'bold',paddingTop:'20px'}}>
        Customer
 </Typography>
<Box sx={{borderBottom:'1px solid lightgrey'}}>

</Box>

<Box sx={{display:'flex',gap:'230px'}}>
<Box sx={{paddingTop:'20px'}}>
<Typography variant='h4'sx={{fontWeight:'bold',color:'blue'}}>
        BillingInformation
    </Typography>
    <Box sx={{paddingTop:'20px'}}>
    <Typography variant='h6'sx={{fontWeight:'bold',fontSize:'14px'}}>
        Muhammad shahbaz
    </Typography>
    <br />
    <Typography  variant='h6'sx={{fontWeight:'bold',fontSize:'14px'}}>
       Leader
    </Typography>
    <br />
    <Typography  variant='h6'sx={{fontWeight:'bold',fontSize:'14px'}}>
        Houses 120E Block
    </Typography>
    <br />
    <Typography  variant='h6'sx={{fontWeight:'bold',fontSize:'14px'}}>
       Faisalabad
    </Typography>
    <br />
    <Typography  variant='h6'sx={{fontWeight:'bold',fontSize:'14px'}}>
        smb
    </Typography>
    <br />
    <Typography  variant='h6'sx={{fontWeight:'bold',fontSize:'14px'}}>
        shahbaz@gmail.com
    </Typography>
    <br />
    <Typography  variant='h6'sx={{fontWeight:'bold',fontSize:'14px'}}>
        03244565656
    </Typography>
    <br />
    </Box>

</Box>
<Box sx={{paddingTop:'20px'}}>
<Typography variant='h4'sx={{fontWeight:'bold',color:'blue'}}>
        ShipingInformation
    </Typography>
    <Box sx={{paddingTop:'20px'}}>
    <Typography variant='h6'sx={{fontWeight:'bold',fontSize:'14px'}}>
        Muhammad shahbaz
    </Typography>
    <br />
    <Typography  variant='h6'sx={{fontWeight:'bold',fontSize:'14px'}}>
       Leader
    </Typography>
    <br />
    <Typography  variant='h6'sx={{fontWeight:'bold',fontSize:'14px'}}>
        Houses 120E Block
    </Typography>
    <br />
    <Typography  variant='h6'sx={{fontWeight:'bold',fontSize:'14px'}}>
       Faisalabad
    </Typography>
    <br />
    <Typography  variant='h6'sx={{fontWeight:'bold',fontSize:'14px'}}>
        smb
    </Typography>
    <br />
    <Typography  variant='h6'sx={{fontWeight:'bold',fontSize:'14px'}}>
        shahbaz@gmail.com
    </Typography>
    <br />
    <Typography  variant='h6'sx={{fontWeight:'bold',fontSize:'14px'}}>
        03244565656
    </Typography>
    <br />
    </Box>
</Box>
</Box>
</Box>

<Box sx={{backgroundColor:'white',marginTop:'20px',paddingTop:'10px',paddingBottom:'10px',paddingLeft:'10px',paddingRight:'10px',borderRadius:'6px'}}>
    <Typography variant='h6' sx={{fontWeight:'bold'}}>
        Product

    </Typography>
    <Box sx={{borderBottom:'1px solid lightgrey'}}>

    </Box>
</Box>

<Box sx={{backgroundColor:'white',paddingLeft:'10px',paddingRight:'10px', marginTop:'20px',paddingTop:'5px',paddingBottom:'10px'}}>
<Boxflex>
<BoxText >
<Typography variant="h3" style={{ fontSize: '11px',fontWeight:'bold',marginTop:'20px',paddingLeft:'25px',paddingBottom:'10px'}}>
   Order Public Notes
 </Typography>

 <Button sx={{marginTop:'10px',marginLeft:'23px',backgroundColor:'#585CE4'}} variant="contained">Add Note</Button>
</BoxText>
<Typography variant="h3" style={{ fontSize: '13px',fontWeight:'bold',paddingLeft:'10px',border:'1px solid lightgrey',width:'160px',height:'53px', paddingTop:'20px', borderRadius:'5px'}}>
  Order Private Note(3)
 </Typography>
 </Boxflex>
 <Typography variant="h3" style={{ fontSize: '11px',fontWeight:'bold',marginTop:'20px',paddingLeft:'10px',width:'70%',paddingTop:'20px'}}>
   Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores hic soluta vero, ut excepturi natus deserunt molestiae repellat fugit, est inventore totam tenetur quasi quisquam architecto earum, placeat magnam perspiciatis!10
 </Typography>
 </Box>
 <Box sx={{backgroundColor:'white',borderRadius:'6px',marginTop:'20px',paddingLeft:'20px',paddingRight:'20px',paddingBottom:'20px'}}>
<Box sx={{display:'flex',gap:'60px',alignItems:'center'}}>
<Typography variant='h6' sx={{fontSize:'12px',fontWeight:'bold'}}>
        $144.00
</Typography>
<Typography variant='h6' sx={{fontSize:'10px',fontWeight:'bold'}}>
        Extra subtotal
</Typography>
<Typography variant='h6' sx={{fontSize:'12px',fontWeight:'bold'}}>
        $144.00
</Typography>
<Typography variant='h6' sx={{fontSize:'10px',fontWeight:'bold'}}>
        Extra subtotal
</Typography>
<Typography variant='h6' sx={{fontSize:'12px',fontWeight:'bold'}}>
        $144.00
</Typography>
<Typography variant='h6' sx={{fontSize:'10px',fontWeight:'bold'}}>
        Extra subtotal
</Typography>
<Box><Button sx={{backgroundColor:'#6B6FE6',height:'40px',marginTop:'20px',borderRadius:'0px'}} variant="contained">Net Total $155.00</Button></Box>
</Box>
<Box sx={{display:'flex',gap:'60px',alignItems:'center'}}>
<Typography variant='h6' sx={{fontSize:'12px',fontWeight:'bold'}}>
        $144.00
</Typography>
<Typography variant='h6' sx={{fontSize:'10px',fontWeight:'bold'}}>
        Extra subtotal
</Typography>
<Typography variant='h6' sx={{fontSize:'12px',fontWeight:'bold'}}>
        $144.00
</Typography>
<Typography variant='h6' sx={{fontSize:'10px',fontWeight:'bold'}}>
        Extra subtotal
</Typography>
<Typography variant='h6' sx={{fontSize:'12px',fontWeight:'bold'}}>
        $144.00
</Typography>
<Typography variant='h6' sx={{fontSize:'10px',fontWeight:'bold'}}>
        Extra subtotal
</Typography>
<Box><Button sx={{backgroundColor:'black',height:'40px',marginTop:'20px',borderRadius:'0px'}} variant="contained">Net Total $155.00</Button></Box>
</Box>
</Box>
    </>
    )
}
export default EditOrder;