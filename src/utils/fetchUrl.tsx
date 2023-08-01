import axios from 'axios';

export async function fetchUrl(url: string) {
  let data = await axios.get(url);
  const res = data.data;
  return res;
}
