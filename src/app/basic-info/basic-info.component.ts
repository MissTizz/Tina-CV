import {Component, Inject, Input, OnInit} from '@angular/core';
import {ICV} from '../shared/interfaces/services/icv';
import {Info} from '../shared/models/Info';

@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.scss']
})
export class BasicInfoComponent implements OnInit {

  @Input() info: Info;

  constructor() { }

  ngOnInit() {
  }

}
