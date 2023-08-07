import axios from "axios";

export  function deletepatient(id) {
    return axios.delete('http://127.0.0.1:8000/app/ticket/'+id+'/')
    .then(res => {
        return res.data
    })}