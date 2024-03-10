import { ImageTestVarLang } from '@ImageTestVarLang/core'
import Dashboard from '@ImageTestVarLang/dashboard'
import AwsS3 from '@ImageTestVarLang/aws-s3'

import '@ImageTestVarLang/core/dist/style.css'
import '@ImageTestVarLang/dashboard/dist/style.css'

const ImageTestVarLang = new ImageTestVarLang()
  .use(Dashboard, { target: '#app', inline: true })
  .use(AwsS3, {
    limit: 2,
    companionUrl: process.env.VITE_COMPANION_URL,
  })

