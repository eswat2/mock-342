// api/mock.js
// cSpell:ignore ssns speedhunters

const Chance = require('chance')
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

const generatePreview = ({ id, num, thumb, callback }) => {
  const xid = id ? (id <= 28 ? id : undefined) : imageIds[num - 1]
  const input = process.cwd() + `/public/speedhunters/chen-${xid}.jpg`

  if (xid) {
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

const chenGet = ({ imageNumber, thumb, callback }) => {
  const num = imageNumber
  const id = num > 9 ? `0${num}` : `00${num}`
  const processData = data => {
    if (data) {
      const src = bufferToStream(data)
      callback({
        status: 200,
        header: {
          'X-Image-Number': num,
          'X-Max-Image-Count': 28,
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
  generatePreview({ id, thumb, callback: processData })
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
  const data = chance.unique(chance.word, count, { length: 5 }).join('-')
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

// NOTE:  simple UUID generator to replace faker...
function b(a) {
  return a
    ? (a ^ ((Math.random() * 16) >> (a / 4))).toString(16)
    : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, b)
}

const uuidGet = () => {
  const data = b()
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
  chenGet,
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
