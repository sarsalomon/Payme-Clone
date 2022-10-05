import jwtDecode from "jwt-decode";
import { $authost, $host } from "."

export const registration = async (phone:string, name:string, role:string) => {
    const { data } = await $host.post('api/user/registration', {phone, name, role});
    localStorage.setItem('token', data.token);
    return jwtDecode(data.token);
}

export const login = async (phone:string, password:string) => {
    const { data } = await $host.post('api/user/login', {phone, password});
    localStorage.setItem('token', data.token);
    return jwtDecode(data.token);
}

export const check = async () => {
    const { data } = await $authost.get('api/user/auth');
    localStorage.setItem('token', data.token);
    return jwtDecode(data.token);
}
