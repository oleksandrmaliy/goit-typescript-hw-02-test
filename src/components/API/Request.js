
import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://pixabay.com/api/?q=girl&page=1&key=36683079-f7ca8efdb46bf14669a93b6f2&image_type=photo&orientation=horizontal&per_page=12',

})

const getAllPics = () => {
    return instance.get('/')
}

export default getAllPics;