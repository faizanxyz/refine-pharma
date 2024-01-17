import { Box,Typography,styled } from "@mui/material";
import Button from '@mui/material/Button';
// import Bulk from "../../Assets/bulk";


function OrderResult(){
const BoxMain = styled(Box)({
display:'flex',
justifyContent:'space-between',
paddingTop:'20px',
paddingLeft:'20px',
paddingRight:'20px',



})    
    const BoxResult = styled(Box)({
        flex:'1',
        color:'#848585',
        fontWeight:'600'

    })
    
    const BoxButton = styled(Box)({
        
    })
    const BoxOrder = styled(Box)({
      backgroundColor:'white',
      marginTop:'30px',
      height:'400px',
      borderRadius:'6px'
    })
    const Boximg = styled(Box)({
     width:'200px',
     height:'200px',
     margin:'auto',
     marginTop:'80px'
   
    })
    const Boxtext = styled(Box)({
      textAlign:'center'
    }) 
return(
    <>
    <BoxOrder>
<BoxMain>
    <BoxResult >
        <Typography fontSize={'14px'}>     
            0 Result
        </Typography>
        </BoxResult>
        <BoxButton>
        <Button sx={{height:'25px',borderRadius:'7px',marginRight:'10px'}}  size="small"  variant="outlined" startIcon={<svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16" fill="none">
          <path d="M5.66804 15.2394C5.1994 15.2394 4.79808 15.0832 4.46407 14.7707C4.13007 14.4583 3.96335 14.0831 3.96391 13.6452V12.051H2.25979C1.79116 12.051 1.38983 11.8948 1.05583 11.5823C0.721817 11.2699 0.555097 10.8947 0.555666 10.4568V7.26841C0.555666 6.59088 0.804184 6.02281 1.30122 5.56421C1.79826 5.10561 2.4018 4.87658 3.11185 4.87711H15.0407C15.765 4.87711 16.3722 5.10641 16.8624 5.56501C17.3526 6.02361 17.5975 6.59141 17.5969 7.26841V10.4568C17.5969 10.8952 17.4299 11.2707 17.0959 11.5831C16.7619 11.8956 16.3608 12.0516 15.8928 12.051H14.1887V13.6452C14.1887 14.0836 14.0217 14.4591 13.6876 14.7715C13.3536 15.084 12.9526 15.24 12.4845 15.2394H5.66804ZM14.1887 4.08001H3.96391V2.48581C3.96391 2.0474 4.13092 1.67197 4.46493 1.3595C4.79893 1.04704 5.19997 0.891072 5.66804 0.891603H12.4845C12.9532 0.891603 13.3545 1.04783 13.6885 1.3603C14.0225 1.67276 14.1892 2.04793 14.1887 2.48581V4.08001ZM14.1887 8.46407C14.4301 8.46407 14.6326 8.38754 14.7962 8.2345C14.9598 8.08146 15.0413 7.89228 15.0407 7.66697C15.0407 7.44112 14.9589 7.25167 14.7953 7.09863C14.6317 6.94559 14.4295 6.86933 14.1887 6.86986C13.9472 6.86986 13.7447 6.94639 13.5811 7.09943C13.4175 7.25247 13.336 7.44165 13.3366 7.66697C13.3366 7.89281 13.4184 8.08225 13.582 8.2353C13.7456 8.38834 13.9478 8.4646 14.1887 8.46407ZM5.66804 13.6452H12.4845V10.4568H5.66804V13.6452Z" fill='#585CE4' />
        </svg>}>
        Bulk packing slip
    
      </Button>
      <Button sx={{ height: '25px', borderRadius: '7px', color: 'black', border: '1px solid black' }} size="small" variant="outlined" startIcon={<svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16" fill="none">
          <path d="M5.66804 15.2394C5.1994 15.2394 4.79808 15.0832 4.46407 14.7707C4.13007 14.4583 3.96335 14.0831 3.96391 13.6452V12.051H2.25979C1.79116 12.051 1.38983 11.8948 1.05583 11.5823C0.721817 11.2699 0.555097 10.8947 0.555666 10.4568V7.26841C0.555666 6.59088 0.804184 6.02281 1.30122 5.56421C1.79826 5.10561 2.4018 4.87658 3.11185 4.87711H15.0407C15.765 4.87711 16.3722 5.10641 16.8624 5.56501C17.3526 6.02361 17.5975 6.59141 17.5969 7.26841V10.4568C17.5969 10.8952 17.4299 11.2707 17.0959 11.5831C16.7619 11.8956 16.3608 12.0516 15.8928 12.051H14.1887V13.6452C14.1887 14.0836 14.0217 14.4591 13.6876 14.7715C13.3536 15.084 12.9526 15.24 12.4845 15.2394H5.66804ZM14.1887 4.08001H3.96391V2.48581C3.96391 2.0474 4.13092 1.67197 4.46493 1.3595C4.79893 1.04704 5.19997 0.891072 5.66804 0.891603H12.4845C12.9532 0.891603 13.3545 1.04783 13.6885 1.3603C14.0225 1.67276 14.1892 2.04793 14.1887 2.48581V4.08001ZM14.1887 8.46407C14.4301 8.46407 14.6326 8.38754 14.7962 8.2345C14.9598 8.08146 15.0413 7.89228 15.0407 7.66697C15.0407 7.44112 14.9589 7.25167 14.7953 7.09863C14.6317 6.94559 14.4295 6.86933 14.1887 6.86986C13.9472 6.86986 13.7447 6.94639 13.5811 7.09943C13.4175 7.25247 13.336 7.44165 13.3366 7.66697C13.3366 7.89281 13.4184 8.08225 13.582 8.2353C13.7456 8.38834 13.9478 8.4646 14.1887 8.46407ZM5.66804 13.6452H12.4845V10.4568H5.66804V13.6452Z" fill='black' />
        </svg>}>
  Bulk invoices
</Button>




</BoxButton>
</BoxMain>
     
<Boximg>
<img src="/assets/icons/searchLogo.svg" alt="" />
<Boxtext>
<Typography sx={{color:'blue',fontWeight:'700'}} >
    Sorry no result found
</Typography>
<Typography sx={{color:'black'}} >
    What you searched unfortunately not Exits
</Typography>
</Boxtext>
</Boximg>
</BoxOrder>





    </>
)
}
export default OrderResult;