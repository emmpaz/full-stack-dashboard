import { Fab } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import { CreateCampaignComp } from '../components/createCampaignComp';
import '../css files/createCampaign.css';
import CloseIcon from '@mui/icons-material/Close';

const CreateCampaign = () => {

    const navigate = useNavigate();
    const { state } = useLocation();
    var initBannerId = (state as any).bannerId;

    return(
        <div className="create-campaign-container">
            <Fab style={{
                        marginRight: '-1300px',
                        marginTop: '30px'
                    }} onClick={() => navigate("/dashboard", {state: {bannerId : initBannerId}})}>
                        <CloseIcon />
                    </Fab>
            <h1 className="create-title">Create New Campaign</h1>
            <CreateCampaignComp />
        </div>
    );

}
export default CreateCampaign;