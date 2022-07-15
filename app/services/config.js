import axios from "axios";

const apiInstance = axios.create({
    baseURL: 'https://graphql.anilist.co',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }
});

// const apiInstance = axios.create({
//     baseURL: 'https://api.aniapi.com/v1',
//     headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json',
//     }
// });

// apiInstance.interceptors.request.use(req => {
//     req.headers.authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjE4NjkiLCJuYmYiOjE2NTMxNTM5MTcsImV4cCI6MTY1NTc0NTkxNywiaWF0IjoxNjUzMTUzOTE3fQ.OfKZiK2mq1UzU4dF3t6LIHpx0LxQJl4yjUBarGoNONo`;
//     return req;
// });

// apiInstance.interceptors.response.use(res => {
//     return res
// }, async (error) => {
//     const { response: { status } } = error
//     if (status === 401) {
//         localStorage.removeItem('token');
//         localStorage.removeItem('user');
//         setTimeout(() => { 
//             window.location.reload();
//         }, 3000);
//         return;
//     }
//     return Promise.reject(error);
// })

export default apiInstance;
