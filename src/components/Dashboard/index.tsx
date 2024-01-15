import React from 'react';
import { Box, styled } from "@mui/material";
import Dash_card from './cards';
import DashbordLowerSec from './dashboardPointListing';
import Dash_Top_trend from './dashboardRightSidebar';
import { Typography } from '@mui/material';
import Divider from '@mui/material/Divider';



const ImgDiv = styled(Box)({
    width: '193px',
    height: '40px',

});


const Topselling_pro = styled(Box)({

    width: '341px',
    height: '80px',
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '5px 5px 0 0',


});

const Topselling_loadmore = styled(Box)({

    width: '341px',
    height: '44px',
    backgroundColor: 'white'


});
const Topselling_loadmore_inner = styled(Box)({

    display: 'flex',
    gap: '5px',
    paddingLeft: '112px'
});

const Dashboard: React.FC = () => {
    const order_dash = '/assets/dash_order.svg';
    const product_dash = '/assets/dash_product.svg';
    const patient_dash = '/assets/dash_patient.svg';
    const private_dash = '/assets/dash_private.svg'

    return (
        <Box>
            <ImgDiv >
                <img src="/assets/dashboard_main.png" alt="" />
            </ImgDiv>

            <hr style={{ width: '80%', borderColor: '#CFD8E3', marginLeft: '20px' }} />

            <Typography variant='h4' sx={{ marginLeft: '20px', padding: ' 13px 0px' }} >
                Overall Status
            </Typography>
            <Box sx={{ display: 'flex' }}>

                <Box >
                    <Box sx={{ marginLeft: '20px' }}>
                        <Box sx={{ display: 'flex', gap: '13px' }}>
                            <Dash_card
                                orderImage={order_dash}
                                card_heading='Order'
                                card_arrow='View Order'
                            />
                            <Dash_card
                                orderImage={product_dash}
                                card_heading='Product'
                                card_arrow='View Order'
                            />

                        </Box>
                        <Box sx={{ display: 'flex', gap: '13px', marginTop: '13px' }} >
                            <Dash_card
                                orderImage={patient_dash}
                                card_heading='Patients'
                                card_arrow='View Paients'
                            />
                            <Dash_card
                                orderImage={private_dash}
                                card_heading='Private Prescription Register'
                                card_arrow='Select Website'
                            />
                        </Box>
                    </Box>
                    <DashbordLowerSec />
                </Box>
                <Box sx={{ marginLeft: '15px' }}>
                    <Topselling_pro >
                        <Box sx={{ display: 'flex', gap: '14px', padding: '30px 0px' }}>
                            <img src="/assets/Vector_2.png" alt="" />
                            <Typography variant='h4'>
                                Top Selling Products
                            </Typography>
                        </Box>
                    </Topselling_pro>
                    <Dash_Top_trend />
                    <Divider />
                    <Dash_Top_trend />
                    <Divider />
                    <Dash_Top_trend />
                    <Divider />
                    <Dash_Top_trend />
                    <Divider />
                    <Topselling_loadmore >
                        <Topselling_loadmore_inner sx={{ display: 'flex', gap: '5px', paddingLeft: '112px' }}>
                            <img src="/assets/Vector.svg" alt="" />
                            <Typography variant='h3' sx={{ color: '#585CE4' }}>
                                Load More
                            </Typography>
                        </Topselling_loadmore_inner>

                    </Topselling_loadmore>

                </Box>
            </Box>
        </Box >
    );
};
export default Dashboard;
