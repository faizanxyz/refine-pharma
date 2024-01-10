import { Box , Typography, styled, Button } from "@mui/material";

const Container = styled(Box)({
    height: '65px',
    backgroundColor: '#262627;',
    color:'white',
    display:'flex',
    padding:'0px 30px 0px 15px',
    alignItems:'center'
  });
  const LogoBox = styled(Box)({
    columnGap:'8px',
    display:'flex',
    alignItems:'center',
    flex:'2'});

    const TextBox = styled(Box)({
      columnGap:'8px',
      display:'flex',
      alignItems:'center',
      flex:'2'});

    const MidBox = styled(Box)({
      columnGap:'8px',
      display:'flex',
      alignItems:'center',
      flex:'2'});

      const LastBox = styled(Box)({columnGap:'8px',
      display:'flex',
      alignItems:'center'});
function Nav (){

    return(
        <>
       <Container>
        <LogoBox >
          <img src="/assets/refinelogo.svg" width='40px' alt=""/>
          <Box sx={{flex:'1'}}>
          <TextBox> <Typography sx={{fontSize:'16px',fontWeight:'600'}}>Refine Germany </Typography><img src="/assets/pepicons-pop_dots-y.svg" alt="" /></TextBox>
          <Typography sx={{fontSize:'14px'}}>Some Text Here</Typography>
          </Box>
            </LogoBox>

            <MidBox>
          <img src="/assets/maxeniusLogo.png"  alt=""/>
            </MidBox>

            <LastBox>
          <img src="/assets/profileIcon.png" width='40px' alt="" />
          <Button variant="contained" size="small">My Profile</Button>
            </LastBox>
            
       </Container>
       </>
    )
}

export default Nav