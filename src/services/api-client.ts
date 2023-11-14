import axios from "axios";

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '63df74b21fa4415d837cb4092f662f24'
  }
})


//https://rawg.io/@bcfcode/apikey