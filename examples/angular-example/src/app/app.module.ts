import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import {
  ImageTestVarLangAngularDashboardModule,
  ImageTestVarLangAngularStatusBarModule,
  ImageTestVarLangAngularDragDropModule,
  ImageTestVarLangAngularProgressBarModule,
  ImageTestVarLangAngularDashboardModalModule,
} from '@ImageTestVarLang' +
  /angular'
import { AppComponent } from './app.component'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ImageTestVarLangAngularDashboardModule,
    ImageTestVarLangAngularStatusBarModule,
    ImageTestVarLangAngularDashboardModalModule,
    ImageTestVarLangAngularDragDropModule,
    ImageTestVarLangAngularProgressBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
