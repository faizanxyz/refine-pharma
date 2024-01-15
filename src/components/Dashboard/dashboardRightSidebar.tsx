import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import { styled } from '@mui/system';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';

const CustomCardContent = styled(CardContent)({
    padding: '0px 16px 16px 70px',

  });

  const CustomCardHeader = styled(CardHeader)({
    display:'flex',
    padding: '16px 14px 0px 14px',
    alignItems:'center'

  });

export default function RightbarCard() {


  return (
    <Card sx={{ maxWidth: '100%' }}>
      <CustomCardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }

        title="RC5776425"
      />

      <CustomCardContent>
        <Typography variant="h5" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together
        </Typography>
        
        <Typography variant="h5" sx={{color:'#585CE4'}}>
        £120.00
        </Typography>
      </CustomCardContent>

    </Card>
  );
}