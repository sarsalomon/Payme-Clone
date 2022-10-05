import { $authost } from "./index";

// FETCH

export const fetchApartment = async () => {
    const {data} = await $authost.post('api/card/byid');
    return data
}
