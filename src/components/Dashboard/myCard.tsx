import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import { styled } from '@mui/system';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const CustomCardContent = styled(CardContent)({
  padding: '0px 16px 16px 70px',

});

const CustomCardHeader = styled(CardHeader)({
  display: 'flex',
  padding: '16px 14px 0px 14px',
  alignItems: 'center'

});
interface RecipeReviewCardProps {
  cardImage: string,
  card_heading: string,
  card_arrow: string

}




const RecipeReviewCard: React.FC<RecipeReviewCardProps> = (props) => {
  const { cardImage, card_heading, card_arrow } = props;


  return (
    <Card sx={{ maxWidth: '48%' }}>
      <CustomCardHeader
         avatar={
          <img src={cardImage} alt="avatar" />
        }
        title={
          <Typography variant="h4">
            {card_heading}
          </Typography>
        }

        
      />

      <CustomCardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together.
        </Typography>
        <Box sx={{display:'flex'  , marginTop:'10px'}}>
        <img src="/assets/icons/arrowLine.svg" alt="" style={{width:'21px' , height:'21px'}} />
        <Typography variant="h5" sx={{color:'#585CE4'}}>
        {card_arrow}
        </Typography>


        

        </Box>

      </CustomCardContent>
    </Card>
  );
}

export default RecipeReviewCard;