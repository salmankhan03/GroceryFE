import requests from "./api";

const AuthServices = {
    customerLogin: async (body) => {
        console.log(body)
        return requests.post(`/customer/login`, body);
    },
    customerSignUp: async (body) => {
        console.log(body)
        return requests.post(`/customer/signup`, body);
    },
    customerDetails: async (id) => {
        console.log(id)
        return requests.get(`/${id}/get-customer`);
    },
    customerLogout: async () => {
        return requests.get(`/customer/logout`, );
    },


};

export default AuthServices;
