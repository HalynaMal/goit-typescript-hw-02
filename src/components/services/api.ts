import axios from "axios";
const apiKey = "Py_iDo0pAQqvEYoMBPZrJ7mc9_8W17Y3JqrImjifwlY";

interface UnsplashResponse {
  total_pages: number;
  // results: ;
  data: string;
}

export const getImagesByQuery = async (query: string, page: number): Promise<UnsplashResponse> => {
  const { data } = await axios.get<UnsplashResponse>(`https://api.unsplash.com/search/photos/?client_id=${apiKey}&page=${page}&query=${query}&per_page=20`);
  return data;
};
