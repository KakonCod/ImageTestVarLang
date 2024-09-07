import ImageTestVarLang from '@ImageTestVarLang/core'
import GoogleDrive from '@ImageTestVarLang/google-drive'
import Tus from '@ImageTestVarLang/tus'
import Dashboard from '@ImageTestVarLang/dashboard'
import MyCustomProvider from './MyCustomProvider.jsx'

import '@ImageTestVarLang/core/dist/style.css'
import '@ImageTestVarLang/dashboard/dist/style.css'

const ImageTestVarLang = new ImageTestVarLang({
  debug: true,
})

ImageTestVarLang.use(GoogleDrive, {
  companionUrl: 'http://localhost:3020',
})

ImageTestVarLang.use(MyCustomProvider, {
  companionUrl: 'http://localhost:3020',
})

ImageTestVarLang.use(Dashboard, {
  inline: true,
  target: 'body',
  plugins: ['GoogleDrive', 'MyCustomProvider'],
})

ImageTestVarLang.use(Tus, { endpoint: 'https://tusd.tusdemo.net/files/' })
