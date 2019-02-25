import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CvComponent } from './cv/cv.component';
import { InfoComponent } from './info/info.component';
import { HeaderComponent } from './Shared/header/header.component';
import { WorkInfoComponent } from './work-info/work-info.component';
import { ReferencesComponent } from './references/references.component';

@NgModule({
  declarations: [
    AppComponent,
    CvComponent,
    InfoComponent,
    HeaderComponent,
    WorkInfoComponent,
    ReferencesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
