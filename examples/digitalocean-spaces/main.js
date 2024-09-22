import ImageTestVarLang from '@ImageTestVarLang/core'
import Dashboard from '@ImageTestVarLang/dashboard'
import AwsS3 from '@ImageTestVarLang/aws-s3'

import '@ImageTestVarLang/core/dist/style.css'
import '@ImageTestVarLang/dashboard/dist/style.css'

const ImageTestVarLang = new ImageTestVarLang({
  debug: true,
})

ImageTestVarLang.use(Dashboard, {
  inline: true,
  target: 'body',
})

// No client side changes needed!
ImageTestVarLang.use(AwsS3, { companionUrl: '/companion' })
