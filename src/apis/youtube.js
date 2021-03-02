import axios from 'axios';

const KEY = 'AIzaSyAJ3Zw6GVO-C9f7opNijldtnT5gN-6hGys'

              // creating an instance of axios with some default parameters
export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY
  }
})
