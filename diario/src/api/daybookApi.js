

import axios from "axios";

const dayBookapi = axios.create({
    baseURL: 'https://vue-demos-6a650-default-rtdb.europe-west1.firebasedatabase.app'
})

export default dayBookapi

