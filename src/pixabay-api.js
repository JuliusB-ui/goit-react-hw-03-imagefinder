import axios from 'axios';

export const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '43824714-e4d423996effa56e06012e73d';

export async function getAPI(query, page) {
  const url = `https://pixabay.com/api/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;
  const res = await axios.get(url);
  return res.data;
}
