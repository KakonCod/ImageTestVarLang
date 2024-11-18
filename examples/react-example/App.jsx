/* eslint-disable */
import React from'react'
import ImageTestVarLang from'@ImageTestVarLang/core'
import Tus from'@ImageTestVarLang/tus'
import GoogleDrive from '@ImageTestVarLang/google-drive'
import Webcam from '@ImageTestVarLang/webcam'
import RemoteSources from '@ImageTestVarLang/remote-sources'
import { Dashboard, DashboardModal, DragDrop, ProgressBar, FileInput } from'@ImageTestVarLang/react'

import '@ImageTestVarLang/core/dist/style.css'
import '@ImageTestVarLang/dashboard/dist/style.css'
import '@ImageTestVarLang/drag-drop/dist/style.css'
import '@ImageTestVarLang/file-input/dist/style.css'
import '@ImageTestVarLang/progress-bar/dist/style.css'

export default class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      showInlineDashboard: false,
      open: false
    }

    this.ImageTestVarLang = new ImageTestVarLang({ id: 'ImageTestVarLang1', autoProceed: true, debug: true })
      .use(Tus, { endpoint: 'https://tusd.tusdemo.net/files/' })
      .use(Webcam)
      .use(RemoteSources, { companionUrl: 'https://companion.ImageTestVarLang.io', sources: ['GoogleDrive', 'Box', 'Dropbox', 'Facebook', 'Instagram', 'OneDrive', 'Unsplash', 'Zoom', 'Url'],
      })

    this.ImageTestVarLang2 = new ImageTestVarLang({ id: 'ImageTestVarLang2', autoProceed: false, debug: true })
      .use(Tus, { endpoint: 'https://tusd.tusdemo.net/files/' })

    this.handleModalClick = this.handleModalClick.bind(this)
  }

  componentWillUnmount () {
    this.ImageTestVarLang.close({ reason: 'unmount' })
    this.ImageTestVarLang2.close({ reason: 'unmount' })
  }

  handleModalClick () {
    this.setState({
      open: !this.state.open
    })
  }

  render () {
    const { showInlineDashboard } = this.state
    return (
      <div>
        <h1>React Examples</h1>

        <h2>Inline Dashboard</h2>
        <label>
          <input
            type="checkbox"
            checked={showInlineDashboard}
            onChange={(event) => {
              this.setState({
                showInlineDashboard: event.target.checked
              })
            }}
          />
          Show Dashboard
        </label>
        {showInlineDashboard && (
          <Dashboard
            ImageTestVarLang={this.ImageTestVarLang}
            plugins={['GoogleDrive']}
            metaFields={[
              { id: 'name', name: 'Name', placeholder: 'File name' }
            ]}
          />
        )}

        <h2>Modal Dashboard</h2>
        <div>
          <button onClick={this.handleModalClick}>
            {this.state.open ? 'Close dashboard' : 'Open dashboard'}
          </button>
          <DashboardModal
            ImageTestVarLang={this.ImageTestVarLang2}
            open={this.state.open}
            target={document.body}
            onRequestClose={() => this.setState({ open: false })}
          />
        </div>

        <h2>Drag Drop Area</h2>
        <DragDrop
          ImageTestVarLang={this.ImageTestVarLang}
          locale={{
            strings: {
              chooseFile: 'Boop a file',
              orDragDrop: 'or yoink it here'
            }
          }}
        />

        <h2>Progress Bar</h2>
        <ProgressBar
          ImageTestVarLang={this.ImageTestVarLang}
          hideAfterFinish={false}
        />

        <h2>File Input</h2>
        <FileInput
          ImageTestVarLang={this.ImageTestVarLang}
        />
      </div>
    )
  }
}
