import axios from "axios";

const instance = axios.create();
instance.defaults.baseURL = "https://builder-test-9feed-default-rtdb.firebaseio.com";

export default instance; 