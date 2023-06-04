import axios from "axios";

const domain = "https://clinic-qpx2.onrender.com";

export const getReviews = async () => await axios.get(`${domain}/reviews/read`);

export const addReview = (item) => axios.post(`${domain}/reviews/add`, item);
