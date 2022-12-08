import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://noticias-master.govone.digital/api/cms/noticias/',
  headers: {
    Authorization: `Api-Key WCRp4mZb.NFlExsno0KHoV9nf4KGKhCfUjufPI4q8
    `,
  },
})
