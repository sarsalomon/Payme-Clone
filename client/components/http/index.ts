import axios from "axios";

const $host = axios.create({
    baseURL: "http://localhost:5000/"
});

const $authost = axios.create({
    baseURL: "http://localhost:5000/"
});

// const authInterceptor = config => {
//     config.headers.authorization = `Bearer ${localStorage.getItem}`
//     return config
// }

// $authost.interceptors.request.use(authInterceptor);

export {
    $host,
    $authost
}