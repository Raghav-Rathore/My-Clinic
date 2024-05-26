import axios from "axios";

class ApiService {

    PostAPiCall(url, data) {
        return axios.post(url, data, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

    PostCall(url, data, token) {
        return axios.post(url, data, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        })
    }

    GetApiCall(url, token) {
        return axios.get(url, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        })
    }

    PutApiCall(url, data, token) {
        return axios.put(url, data, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        })
    }
    DeleApiCall(url, token) {
        return axios.delete(url, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        })
    }

}

const SERVER = "http://tutorials.codebetter.in:3000"

export const Apiurls = {

    REGISTER_API: `${SERVER}/auth/doctor/save`,
    LOGIN: `${SERVER}/auth/login`,

    RECEPTION_SAVE: `${SERVER}/api/reception/save`,
    RECEPTION_LIST: `${SERVER}/api/reception/lists`,
    RECEPTION_DELETE: `${SERVER}/api/reception/delete/`,
    RECEPTION_UPDATE: `${SERVER}/api/reception/updateReception/`,


    PATIENTS_SAVE: `${SERVER}/api/patient/addpatient`,
    PATIENTS_DELETE: `${SERVER}/api/patient/delete/`,
    PATIENT_UPDATE: `${SERVER}/api/patient/update/`,

    APPOINTMENTS: `${SERVER}/api/patient/lists`,
    APPOINTMENTS_DOC: `${SERVER}/api/patient/list`,
    APPOINTMENTS_DONE: `${SERVER}/api/patient/done/`,
    APPOINTMENTS_UNDO: `${SERVER}/api/patient/undo/`,


}

export default new ApiService();