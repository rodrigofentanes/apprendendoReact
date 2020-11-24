import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization:'Client-ID 5skIVtgZGKpuBwGbNgjxxO-5_tkIyaUfYuYGNlO1EQ0',
    },
});