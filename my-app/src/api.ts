import axios from "axios";
export default axios.create({
    baseURL: 'https://ps-springboot.azurewebsites.net/campaign',
    headers: {
    "Content-type": "application/json"
  }
});