const API_KEY = "55396799-af467bce3dc1f029cc7ffe916"
const BASE_URL = "https://pixabay.com/api/"


export const fetchImages = (query, page = 1) => {
    return fetch(`${BASE_URL}?key=${API_KEY}&page=${page}&q=${query}&per_page=12&orientation=horizontal`).then(res=>res.json())
}