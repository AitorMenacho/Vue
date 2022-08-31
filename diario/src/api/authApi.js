

import axios from "axios";

const authApi = axios.create({
    baseURL: 'https://identitytoolkit.googleapis.com/v1/accounts',
    params: {
        key:'AIzaSyDbSOdvnM_fcsrP8n65HNOrxaE2PXRrnXo'
    }
})

export default authApi

