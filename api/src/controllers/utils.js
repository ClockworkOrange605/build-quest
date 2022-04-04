import fs from 'fs'
import crypto from 'crypto'

const extensions = [
  { type: "image/x-jg", ext: ".art" },
  { type: "image/bmp", ext: ".bmp" },
  { type: "image/x-cmx", ext: ".cmx" },
  { type: "image/cis-cod", ext: ".cod" },
  { type: "image/bmp", ext: ".dib" },
  { type: "image/gif", ext: ".gif" },
  { type: "image/x-icon", ext: ".ico" },
  { type: "image/ief", ext: ".ief" },
  { type: "image/pjpeg", ext: ".jfif" },
  // { type: "image/jpeg", ext: ".jpe" },
  // { type: "image/jpeg", ext: ".jpeg" },
  { type: "image/jpeg", ext: ".jpg" },
  { type: "image/x-macpaint", ext: ".mac" },
  { type: "image/x-portable-bitmap", ext: ".pbm" },
  { type: "image/pict", ext: ".pct" },
  { type: "image/x-portable-graymap", ext: ".pgm" },
  { type: "image/pict", ext: ".pic" },
  { type: "image/pict", ext: ".pict" },
  { type: "image/png", ext: ".png" },
  { type: "image/x-portable-anymap", ext: ".pnm" },
  { type: "image/x-macpaint", ext: ".pnt" },
  { type: "image/x-macpaint", ext: ".pntg" },
  { type: "image/png", ext: ".pnz" },
  { type: "image/x-portable-pixmap", ext: ".ppm" },
  { type: "image/x-quicktime", ext: ".qti" },
  { type: "image/x-quicktime", ext: ".qtif" },
  { type: "image/x-cmu-raster", ext: ".ras" },
  { type: "image/vnd.rn-realflash", ext: ".rf" },
  { type: "image/x-rgb", ext: ".rgb" },
  { type: "image/tiff", ext: ".tif" },
  { type: "image/tiff", ext: ".tiff" },
  { type: "image/vnd.wap.wbmp", ext: ".wbmp" },
  { type: "image/vnd.ms-photo", ext: ".wdp" },
  { type: "image/x-xbitmap", ext: ".xbm" },
  { type: "image/x-xpixmap", ext: ".xpm" },
  { type: "image/x-xwindowdump", ext: ".xwd" },
]

const generateFilename = (data) => crypto.createHash('md5').update(data).digest("hex")

const upload =
  async (req, res, next) => {
    const file = Buffer.from(req.body)

    const filename = `${generateFilename(file)}${extensions.find(item => item.type === req.headers['content-type']).ext}`

    const filepath = `/tmp/${filename}`

    fs.writeFileSync(`/storage/${filepath}`, file)

    res.send({ debug: true, file: `/preview/${filename}` })
  }

export { upload }