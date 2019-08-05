// api/mock.js
// cSpell:ignore ssns speedhunters

const Chance = require('chance')
const faker = require('faker')
const sharp = require('sharp')
const { Readable } = require('stream')
const vinGenerator = require('vin-generator')

const chance = new Chance()

const imageMax = chance.integer({ min: 3, max: 12 })
const ids = chance.unique(chance.integer, imageMax, { min: 1, max: 28 })
const imageIds = ids.map(id => (id > 9 ? `0${id}` : `00${id}`))

console.log('-- imageMax: ', imageMax)
console.log('-- imageIds: ', imageIds)

const bufferToStream = binary => {
  const readableStream = new Readable({
    read() {
      this.push(binary)
      this.push(null)
    },
  })

  return readableStream
}

const generatePreview = ({ num, thumb, callback }) => {
  const id = imageIds[num - 1]
  const input = process.cwd() + `/public/speedhunters/chen-${id}.jpg`

  if (id) {
    if (thumb) {
      sharp(input)
        .resize(150, 150, { fit: 'inside' })
        .toBuffer()
        .then(data => {
          callback(data)
        })
    } else {
      sharp(input)
        .resize({ width: 1024 })
        .toBuffer()
        .then(data => {
          callback(data)
        })
    }
  } else {
    callback()
  }
}

const globGet = () => {
  return {
    status: 200,
    header: {},
    data: {
      imageIds,
      imageMax,
    },
  }
}

const imageGet = ({ imageNumber, thumb, callback }) => {
  const num = imageNumber
  const processData = data => {
    if (data) {
      const src = bufferToStream(data)
      callback({
        status: 200,
        header: {
          'X-Image-Number': num,
          'X-Max-Image-Count': imageMax,
          'Content-Type': 'image/jpeg',
        },
        data: src,
      })
    } else {
      callback({
        status: 404,
        header: {},
        data: { message: 'image unavailable' },
      })
    }
  }
  generatePreview({ num, layers: [], thumb, callback: processData })
}

const slugGet = (count = 3) => {
  const data = faker.lorem.slug(count)
  return {
    status: 200,
    header: { 'x-mock-api': 'slug', 'x-mock-count': count },
    data,
  }
}

const ssnsGet = (count = 3, dashes) => {
  const data = chance.unique(chance.ssn, count, {
    dashes: dashes === 'true',
  })
  return {
    status: 200,
    header: { 'x-mock-api': 'ssns', 'x-mock-count': count },
    data,
  }
}

const uuidGet = () => {
  const data = faker.random.uuid()
  return {
    status: 200,
    header: { 'x-mock-api': 'uuid' },
    data,
  }
}

const vinsGet = (count = 3) => {
  const data = chance.unique(vinGenerator.generateVin, count)
  return {
    status: 200,
    header: { 'x-mock-api': 'vins', 'x-mock-count': count },
    data,
  }
}

const api = {
  imageGet,
  globGet,
  slugGet,
  ssnsGet,
  uuidGet,
  vinsGet,
}

const glob = {
  imageMax,
  imageIds,
}

module.exports = {
  api,
  glob,
}
