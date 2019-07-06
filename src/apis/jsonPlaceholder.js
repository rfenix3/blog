import axios from 'axios';

export default axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'   // we need to take off the '/post' since we just need the base URL.
});