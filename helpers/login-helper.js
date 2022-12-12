import axios from "axios";

const LoginHelper = {
    updateRequestHeaders() {
        axios.interceptors.request.use((config) => {
            /**const token = 'dummy token';
            if(token) {
                config.headers['Authorization'] = `Bearer ${token}`;
            }*/
            config.headers['Accept'] = 'application/json';
            config.headers['Content-Type'] = 'application/json';
            return config;
        }, error => {
            Promise.reject(error);
        });

        axios.interceptors.response.use((response) => {
            if (response.status === 200) {
                if (response.data.STATUS && response.data.STATUS.toLowerCase() !== 'success') {
                    //handle error msgs
                }
                return response.data;
            }
            return response;
        }, (error) => {
            if(error.response.status === 401) {
                // Logout functionallity
            }
        }) 
    }
}

export default LoginHelper;