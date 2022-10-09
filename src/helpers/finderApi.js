import axios from "axios"


const API_KEY = '28536083-93f700431aee8dfae28382edd'
const BASE_URL = 'https://pixabay.com/api/'
export const FetchImages = async (query, page) => {
    const images = await axios.get(`${BASE_URL}?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`)
    return images.data.hits;
}