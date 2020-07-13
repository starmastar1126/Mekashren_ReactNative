import axios from "axios";

export default axios.create({
    baseURL: "https://starmaster1126.com/api/",
    responseType: "json"
});