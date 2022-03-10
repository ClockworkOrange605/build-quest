import { ipfs as config } from '../configs/app.js'

import fs from 'fs'
import axios from 'axios'
import FormData from 'form-data'

const uploadFile =
  async (filename) => {
    const body = new FormData()
    body.append('file', fs.createReadStream(filename))

    return await axios
      .post(`${config.piniata.uri}/pinning/pinFileToIPFS`, body, {
        // maxBodyLength: 'Infinity',
        headers: {
          "Authorization": `Bearer ${config.piniata.jwt}`,
          'Content-Type': `multipart/form-data; boundary=${body._boundary}`
        }
      })
      .then(res => res.data.IpfsHash)
  }

const uploadJSON =
  async (data) => {
    return await axios
      .post(`${config.piniata.uri}/pinning/pinJSONToIPFS`, data, {
        headers: {
          "Authorization": `Bearer ${config.piniata.jwt}`,
        }
      })
      .then(res => res.data.IpfsHash)
  }

export { uploadFile, uploadJSON }