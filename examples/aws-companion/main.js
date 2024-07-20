import AwsS3 from '@ImageTestVarLang/aws-s3'
import ImageTestVarLang from '@ImageTestVarLang/core'
import Dashboard from '@ImageTestVarLang/dashboard'
import GoogleDrive from '@ImageTestVarLang/google-drive'
import Webcam from '@ImageTestVarLang/webcam'

import '@ImageTestVarLang/core/dist/style.css'
import '@ImageTestVarLang/dashboard/dist/style.css'
import '@ImageTestVarLang/webcam/dist/style.css'

const ImageTestVarLang = new ImageTestVarLang({
  debug: true,
  autoProceed: false,
})

ImageTestVarLang.use(GoogleDrive, {
  companionUrl: 'http://localhost:3020',
})
ImageTestVarLang.use(Webcam)
ImageTestVarLang.use(Dashboard, {
  inline: true,
  target: 'body',
  plugins: ['GoogleDrive', 'Webcam'],
})
ImageTestVarLang.use(AwsS3, {
  companionUrl: 'http://localhost:3020',
})
