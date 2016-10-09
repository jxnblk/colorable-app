
const fs = require('fs')
const chroma = require('chroma-js')
const PNG = require('pngjs').PNG

const image = ({
  res,
  text,
  base
}) => {
  const scale = chroma.scale([ text, base ])

  res.setHeader('Content-Type', 'image/png')
  fs.createReadStream(__dirname + '/images/card.png')
    .pipe(new PNG())
    .on('parsed', function () {
      for (let y = 0; y < this.height; y++) {
        for (let x = 0; x < this.width; x++) {
          const idx = (this.width * y + x) << 2
          const { data } = this

          const r = scale(data[idx] / 255).rgb()[0]
          const g = scale(data[idx + 1] / 255).rgb()[1]
          const b = scale(data[idx + 2] / 255).rgb()[2]

          data[idx] = r
          data[idx + 1] = g
          data[idx + 2] = b

          data[idx+3] = 0xff
        }
      }

      this.pack().pipe(res)
    })
}

module.exports = image

