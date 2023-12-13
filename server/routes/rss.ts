import { request } from 'node:http'
import { Feed } from 'feed'

const getRequest = () => {
  const options = {
    hostname: 'example.com',
    port: 80,
    path: '/',
    method: 'GET',
  }
  return new Promise((resolve, reject) => {
    const req = request(options, (res) => {
      let data = ''
      res.on('data', (chunk) => {
        data += chunk
      })
      res.on('end', () => {
        resolve(data)
      })
    })

    req.on('error', (error) => {
      reject(error)
    })

    req.end()
  })
}

const { VITE_OWNER } = import.meta.env

const DOMAIN = 'https://iamsee.top'
const AUTHOR = {
  name: 'chansee97',
  link: DOMAIN,
}

const options = {
  title: VITE_OWNER,
  description: `${VITE_OWNER}\Blog`,
  id: DOMAIN,
  link: DOMAIN,
  copyright: `CC BY-NC-SA 4.0 2023-PRESENT © ${VITE_OWNER}`,
  author: AUTHOR,
}

const feed = new Feed(options)

export default defineEventHandler(async () => {
  return import.meta.env
})
