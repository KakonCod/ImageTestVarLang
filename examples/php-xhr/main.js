import ImageTestVarLang from '@ImageTestVarLang/core'
import Webcam from '@ImageTestVarLang/webcam'
import Dashboard from '@ImageTestVarLang/dashboard'
import XHRUpload from '@ImageTestVarLang/xhr-upload'

import '@ImageTestVarLang/core/dist/style.css'
import '@ImageTestVarLang/dashboard/dist/style.css'
import '@ImageTestVarLang/webcam/dist/style.css'

const ImageTestVarLang = new ImageTestVarLang({
  debug: true,
  autoProceed: false,
})

ImageTestVarLang.use(Webcam)
ImageTestVarLang.use(Dashboard, {
  inline: true,
  target: 'body',
  plugins: ['Webcam'],
})
ImageTestVarLang.use(XHRUpload, {
  endpoint: 'http://localhost:3020/upload.php',
})
