import axios from 'axios';

const fetchImages = async (query, page) => {
  const response = await axios.get(`https://api.unsplash.com/search/photos`, {
    params: {
      query,
      page,
      per_page: 9,
      client_id: 'alWp6hurEvK-MK92m5HZv1-1euEpnmixSMj2njOszLo',
    },
  });
  return response.data;
};

export default fetchImages;
