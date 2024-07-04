import { Component, OnInit } from '@angular/core'
import { ImageTestVarLang} from '@ImageTestVarLang' +
  /core'
import Webcam from '@ImageTestVarLang' +
  /webcam'
import Tus from '@ImageTestVarLang' +
  /tus'
import GoogleDrive from '@ImageTestVarLang' +
  /google-drive'

@Component({
  selector: 'app-root',
  template: /* html */ `
    <h1>ImageTestVarLang Angular Example!</h1>
    <h2>Inline dashboard</h2>
    <label>
      <input
        type="checkbox"
        (change)="showInline = $any($event.target)?.checked"
        [checked]="showInline"
      />
      Show Dashboard
    </label>

    <ImageTestVarLang -dashboard
      [ImageTestVarLang ]="ImageTestVarLang"
      [props]="dashboardProps"
      *ngIf="showInline"
    ></ImageTestVarLang-dashboard>

    <h2>Modal Dashboard</h2>
    <div>
      <ImageTestVarLang -dashboard-modal
        [ImageTestVarLang ]="ImageTestVarLang"
        [open]="showModal"
        [props]="dashboardModalProps"
      ></ImageTestVarLang-dashboard-modal>
      <button (click)="showModal = !showModal">
        {{ showModal ? 'Close dashboard' : 'Open dashboard' }}
      </button>
    </div>

    <h2>Drag Drop Area</h2>
    <ImageTestVarLang -drag-drop [ImageTestVarLang ]="ImageTestVarLang" [props]="{}"></ImageTestVarLang-drag-drop>

    <h2>Progress Bar</h2>
    <ImageTestVarLang -progress-bar
      [ImageTestVarLang ]="ImageTestVarLang"
      [props]="{ hideAfterFinish: false }"
    ></ImageTestVarLang-progress-bar>
  `,
  styleUrls: [],
})
export class AppComponent implements OnInit {
  title = 'angular-example'

  showInline = false

  showModal = false

  dashboardProps = {
    plugins: ['Webcam'],
  }

  dashboardModalProps = {
    target: document.body,
    onRequestCloseModal: (): void => {
      this.showModal = false
    },
  }

  ImageTestVarLang: ImageTestVarLang = new ImageTestVarLang({ debug: true, autoProceed: true })

  ngOnInit(): void {
    this.ImageTestVarLang
      .use(Webcam)
      .use(Tus, { endpoint: 'https://tusd.tusdemo.net/files/' })
      .use(GoogleDrive, { companionUrl: 'https://companion.ImageTestVarLang' +
          .io' })
  }
}
