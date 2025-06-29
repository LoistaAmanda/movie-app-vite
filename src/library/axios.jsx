async function fetchMovie() {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const url = `https://www.omdbapi.com/?apikey=${API_KEY}&i=tt2975590`;
  const { data } = await axios(url);
  return data;
}
