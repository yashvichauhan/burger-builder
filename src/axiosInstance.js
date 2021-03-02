import axios from 'axios'

const Instance = axios.create({
    baseURL:'https://yc-burger-app.firebaseio.com/'
});

export default Instance;