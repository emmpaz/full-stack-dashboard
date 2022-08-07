import { Fab, ThemeProvider, Typography } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import { CreateCampaignComp } from '../components/createCampaignComp';
import '../css files/createCampaign.css';
import CloseIcon from '@mui/icons-material/Close';
import JoshTheme from '../css files/allStyle';

const CreateCampaign = () => {

    const navigate = useNavigate();
    const { state } = useLocation();
    var initBannerId = (state as any).bannerId;

    return(
        <ThemeProvider theme={JoshTheme}>
        <div className="create-campaign-container">
            <Fab style={{
                        marginRight: '-1300px',
                        marginTop: '30px'
                    }} onClick={() => navigate("/dashboard", {state: {bannerId : initBannerId}})}>
                        <CloseIcon />
                    </Fab>
                <Typography variant='h3'>
                    Create New Campaign
                    <br/>
                    <br/>
                </Typography>
            <CreateCampaignComp />
        </div>
        </ThemeProvider>
    );

}
export default CreateCampaign;
