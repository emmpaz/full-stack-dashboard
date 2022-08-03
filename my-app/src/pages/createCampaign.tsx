import { CreateCampaignComp } from '../components/createCampaignComp';
import '../css files/createCampaign.css';

const CreateCampaign = () => {

    return(
        <div className="create-campaign-container">
            <h1 className="create-title">Create New Campaign</h1>
            <CreateCampaignComp />
        </div>
    );

}
export default CreateCampaign;