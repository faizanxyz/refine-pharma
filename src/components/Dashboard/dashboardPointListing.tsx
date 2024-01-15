import { Box, styled, Typography } from "@mui/material";



const Parent = styled(Box)({
    width: '715px',
    height: '481px',
    marginLeft: '20px',
    marginTop: '10px',
    backgroundColor:'white'

})
const Parent_inner = styled(Box)({
   
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        paddingTop: '5px',
        paddingLeft: '28px'
  

})

const Buttoni = styled(Box)({
   
        display: 'inline-flex',
        height: '40px',
        width: '112px',
        padding: '10px 12px',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '10px',
        flexShrink: 0,
        marginTop: '55px',
        backgroundColor:'#585CE4', 
        color:'white',
        borderRadius:'6px'
        
  


})

const DashbordLowerSec = () => {
    return (
        <Parent >
            <Parent_inner>
                <Box
                    sx={{  marginTop: '42px'}}
                >
                    <Typography variant='h4'>Lorem ipsum dolor sit amet</Typography>
                </Box>

                <Box sx={{ width: '553px', height: '61px', marginTop: '21px' }}>
                    <Typography variant='h3'>Lorem ipsum dolor sit amet consectetur. Urna nec amet at malesuada sed.
                        Ac vestibulum magna purus potenti ornare volutpat est. Habitant venenatis egestas quis hendrerit.</Typography>
                </Box>
                <Box>
                    <Box
                        sx={{
                            display: 'flex',
                            gap: '10px',
                            marginTop: '13px'

                        }}
                    >
                        <img src="/assets/dashboard_tick.svg" alt="" />
                        <Typography variant='h3'>Pulvinar nunc ultrices aliquet fames sit arcu orci.</Typography>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            gap: '10px',
                            marginTop: '13px'

                        }}
                    >
                        <img src="/assets/dashboard_tick.svg" alt="" />
                        <Typography variant='h3'>Pulvinar nunc ultrices aliquet fames sit arcu orci.</Typography>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            gap: '10px',
                            marginTop: '13px'
                        }}
                    >
                        <img src="/assets/dashboard_tick.svg" alt="" />
                        <Typography variant='h3'>Pulvinar nunc ultrices aliquet fames sit arcu orci.</Typography>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            gap: '10px',
                            marginTop: '13px'
                        }}
                    >
                        <img src="/assets/dashboard_tick.svg" alt="" />
                        <Typography variant='h3'>Pulvinar nunc ultrices aliquet fames sit arcu orci.</Typography>
                    </Box>
                </Box>
                <Buttoni>
                    Contained
                </Buttoni>


            </Parent_inner>

        </Parent>
    );
};

export default DashbordLowerSec;
