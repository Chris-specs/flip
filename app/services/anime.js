import apiInstance from "./config";

export const getAllAnimes = (query) => apiInstance.post('', query)

// export const getAllGenres = () => apiInstance.get('/resources/1.0/0')