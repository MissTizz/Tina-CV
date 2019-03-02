import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HeaderComponent} from './shared/header/header.component';
import {MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule, MatToolbarModule} from '@angular/material';
import {BasicInfoComponent} from './basic-info/basic-info.component';
import {CvComponent} from './cv/cv.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {ExtendedInfoComponent} from './extended-info/extended-info.component';
import {CvService} from './shared/services/cv.service';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireStorageModule} from '@angular/fire/storage';
import { AboutComponent } from './cv-components/about/about.component';
import { EducationComponent } from './cv-components/education/education.component';
import { LanguagesComponent } from './cv-components/languages/languages.component';
import { ExperiencesComponent } from './cv-components/experiences/experiences.component';
import { JobsComponent } from './cv-components/jobs/jobs.component';
import { ZeroYearPipe } from './shared/models/shared/pipes/zero-year.pipe';
import {TextFieldModule} from '@angular/cdk/text-field';
import {ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from './shared/modules/material/material.module';
import {FirebaseModule} from './shared/modules/firebase/firebase.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BasicInfoComponent,
    CvComponent,
    ExtendedInfoComponent,
    AboutComponent,
    EducationComponent,
    LanguagesComponent,
    ExperiencesComponent,
    JobsComponent,
    ZeroYearPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    TextFieldModule,
    ReactiveFormsModule,
    MaterialModule,
    FirebaseModule
  ],
  providers: [
    {
      provide: 'InterfaceCV',
      useClass: CvService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
