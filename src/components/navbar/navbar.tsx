import * as React from 'react';
import { styled, Theme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import { ListItemIcon } from '@mui/material';
import { Button } from '@mui/material';
import { Link, Outlet } from 'react-router-dom';

const drawerWidth = 247;

const LogoBox = styled(Box)({
  columnGap:'8px',
  display:'flex',
  alignItems:'center',});

  const TextBox = styled(Box)({
    columnGap:'8px',
    display:'flex',
    alignItems:'center'});

    const LastBox = styled(Box)({columnGap:'8px',
      display:'flex',
      alignItems:'center'});

      const NavLink = styled(Link)({
        textDecoration:'none',
        color:'black'
      });

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  display:'flex',
  alignItems:'center',
  flexDirection:'column',
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `100%`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function MiniDrawer() {
  // const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        
      <AppBar position="static" sx={{backgroundColor:'#262627'}}>
      <Container maxWidth="xl" >
        <Toolbar disableGutters sx={{display:'flex', justifyContent:'space-between'}}>
        <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}>
          <LogoBox >
          <img src="/assets/refinelogo.svg" width='40px' alt=""/>
          <Box sx={{flex:'1'}}>
          <TextBox> <Typography sx={{fontSize:'16px',fontWeight:'600'}}>Refine Germany </Typography><img src="/assets/pepicons-pop_dots-y.svg" alt="" /></TextBox>
          <Typography sx={{fontSize:'14px'}}>Some Text Here</Typography>
          </Box>
            </LogoBox>
            </Box>

            <Box
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
            }}
            >
          <img src="/assets/maxeniusLogo.png"  alt=""/>
            </Box>
          

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            {open ? <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
              onClick={handleDrawerClose}
            >
                 <ChevronLeftIcon />
            </IconButton> : <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
              onClick={handleDrawerOpen}
            >
              <MenuIcon />
            </IconButton>}
            
          </Box>

          <Box
             sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
            >
          <img src="/assets/maxeniusLogo.png"  alt=""/>
            </Box>
          

          <LastBox>
          <img src="/assets/profileIcon.png" width='40px' alt="" />
          <Button variant="contained" size="small">My Profile</Button>
            </LastBox>

        </Toolbar>
      </Container>
    </AppBar>
        
      </AppBar>
      <Drawer variant="permanent" open={open} sx={{display:'flex',flexDirection:'column',alignItems:'center'}}>

        <List sx={{pt:'70px'}}>
        <ListItem  disablePadding sx={{ display: 'block' }}>
       <NavLink to='/mainPage/dashboard'>   <ListItemButton >
       <ListItemIcon> <img src="/assets/icons/dashboard.svg" alt="" /></ListItemIcon> <Typography >Dashboard</Typography>
          </ListItemButton></NavLink> 
          <NavLink to='/mainPage/order'>   <ListItemButton >
          <ListItemIcon> <img src="/assets/icons/orderIcon.svg" alt="" /></ListItemIcon> <Typography >Orders</Typography>
          </ListItemButton></NavLink>
          <NavLink to='/mainPage/patient'> <ListItemButton>
          <ListItemIcon><img src="/assets/icons/patientIcon.svg" alt="" /> </ListItemIcon> <Typography >Patients</Typography>
          </ListItemButton></NavLink>
          <NavLink to='/mainPage/product'> <ListItemButton component="a" href="#simple-list">
          <ListItemIcon> <img src="/assets/icons/productIcon.svg" alt="" /> </ListItemIcon><Typography >Products</Typography>
          </ListItemButton></NavLink>
          <ListItemButton component="a" href="#simple-list">
          <ListItemIcon><img src="/assets/icons/reportIcon.svg" alt="" /> </ListItemIcon><Typography >Reports</Typography>
          </ListItemButton>
         <NavLink to={'/mainPage/purchase-order'}><ListItemButton >
          <ListItemIcon> <img src="/assets/icons/purchaseOrder.svg" alt="" /></ListItemIcon><Typography >Purchase Orders</Typography>
          </ListItemButton></NavLink> 
          <ListItemButton component="a" href="#simple-list">
          <ListItemIcon> <img src="/assets/icons/productTransaction.svg" alt="" /> </ListItemIcon><Typography >Product Transactions</Typography>
          </ListItemButton>
            </ListItem>
        </List>
       
      </Drawer>
      <Box component="main" sx={{ flexGrow: 2, p: 3 ,backgroundColor:'#F1F2F4',height:'100%'}}>
        <DrawerHeader />
        <Box sx={{pb:3}}>
          <Outlet/>
        </Box>
        
      </Box>
    </Box>
  );
}