import { Box, styled } from '@mui/system';
import Typography from '@mui/material/Typography';
import TopTrend from './dashboardRightSidebar';
import DashbordLowerSec from './dashboardPointListing';
import RightbarCard from './dashboardRightSidebar';
import Divider from '@mui/material/Divider';

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

                        <Box sx={{ display: 'flex', gap: '13px', flexWrap: 'wrap' }}>
                            <RightbarCard
                            />
                            <RightbarCard />
                            <RightbarCard />
                            <RightbarCard />
                            <Box>
                                <DashbordLowerSec />
                            </Box>
                        </Box>

                    </Box>
                </Box>
                <Box sx={{ flex: '1' }}>
                    <Box sx={{ display: 'flex', backgroundColor: 'white', height: '6%' }}>
                        <Typography variant="h4">Overall Status</Typography>
                        <Typography variant="h4">Overall Status</Typography>


                    </Box>
                    <Divider />

                    <TopTrend />
                    <Divider />
                    <TopTrend />
                    <Divider />
                    <TopTrend />
                    <Divider />
                    <TopTrend />
                    <Divider />
                    <Box sx={{ display: 'flex', backgroundColor: 'white', height: '6%' }}>
                        <Typography variant="h4">Overall Status</Typography>
                        <Typography variant="h4">Overall Status</Typography>


                    </Box>
                </Box>
            </Box>
        </>
    );
};

export default Dashboard;