// api/utils.js

const Chance = require('chance')
const chance = new Chance()

const delay = () => {
  return chance.integer({ min: 500, max: 3500 })
}

const respondBuffer = (res, mock) => {
  const { status, header, data } = mock
  const keys = Object.keys(header)
  keys.forEach(key => {
    res.append(key, header[key])
  })
  res.status(status)
  status === 200 ? data.pipe(res) : res.json(data)
}

const respondTo = (res, mock) => {
  const { status, header, data } = mock
  const keys = Object.keys(header)
  keys.forEach(key => {
    res.header(key, header[key])
  })
  res.status(status)
  res.json(data)
}

module.exports = {
  delay,
  respondBuffer,
  respondTo,
}
