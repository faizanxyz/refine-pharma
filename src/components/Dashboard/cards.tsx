import { Box, styled, Typography } from "@mui/material";
import React from 'react';


const CardParent = styled(Box)({
  display: 'flex',
  gap: '24px',
  backgroundColor: 'white',
  width: '350px',
  height: '143px',
  padding: '20px',
  margin: '0px',
  borderRadius: '6px'
});

interface DashboardComponentProps {
  orderImage: string;
  card_heading: string;
  card_arrow: string;
}

// Component
const DashCard: React.FC<DashboardComponentProps> = ({ orderImage, card_heading, card_arrow }) => {
  return (
    <CardParent>
      <Box >
        <img src={orderImage} alt="" />
      </Box>
      <Box >
        <Typography variant="h4" sx={{ paddingBottom: '5px' }}>
          {card_heading}
        </Typography>
        <Box>
          <Typography variant="h5" sx={{ width: '247px', height: '40px' }}>
            Lorem ipsum dolor sit amet. dolor <br /> sit ame Lorem ipsum dolor sit amet.
          </Typography>
          <Box sx={{ display: 'flex', gap: '5px' }}>
            <img src="/assets/Vector.svg" alt="" />
            <Typography variant="h5" sx={{
              width: '247px',
              height: '40px',
              paddingTop: '10px',
              color: '#585CE4'
            }}>
              {card_arrow}
            </Typography>
          </Box>
        </Box>
      </Box>
    </CardParent>
  );
};

export default DashCard;
