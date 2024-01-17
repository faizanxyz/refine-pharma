import { Box, styled } from '@mui/system';
import Typography from '@mui/material/Typography';

import DashbordLowerSec from './dashboardPointListing';
import TopTrend from './dashboardRightSidebar';
import Divider from '@mui/material/Divider';
import RecipeReviewCard from './myCard';

const Boxhead = styled(Box)({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid #CFD8E3',
});


const Dashboard: React.FC = () => {


    return (
        <>
            <Boxhead>
                <Typography variant="h3" style={{ fontSize: '20px', paddingLeft: '20px' }}>
                    Dashboard
                </Typography>
            </Boxhead>
            <Box sx={{ py: '15px' }}>
                <Typography variant="h4">Overall Status</Typography>
            </Box>

            <Box sx={{ display: 'flex' }}>
                <Box sx={{ flex: '2' }}>
                    <Box>

                        <Box sx={{ display: 'flex'}}>
                        <RecipeReviewCard
                                cardImage="/assets/icons/orderCardIcon.svg"
                                card_heading="Order"
                                card_arrow="View order"
                            />


                            <RecipeReviewCard
                                cardImage="/assets/icons/productCardIcon.svg"
                                card_heading="Product"
                                card_arrow="View Product"
                            />
                        </Box>
                        <Box sx={{ display: 'flex'}}>
                            <RecipeReviewCard
                                cardImage="/assets/icons/patientCardIcon.svg"
                                card_heading="Patients"
                                card_arrow="View Patients"
                            />
                            <RecipeReviewCard
                                cardImage="/assets/icons/precriptionCardIcon.svg"
                                card_heading="Private Prescription Register"
                                card_arrow="View Website" />
                                
                        </Box>
                        <Box sx={{display:'flex'}}>
                                <DashbordLowerSec />
                            </Box>
                        
                    </Box>
                    
                </Box>
                <Box sx={{ flex: '1' }}>

                    <Box sx={{ display: 'flex', backgroundColor: 'white', height: '6%', padding: '13px 10px', gap: '6px' }}>
                        <img src='/assets/icons/ToptListIcon.svg' style={{ width: '20px', height: '20px' }} alt="" />
                        <Typography variant="h4">Overall Status</Typography>
                    </Box>
                    <TopTrend /><Divider />
                    <TopTrend /><Divider />
                    <TopTrend /><Divider />
                    <TopTrend /><Divider />

                    <Box sx={{
                        display: 'flex',
                        backgroundColor: 'white',
                        height: '6%',
                        alignItems: 'center',  // Center vertically
                        justifyContent: 'center',  // Center horizontally
                    }}>
                        <img src="/assets/icons/arrowLine.svg" alt="" style={{ width: '21px', height: '21px' }} />
                        <Typography variant="h5" sx={{ color: '#585CE4', marginLeft: '8px' }}>Overall Status</Typography>
                    </Box>

                </Box>
            </Box>
        </>
    );
};

export default Dashboard;