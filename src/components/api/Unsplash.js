import axios from "axios";

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: "Client-ID Qn5YmQ05PfWGAZHg4xIic_KRaiUZVPdUZnu6VRJrn9o",
    },
});
