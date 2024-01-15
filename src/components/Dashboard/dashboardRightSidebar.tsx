import { Box, styled, Typography } from "@mui/material";

const Card_parent = styled(Box)({
    display: 'flex',
    gap: '15px',
    backgroundColor: 'white',
    width: '341px',
    height: '129px',
    padding: '20px',
    margin: '0px'

})

const TopTrend = () => {
    //  let Dash_order = './assets/dash_order.png'
    return (

        <Card_parent >
            <Box color="primary.contrastText">
                <img src='/assets/top_pic.png' alt="" />
            </Box>
            <Box color="secondary.contrastText">
                <Typography variant="h3" sx={{ paddingBottom: '5px' }}>
                RC5776425
                </Typography>
                <Box >
                    <Typography variant="h3" sx={{ width: '247px', height: '40px' }}>
                    2021 "Profile Edition" Pocket <br /> Directory of the California Legislature
                    </Typography>
                    <Typography variant="h3" sx={{color:'#585CE4'}}>
                    £120.00
                    </Typography>
                </Box>
            </Box>
        </Card_parent>
    );
};

export default TopTrend;
