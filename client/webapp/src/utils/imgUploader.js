const { alert, FileReader, Image } = window
// const IMAGE_TYPES = /^image\/(png|jpg|jpeg|gif|svg|tiff|svg\+xml)$/i
const IMAGE_TYPES = /^image\/png$/i

export default function (pic, callback) {
  if (!IMAGE_TYPES.test(pic.type)) return alert('不支持的格式')
  if (pic.size > 1024000) return alert('图片文件过大, 为了确保图片在移动端更快加载，建议您不要上传大小超过1M的图片文件')
  const reader = new FileReader()
  reader.onload = (e) => {
    const data = e.target.result
    const img = new Image()
    img.onload = () => {
      callback(data, img.width, img.height)
    }
    img.src = data
  }
  reader.readAsDataURL(pic)
}
