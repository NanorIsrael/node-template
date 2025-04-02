// #!/usr/bin/env node
// a script that prints all characters of a Star Wars movie

import request from 'request';

interface RequestResponse {
  error: string,
  response: {
    statusCode: number
  },
  body: string
}

interface FilmResult {
  characters: string[]
}
interface CharacterAttributes {
  name: string
}

async function processRequest(url: string) {
  return new Promise((resolve, reject) => {
    request(url, function(error: string, response: unknown, body: string) {
        if (error) {
          reject(error)
          return
        }
        resolve({response, body})
    })
  })
}

async function main() {
  if (process.argv.length > 2) {
    const id = process.argv[2]
    const request_endpoint = `https://swapi-api.alx-tools.com/api/films/${id}`
    try {
        const { body } =  await processRequest(request_endpoint) as RequestResponse
    
        const characters: string[] = (JSON.parse(body) as FilmResult).characters
        if (characters.length > 0) {
          const downloadPromises = characters.map(async (url) => {
            const { body } = await processRequest(url) as RequestResponse
            return (JSON.parse(body) as CharacterAttributes).name
          })
          const result = await Promise.all(downloadPromises)
          console.log(result.join('\n'))
        }
      } catch(error) {
        console.log(error)
      }
  }
}
main()
.then(() => null)
.catch((error) => console.log('script failed', error))
