import {Injectable} from '@angular/core';
import {ICV} from '../interfaces/services/icv';
import {AngularFireStorage} from '@angular/fire/storage';
import {AngularFirestore} from '@angular/fire/firestore';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {Info} from '../models/Info';
import {Education} from '../models/Education';
import {Job} from '../models/Job';
import {Experience} from '../models/Experience';
import {first, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CvService implements ICV {

  basicInfo = new BehaviorSubject<Info>(null);
  isSaved = new BehaviorSubject<boolean>(true);

  constructor(private storage: AngularFireStorage,
              private db: AngularFirestore) {
  }

  fetchBasicInfo() {
    return this.db.doc<Info>('info/ILxICIF5uG8HKmj77Qw3').valueChanges()
      .subscribe(info => {
        this.basicInfo.next(info);
      });
  }

  getEducation(): Observable<Education[]> {
    return this.db.collection<Education>('education').valueChanges()
      .pipe(
        map(edu => {
          return edu.sort((edua, edub) => {
            return edub.startYear - edua.startYear;
          });
        })
      );
  }

  getExperiences(): Observable<Experience[]> {
    return this.db.collection<Experience>('experiences').valueChanges();
  }

  getJobs(): Observable<Job[]> {
    return this.db.collection<Job>('jobs').valueChanges()
      .pipe(
        map(jobs => {
          return jobs.sort((joba, jobb) => {
            return jobb.startDate - joba.startDate;
          });
        })
      );
  }

  updateAbout(about: string) {
    const basicInfo = this.basicInfo.value;
    basicInfo.about = about;
    this.basicInfo.next(basicInfo);
    this.isSaved.next(false);
  }

  save() {
    this.db.doc('info/ILxICIF5uG8HKmj77Qw3').update(this.basicInfo.value);
    this.isSaved.next(true);
  }

}
